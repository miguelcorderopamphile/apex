mod error;
mod tasa_bcv;

/// Puerto del servidor HTTP/Axum. Cambiar aquí y en los URLs de QR.
const SERVIDOR_PORT: u16 = 4000;

use datiolabs_core::capacidades::{
    self, ErrorNegocio, capacidades_de_rubros, rubros_activos, validar_linea,
};
use datiolabs_core::db::{Database as Ledger, DbError};
use datiolabs_core::models::{
    Catalogo, Categoria, ConfigNegocio, EstadoVenta, Jornada, LineasVenta, MetodoPagoConfig,
    MotivoMovimiento, MovimientoStock, Nombre, Operador, PagoVenta, Producto, SemaforoStock, Sku,
    TasaImpuesto, Venta,
};
use datiolabs_core::modulos::licoreria;
use datiolabs_core::modulos::panaderia::Lote;
use error::UIError;
use rust_decimal::Decimal;
use rust_decimal_macros::dec;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::str::FromStr;
use std::sync::{Arc, Mutex};
use std::time::{SystemTime, UNIX_EPOCH};
use tauri::Manager;

use tasa_bcv::{ServicioTasa, TasaInfo, iniciar_refresco};

use uuid::Uuid;

use axum::{
    Router,
    extract::{Request, State},
    http::{
        HeaderMap, HeaderValue, Method, StatusCode,
        header::{COOKIE, SET_COOKIE},
    },
    middleware::{self, Next},
    response::sse::{Event, Sse},
    response::{Html, IntoResponse, Json, Response},
    routing::{delete, get, post, put},
};
use futures::stream::Stream;
use rand::Rng;
use std::collections::HashMap;
use std::convert::Infallible;
use tokio::sync::broadcast;
use tower_http::cors::{Any, CorsLayer};
use tower_http::services::ServeDir;

const SESSION_TTL_SECS: u64 = 7 * 24 * 3600;
const SESSION_KEY_PREFIX: &[u8] = b"session:";
const _MAX_SESSIONS: usize = 128;

#[derive(Clone)]
struct SessionStore {
    tree: Arc<sled::Tree>,
}

impl SessionStore {
    fn new(db: &sled::Db) -> Result<Self, UIError> {
        let tree = Arc::new(
            db.open_tree("sesiones")
                .map_err(|e| UIError::new("error abriendo sesiones", &e.to_string()))?,
        );
        Ok(Self { tree })
    }

    fn now_unix() -> Result<i64, UIError> {
        SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .map(|d| d.as_secs() as i64)
            .map_err(|_| UIError::new("error de tiempo", "reloj del sistema anterior a UNIX epoch"))
    }

    fn create(&self) -> Result<[u8; 32], UIError> {
        let mut rng = rand::rng();
        let mut token = [0u8; 32];
        for b in &mut token {
            *b = rng.sample(rand::distr::Alphanumeric);
        }
        let now = Self::now_unix()?;
        let expiry = (now + SESSION_TTL_SECS as i64).to_be_bytes();
        let mut key = [0u8; 8 + 32];
        key[..8].copy_from_slice(SESSION_KEY_PREFIX);
        key[8..].copy_from_slice(&token);
        self.tree
            .insert(&key, &expiry)
            .map_err(|e| UIError::new("error creando sesion", &e.to_string()))?;
        Ok(token)
    }

    fn validate(&self, token: &[u8; 32]) -> bool {
        let mut key = [0u8; 8 + 32];
        key[..8].copy_from_slice(SESSION_KEY_PREFIX);
        key[8..].copy_from_slice(token);
        let now = match Self::now_unix() {
            Ok(n) => n,
            Err(_) => return false,
        };
        match self.tree.get(&key) {
            Ok(Some(expiry_bytes)) => {
                if expiry_bytes.len() == 8 {
                    if let Ok(arr) = <[u8; 8]>::try_from(expiry_bytes.as_ref()) {
                        let expiry = i64::from_be_bytes(arr);
                        if expiry > now {
                            return true;
                        }
                        let _ = self.tree.remove(&key);
                    }
                }
            }
            _ => {}
        }
        false
    }

    fn remove(&self, token: &[u8; 32]) {
        let mut key = [0u8; 8 + 32];
        key[..8].copy_from_slice(SESSION_KEY_PREFIX);
        key[8..].copy_from_slice(token);
        let _ = self.tree.remove(&key);
    }
}

fn extract_session_token(headers: &HeaderMap) -> Option<[u8; 32]> {
    let cookie_header = headers.get(COOKIE)?.to_str().ok()?;
    let prefix = "datiolabs_session=";
    for part in cookie_header.split(';') {
        let part = part.trim();
        if let Some(val) = part.strip_prefix(prefix) {
            if val.len() == 32 {
                let mut token = [0u8; 32];
                token.copy_from_slice(val.as_bytes());
                return Some(token);
            }
        }
    }
    None
}

async fn auth_middleware(
    State(session_store): State<SessionStore>,
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    let token = extract_session_token(request.headers()).ok_or(StatusCode::UNAUTHORIZED)?;
    if !session_store.validate(&token) {
        return Err(StatusCode::UNAUTHORIZED);
    }
    Ok(next.run(request).await)
}

const SESSION_COOKIE_NAME: &str = "datiolabs_session";
const SESSION_COOKIE_PREFIX_LEN: usize = 17; // "datiolabs_session="
const SESSION_COOKIE_SUFFIX: &str = "; HttpOnly; SameSite=Lax; Path=/; Max-Age=604800";
const SESSION_COOKIE_SUFFIX_LEN: usize = 40;
const MAX_COOKIE_LEN: usize = SESSION_COOKIE_PREFIX_LEN + 32 + SESSION_COOKIE_SUFFIX_LEN;

fn write_session_cookie(token: &[u8; 32], buf: &mut [u8; MAX_COOKIE_LEN]) -> usize {
    let mut pos = 0;
    buf[pos..pos + SESSION_COOKIE_PREFIX_LEN].copy_from_slice(SESSION_COOKIE_NAME.as_bytes());
    buf[SESSION_COOKIE_PREFIX_LEN - 1] = b'=';
    pos = SESSION_COOKIE_PREFIX_LEN;
    buf[pos..pos + 32].copy_from_slice(token);
    pos += 32;
    buf[pos..pos + SESSION_COOKIE_SUFFIX_LEN].copy_from_slice(SESSION_COOKIE_SUFFIX.as_bytes());
    pos + SESSION_COOKIE_SUFFIX_LEN
}

fn make_cookie_header(token: &[u8; 32]) -> Option<HeaderValue> {
    let mut buf = [0u8; MAX_COOKIE_LEN];
    let len = write_session_cookie(token, &mut buf);
    let s = std::str::from_utf8(&buf[..len]).ok()?;
    HeaderValue::from_str(s).ok()
}

fn _clear_session_cookie() -> &'static str {
    "datiolabs_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0"
}

#[derive(Clone)]
struct AxumAppState {
    ledger: Arc<Mutex<Ledger>>,
    servicio_tasa: Arc<ServicioTasa>,
    session_store: SessionStore,
    tx: broadcast::Sender<()>,
    rate_limiter: RateLimiter,
}

async fn api_auth_login(
    State(state): State<AxumAppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<impl IntoResponse, (StatusCode, String)> {
    let ledger = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cfg = match ledger.cargar_config() {
        Ok(Some(c)) => c,
        _ => {
            return Err((
                StatusCode::UNAUTHORIZED,
                "Credenciales inválidas".to_string(),
            ));
        }
    };
    drop(ledger);

    state
        .rate_limiter
        .check_and_record("admin_login")
        .map_err(|e| (StatusCode::TOO_MANY_REQUESTS, e))?;

    if cfg.pin_dueno_sha256.is_empty() {
        return Err((
            StatusCode::UNAUTHORIZED,
            "Credenciales inválidas".to_string(),
        ));
    }
    if cfg.pin_dueno_sha256 != hash_pin(&payload.pin) {
        return Err((
            StatusCode::UNAUTHORIZED,
            "Credenciales inválidas".to_string(),
        ));
    }
    state.rate_limiter.clear("admin_login");
    let token = state.session_store.create().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cookie = make_cookie_header(&token).ok_or((
        StatusCode::INTERNAL_SERVER_ERROR,
        "Error al crear cookie de sesión".to_string(),
    ))?;
    let mut resp = Json(LoginResponse {
        ok: true,
        message: hex_token(&token),
    })
    .into_response();
    resp.headers_mut().insert(SET_COOKIE, cookie);
    Ok(resp)
}

async fn api_auth_logout(
    State(state): State<AxumAppState>,
    headers: HeaderMap,
) -> Result<impl IntoResponse, (StatusCode, String)> {
    if let Some(token) = extract_session_token(&headers) {
        state.session_store.remove(&token);
    }
    let clear =
        HeaderValue::from_static("datiolabs_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
    let mut resp = Json(LoginResponse {
        ok: true,
        message: "Sesion cerrada".into(),
    })
    .into_response();
    resp.headers_mut().insert(SET_COOKIE, clear);
    Ok(resp)
}

async fn serve_panel_html() -> Html<&'static str> {
    Html(include_str!("../panel.html"))
}

async fn api_spa_content() -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let html_raw = include_str!("../../ui/dist/index.html");
    let assets_path = std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../../ui/dist/assets");
    let js_files = std::fs::read_dir(&assets_path).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error reading assets: {e}"),
        )
    })?;
    let mut js_url = String::new();
    let mut css_url = String::new();
    for entry in js_files.flatten() {
        let name = entry.file_name().to_string_lossy().to_string();
        if name.ends_with(".js") {
            js_url = format!("/assets/{}", name);
        }
        if name.ends_with(".css") {
            css_url = format!("/assets/{}", name);
        }
    }
    let html = html_raw
        .replace("href=\"assets/", "href=\"/assets/")
        .replace("src=\"assets/", "src=\"/assets/");
    Ok(Json(serde_json::json!({
        "html": html,
        "jsUrl": js_url,
        "cssUrl": css_url,
    })))
}

async fn api_panel(
    State(state): State<AxumAppState>,
) -> Result<Json<PanelDto>, (StatusCode, String)> {
    let ledger = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let catalogo = ledger.cargar_catalogo().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let limite = ahora_unix() - 86_400;
    let ventas = ledger.ventas_recientes(2_000).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;

    let mut usd = Decimal::ZERO;
    let mut bs = Decimal::ZERO;
    let mut tickets = 0usize;

    // Fixed-size columnar tracker for top products (max 32 unique names)
    const MAX_VENDIDOS: usize = 32;
    const MAX_TOP: usize = 5;
    let mut vendidos_nombre: [Nombre; MAX_VENDIDOS] = [Nombre::empty(); MAX_VENDIDOS];
    let mut vendidos_cant: [Decimal; MAX_VENDIDOS] = [Decimal::ZERO; MAX_VENDIDOS];
    let mut vendidos_len: usize = 0;

    for v in &ventas {
        if v.estado != EstadoVenta::Cerrada || v.fecha_cierre_unix < limite {
            continue;
        }
        tickets += 1;
        usd += v.total_usd;
        bs += v.total_bs;
        for i in 0..v.lineas.nombres.len() {
            let nombre = &v.lineas.nombres[i];
            let cant = v.lineas.cantidades[i];
            // Search existing entry
            let mut found = false;
            for j in 0..vendidos_len {
                if vendidos_nombre[j].as_str() == nombre.as_str() {
                    vendidos_cant[j] += cant;
                    found = true;
                    break;
                }
            }
            if !found && vendidos_len < MAX_VENDIDOS {
                vendidos_nombre[vendidos_len] = nombre.clone();
                vendidos_cant[vendidos_len] = cant;
                vendidos_len += 1;
            }
        }
    }

    // Insertion sort top-5 (bounded, no allocation)
    let mut top_len: usize = 0;
    let mut top_nombre: [Nombre; MAX_TOP] = [Nombre::empty(); MAX_TOP];
    let mut top_cant: [Decimal; MAX_TOP] = [Decimal::ZERO; MAX_TOP];
    for k in 0..vendidos_len {
        if top_len < MAX_TOP {
            top_nombre[top_len] = vendidos_nombre[k].clone();
            top_cant[top_len] = vendidos_cant[k];
            top_len += 1;
            // Bubble up
            let mut m = top_len - 1;
            while m > 0 && top_cant[m] > top_cant[m - 1] {
                top_nombre.swap(m, m - 1);
                top_cant.swap(m, m - 1);
                m -= 1;
            }
        } else if vendidos_cant[k] > top_cant[MAX_TOP - 1] {
            top_nombre[MAX_TOP - 1] = vendidos_nombre[k].clone();
            top_cant[MAX_TOP - 1] = vendidos_cant[k];
            let mut m = MAX_TOP - 1;
            while m > 0 && top_cant[m] > top_cant[m - 1] {
                top_nombre.swap(m, m - 1);
                top_cant.swap(m, m - 1);
                m -= 1;
            }
        }
    }

    let mut top: Vec<TopProductoDto> = Vec::with_capacity(top_len);
    for i in 0..top_len {
        top.push(TopProductoDto {
            nombre: top_nombre[i].clone(),
            cantidad: top_cant[i],
        });
    }

    // Low-stock critical items (max 16)
    let mut criticos: Vec<CriticoDto> = Vec::new();
    for i in 0..catalogo.len() {
        if catalogo.stock(i) <= dec!(5) && criticos.len() < MAX_PANEL_CRITICOS {
            criticos.push(CriticoDto {
                sku: catalogo.sku_obj(i),
                nombre: catalogo.nombre_obj(i),
                stock: catalogo.stock(i),
            });
        }
    }

    let cuentas_todas = ledger.cuentas_abiertas().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let abiertas = cuentas_todas.len();

    // Financial metrics
    let tasa = state.servicio_tasa.info_actual().valor;
    let costo_total_usd = usd * rust_decimal_macros::dec!(0.65);
    let ganancia_bruta_usd = usd - costo_total_usd;
    let impuestos_usd = usd * rust_decimal_macros::dec!(0.12);
    let ganancia_neta_usd = ganancia_bruta_usd - impuestos_usd;
    let ganancia_neta_sin_imp_usd = ganancia_bruta_usd;
    let ganancia_neta_bs = ganancia_neta_usd * tasa;

    // Deudas y dinero en la calle
    let deudas_abiertas = cuentas_todas.iter().filter(|v| v.tipo == "deuda").count();
    let dinero_en_la_calle_usd: Decimal = cuentas_todas
        .iter()
        .filter(|v| v.tipo == "deuda")
        .map(|v| {
            let total = v.lineas.total_usd();
            let abonos = v.abonos_usd.unwrap_or(Decimal::ZERO);
            if total > abonos {
                total - abonos
            } else {
                Decimal::ZERO
            }
        })
        .sum();
    let dinero_en_la_calle_bs = dinero_en_la_calle_usd * tasa;

    // Dinero por categoria
    let categorias = ledger.listar_categorias().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut mapa_cats: std::collections::HashMap<String, (usize, Decimal, Decimal, Decimal)> =
        std::collections::HashMap::new();
    let mut total_bruto_global: Decimal = Decimal::ZERO;
    for i in 0..catalogo.len() {
        let cat_id = catalogo
            .categoria_id(i)
            .unwrap_or_else(|| "cat-general".to_string());
        let entry = mapa_cats.entry(cat_id.clone()).or_insert((
            0,
            Decimal::ZERO,
            Decimal::ZERO,
            Decimal::ZERO,
        ));
        entry.0 += 1;
        let st = if catalogo.sin_stock(i) {
            Decimal::ZERO
        } else {
            catalogo.stock(i)
        };
        let bruto_unit = catalogo
            .precio_bruto_usd(i)
            .unwrap_or(catalogo.precio_usd(i) * rust_decimal_macros::dec!(0.65));
        let venta_unit = catalogo.precio_usd(i);
        entry.1 += st;
        entry.2 += st * bruto_unit;
        entry.3 += st * venta_unit;
        total_bruto_global += st * bruto_unit;
    }
    let cat_nombre_map: std::collections::HashMap<String, String> = categorias
        .iter()
        .map(|c| (c.id.clone(), c.nombre.clone()))
        .collect();
    let mut dinero_por_categoria: Vec<CategoriaDineroBrutoDto> = mapa_cats
        .into_iter()
        .filter(|(_, (n, _, b, _))| *n > 0 || *b > Decimal::ZERO)
        .map(|(cat_id, (cant_prod, unidades, bruto, venta))| {
            let nombre = cat_nombre_map
                .get(&cat_id)
                .cloned()
                .unwrap_or_else(|| "General".to_string());
            let margen = if venta > bruto {
                venta - bruto
            } else {
                Decimal::ZERO
            };
            let margen_pct = if venta > Decimal::ZERO {
                format!("{:.1}", margen / venta * rust_decimal_macros::dec!(100))
            } else {
                "0.0".to_string()
            };
            let pct_cap = if total_bruto_global > Decimal::ZERO {
                format!(
                    "{:.1}",
                    bruto / total_bruto_global * rust_decimal_macros::dec!(100)
                )
            } else {
                "0.0".to_string()
            };
            CategoriaDineroBrutoDto {
                categoria_id: cat_id,
                nombre,
                cantidad_productos: cant_prod,
                unidades_stock: unidades,
                dinero_bruto_usd: bruto,
                dinero_bruto_bs: bruto * tasa,
                dinero_venta_usd: venta,
                dinero_venta_bs: venta * tasa,
                margen_bruto_proyectado_usd: margen,
                margen_bruto_pct: margen_pct,
                porcentaje_capital: pct_cap,
            }
        })
        .collect();
    dinero_por_categoria.sort_by(|a, b| b.dinero_bruto_usd.cmp(&a.dinero_bruto_usd));

    Ok(Json(PanelDto {
        ventas_24h_usd: usd,
        ventas_24h_bs: bs,
        tickets_24h: tickets,
        total_productos: catalogo.len(),
        valor_inventario_usd: catalogo.valor_inventario_usd(),
        costo_total_usd,
        ganancia_bruta_usd,
        ganancia_neta_usd,
        ganancia_neta_sin_imp_usd,
        ganancia_neta_bs,
        criticos,
        cuentas_abiertas: abiertas,
        deudas_abiertas,
        dinero_en_la_calle_usd,
        dinero_en_la_calle_bs,
        top_productos: top,
        dinero_por_categoria,
    }))
}

async fn api_tasa(
    State(state): State<AxumAppState>,
) -> Result<Json<TasaInfo>, (StatusCode, String)> {
    Ok(Json(state.servicio_tasa.info_actual()))
}

async fn api_tasa_pendiente(
    State(state): State<AxumAppState>,
) -> Result<Json<Option<TasaInfo>>, (StatusCode, String)> {
    Ok(Json(state.servicio_tasa.tasa_pendiente()))
}

async fn api_tasa_aplicar(
    State(state): State<AxumAppState>,
) -> Result<Json<TasaInfo>, (StatusCode, String)> {
    let result = state
        .servicio_tasa
        .aplicar_tasa_pendiente()
        .map(Json)
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("Solicitud inválida: {e}")))?;
    let _ = state.tx.send(());
    Ok(result)
}

#[derive(Deserialize)]
struct ManualRateRequest {
    valor: String,
}

async fn api_tasa_manual(
    State(state): State<AxumAppState>,
    Json(payload): Json<ManualRateRequest>,
) -> Result<Json<TasaInfo>, (StatusCode, String)> {
    let valor = Decimal::from_str(&payload.valor.trim().replace(',', "."))
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("Solicitud inválida: {e}")))?;
    let result = state
        .servicio_tasa
        .establecer_tasa_manual(valor)
        .map(Json)
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("Solicitud inválida: {e}")))?;
    let _ = state.tx.send(());
    Ok(result)
}

async fn api_sse_events(
    State(state): State<AxumAppState>,
) -> Sse<impl Stream<Item = Result<Event, Infallible>>> {
    let mut rx = state.tx.subscribe();
    let stream = async_stream::stream! {
        loop {
            match rx.recv().await {
                Ok(_) => {
                    yield Ok(Event::default().event("panel-update").data(""));
                }
                Err(_) => break,
            }
        }
    };
    Sse::new(stream).keep_alive(axum::response::sse::KeepAlive::default())
}

async fn api_cuentas(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<CuentaDto>>, (StatusCode, String)> {
    let ledger = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cuentas = ledger.cuentas_abiertas().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(cuentas.iter().map(cuenta_dto).collect()))
}

async fn api_productos(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<ProductoDto>>, (StatusCode, String)> {
    let ledger = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let catalogo = ledger.cargar_catalogo().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let filas = (0..catalogo.len())
        .map(|i| ProductoDto {
            sku: catalogo.sku_obj(i),
            nombre: catalogo.nombre_obj(i),
            precio_usd: catalogo.precio_usd(i),
            impuesto_pct: catalogo.impuesto_pct(i),
            stock: catalogo.stock(i),
            capacidades: catalogo.capacidades(i),
            categoria_id: catalogo.categoria_id(i),
            precio_bruto_usd: catalogo.precio_bruto_usd(i),
            margen_pct: catalogo.margen_pct(i),
            sin_stock: catalogo.sin_stock(i),
            unidad: catalogo.unidad(i),
            es_caja: catalogo.es_caja(i),
            unidades_por_caja: catalogo.unidades_por_caja(i),
            precio_paquete_usd: catalogo.precio_paquete_usd(i),
            nombre_paquete: catalogo.nombre_paquete(i),
            presentaciones: catalogo
                .presentaciones(i)
                .iter()
                .map(PresentacionDto::from)
                .collect(),
        })
        .collect();
    Ok(Json(filas))
}

// ---------------- Axum handlers: escritura ----------------

use axum::extract::Path;

async fn api_cuentas_abrir(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let etiqueta = body.get("etiqueta").cloned().unwrap_or_default();
    let tipo = body.get("tipo").cloned();
    let cliente = body.get("cliente").cloned();
    let nota = body.get("nota").cloned();
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let tasa = state.servicio_tasa.info_actual().valor;
    let venta = datiolabs_core::models::Venta {
        id: uuid::Uuid::new_v4().to_string(),
        etiqueta,
        es_cuenta_abierta: true,
        estado: datiolabs_core::models::EstadoVenta::Abierta,
        lineas: datiolabs_core::models::LineasVenta::nuevas(),
        tasa_del_dia: tasa,
        total_usd: rust_decimal::Decimal::ZERO,
        total_bs: rust_decimal::Decimal::ZERO,
        monto_recibido_bs: rust_decimal::Decimal::ZERO,
        vuelto_bs: rust_decimal::Decimal::ZERO,
        pagos: Vec::new(),
        estado_vuelto: None,
        metodo_vuelto: None,
        monto_vuelto_usd: None,
        tasa_vuelto: None,
        fecha_apertura_unix: ahora_unix(),
        fecha_cierre_unix: 0,
        firma_sha256: String::new(),
        tipo: tipo.unwrap_or_else(|| "activa".to_string()),
        cliente,
        nota,
        abonos_usd: Some(rust_decimal::Decimal::ZERO),
        abonos_bs: Some(rust_decimal::Decimal::ZERO),
    };
    let guardada = db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ventaId": guardada.id })))
}

async fn api_cuentas_consumo(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let sku = body.get("sku").cloned().unwrap_or_default();
    let cantidad = body
        .get("cantidad")
        .cloned()
        .unwrap_or_else(|| "1".to_string());
    let modo = body
        .get("modo_venta")
        .cloned()
        .unwrap_or_else(|| "unidad".to_string());
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut venta = db
        .cargar_venta(&id)
        .ok()
        .flatten()
        .filter(|v| v.es_cuenta_abierta && v.estado == datiolabs_core::models::EstadoVenta::Abierta)
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    let catalogo = db.cargar_catalogo().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let idx = catalogo
        .indice_de(&sku)
        .ok_or((StatusCode::BAD_REQUEST, "SKU inválido".to_string()))?;
    let cant: rust_decimal::Decimal = cantidad
        .parse()
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("Cantidad inválida: {e}")))?;
    let (precio_efectivo, unidades_por_venta) = resolver_precio_presentacion(&catalogo, idx, &modo);
    let cant_unidades = cant * rust_decimal::Decimal::from(unidades_por_venta);
    validar_linea(
        catalogo.capacidades(idx),
        cant_unidades,
        catalogo.stock(idx),
    )
    .map_err(|e| (StatusCode::BAD_REQUEST, format!("{e}")))?;
    let tasa = state.servicio_tasa.info_actual().valor;
    let sku_obj = catalogo.sku_obj(idx);
    if let Some(pos) = venta.lineas.skus.iter().position(|s| s == &sku_obj) {
        venta.lineas.cantidades[pos] += cant;
    } else {
        venta.lineas.agregar(
            sku_obj,
            catalogo.nombre_obj(idx),
            cant,
            precio_efectivo,
            tasa,
            modo.clone(),
        );
    }
    descontar_con_lotes_interno(&*db, &catalogo, idx, cant, &venta.id, &modo).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_cuentas_eliminar_consumo(
    State(state): State<AxumAppState>,
    Path((id, idx)): Path<(String, usize)>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut venta = db
        .cargar_venta(&id)
        .ok()
        .flatten()
        .filter(|v| v.es_cuenta_abierta && v.estado == datiolabs_core::models::EstadoVenta::Abierta)
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    if idx >= venta.lineas.skus.len() {
        return Err((StatusCode::BAD_REQUEST, "Solicitud inválida".to_string()));
    }
    let sku_removed = venta.lineas.skus[idx];
    let cant_removed = venta.lineas.cantidades[idx];
    venta.lineas.skus.remove(idx);
    venta.lineas.nombres.remove(idx);
    venta.lineas.cantidades.remove(idx);
    venta.lineas.precios_usd.remove(idx);
    venta.lineas.tasas_bloqueadas.remove(idx);
    // Restaurar stock si el producto controla inventario
    let tree_p = db.inner_db().open_tree("productos").map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let sin_stock = tree_p
        .get(sku_removed.as_bytes())
        .ok()
        .flatten()
        .and_then(|v| {
            bincode::deserialize::<datiolabs_core::models::Producto>(&v)
                .or_else(|_| serde_json::from_slice::<datiolabs_core::models::Producto>(&v))
                .ok()
        })
        .map(|p| p.sin_stock)
        .unwrap_or(false);
    if !sin_stock {
        let mov = datiolabs_core::models::MovimientoStock {
            id: uuid::Uuid::new_v4().to_string(),
            sku: sku_removed.as_str().to_string(),
            delta: cant_removed,
            motivo: datiolabs_core::models::MotivoMovimiento::Ajuste,
            venta_id: Some(id.clone()),
            fecha_unix: ahora_unix(),
            firma_sha256: String::new(),
        };
        db.aplicar_movimiento(mov, |_, _| {}).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
    }
    db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_cuentas_abonar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let usd = body.get("montoUsd").and_then(|v| v.as_f64()).unwrap_or(0.0);
    let bs = body.get("montoBs").and_then(|v| v.as_f64()).unwrap_or(0.0);
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut venta = db
        .cargar_venta(&id)
        .ok()
        .flatten()
        .filter(|v| v.es_cuenta_abierta && v.estado == datiolabs_core::models::EstadoVenta::Abierta)
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    if venta.lineas.skus.is_empty() {
        return Err((
            StatusCode::BAD_REQUEST,
            "No se puede abonar a una cuenta sin productos".to_string(),
        ));
    }
    let usd_d = rust_decimal::Decimal::try_from(usd).unwrap_or(rust_decimal::Decimal::ZERO);
    let bs_d = rust_decimal::Decimal::try_from(bs).unwrap_or(rust_decimal::Decimal::ZERO);
    venta.abonos_usd = Some(venta.abonos_usd.unwrap_or(rust_decimal::Decimal::ZERO) + usd_d);
    venta.abonos_bs = Some(venta.abonos_bs.unwrap_or(rust_decimal::Decimal::ZERO) + bs_d);
    db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_cuentas_convertir_deuda(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let cliente = body
        .get("cliente")
        .and_then(|v| v.as_str())
        .map(|s| s.trim().to_string())
        .filter(|s| !s.is_empty());
    let nota = body
        .get("nota")
        .and_then(|v| v.as_str())
        .map(|s| s.trim().to_string());
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut venta = db
        .cargar_venta(&id)
        .ok()
        .flatten()
        .filter(|v| v.es_cuenta_abierta && v.estado == datiolabs_core::models::EstadoVenta::Abierta)
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;

    venta.tipo = "deuda".to_string();
    if let Some(c) = cliente {
        venta.etiqueta = c.clone();
        venta.cliente = Some(c);
    }
    if nota.is_some() {
        venta.nota = nota;
    }
    let guardada = db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::to_value(cuenta_dto(&guardada)).map_err(
        |e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error de serialización: {e}"),
            )
        },
    )?))
}

async fn api_cuentas_cerrar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let recibido = body
        .get("montoRecibidoBs")
        .and_then(|v| v.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut venta = db
        .cargar_venta(&id)
        .ok()
        .flatten()
        .filter(|v| v.es_cuenta_abierta && v.estado == datiolabs_core::models::EstadoVenta::Abierta)
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    let total_bruto_usd = venta.lineas.total_usd();
    let abonos_usd = venta.abonos_usd.unwrap_or(rust_decimal::Decimal::ZERO);
    let total_neto_usd = if abonos_usd > total_bruto_usd {
        rust_decimal::Decimal::ZERO
    } else {
        total_bruto_usd - abonos_usd
    };
    let tasa = state.servicio_tasa.info_actual().valor;
    let total_neto_bs = if tasa > rust_decimal::Decimal::ZERO {
        total_neto_usd * tasa
    } else {
        venta.lineas.total_bs()
    };
    let es_deuda = venta.tipo == "deuda";
    venta.estado = datiolabs_core::models::EstadoVenta::Cerrada;
    venta.total_usd = total_neto_usd;
    venta.total_bs = total_neto_bs;
    venta.monto_recibido_bs = recibido;
    venta.vuelto_bs = if recibido > total_neto_bs {
        recibido - total_neto_bs
    } else {
        rust_decimal::Decimal::ZERO
    };
    venta.fecha_cierre_unix = ahora_unix();
    let cerrada = db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;

    if abonos_usd > total_bruto_usd {
        let excedente = abonos_usd - total_bruto_usd;
        let saldo_venta = datiolabs_core::models::Venta {
            id: uuid::Uuid::new_v4().to_string(),
            etiqueta: format!("Saldo a favor de {}", cerrada.etiqueta),
            es_cuenta_abierta: false,
            estado: datiolabs_core::models::EstadoVenta::Cerrada,
            lineas: datiolabs_core::models::LineasVenta::nuevas(),
            tasa_del_dia: tasa,
            total_usd: rust_decimal::Decimal::ZERO,
            total_bs: rust_decimal::Decimal::ZERO,
            monto_recibido_bs: rust_decimal::Decimal::ZERO,
            vuelto_bs: rust_decimal::Decimal::ZERO,
            pagos: vec![datiolabs_core::models::PagoVenta {
                metodo: "SALDO.A_FAVOR".to_string(),
                moneda: "USD".to_string(),
                monto_usd: excedente,
                monto_bs: excedente * tasa,
                tasa_cambio: Some(tasa),
                referencia: Some(cerrada.id.clone()),
            }],
            estado_vuelto: Some("SALDO_A_FAVOR".to_string()),
            metodo_vuelto: None,
            monto_vuelto_usd: Some(excedente),
            tasa_vuelto: Some(tasa),
            fecha_apertura_unix: ahora_unix(),
            fecha_cierre_unix: ahora_unix(),
            firma_sha256: String::new(),
            tipo: "saldo_a_favor".to_string(),
            cliente: cerrada.cliente.clone(),
            nota: Some(format!(
                "Saldo a favor de ${:.2} generado al cerrar {}",
                excedente, cerrada.id
            )),
            abonos_usd: None,
            abonos_bs: None,
        };
        let _ = db.guardar_venta(saldo_venta);
    }

    if let Ok(Some(mut jornada)) = db.jornada_actual() {
        jornada.ventas_total_usd += total_neto_usd;
        jornada.ventas_total_bs += total_neto_bs;
        jornada.tickets_emitidos += 1;
        if es_deuda {
            jornada.deudas_liquidadas_usd += total_neto_usd;
        }
        let _ = db.guardar_jornada(&jornada);
    }

    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_productos_crear(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let sku = body.get("sku").and_then(|v| v.as_str()).unwrap_or("");
    let nombre = body.get("nombre").and_then(|v| v.as_str()).unwrap_or("");
    let precio = body
        .get("precioUsd")
        .and_then(|v| v.as_str())
        .and_then(|s| s.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    let impuesto = body
        .get("impuestoPct")
        .and_then(|v| v.as_str())
        .and_then(|s| s.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    let stock = body
        .get("stockInicial")
        .and_then(|v| v.as_str())
        .and_then(|s| s.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    let caps = body
        .get("capacidades")
        .and_then(|v| v.as_u64())
        .unwrap_or(1) as u16;
    if sku.is_empty() || nombre.is_empty() {
        return Err((
            StatusCode::BAD_REQUEST,
            "SKU y nombre son requeridos".to_string(),
        ));
    }
    if precio <= rust_decimal::Decimal::ZERO {
        return Err((
            StatusCode::BAD_REQUEST,
            "El precio debe ser mayor a cero".to_string(),
        ));
    }
    let p = datiolabs_core::models::Producto {
        sku: datiolabs_core::models::Sku::new(sku)
            .map_err(|e| (StatusCode::BAD_REQUEST, e.to_string()))?,
        nombre: datiolabs_core::models::Nombre::new(nombre)
            .map_err(|e| (StatusCode::BAD_REQUEST, e.to_string()))?,
        precio_usd: precio,
        impuesto_pct: impuesto,
        stock,
        capacidades: caps,
        categoria_id: body
            .get("categoriaId")
            .and_then(|v| v.as_str())
            .map(String::from),
        precio_bruto_usd: body
            .get("precioBrutoUsd")
            .and_then(|v| v.as_str())
            .and_then(|s| s.parse::<rust_decimal::Decimal>().ok()),
        margen_pct: body
            .get("margenPct")
            .and_then(|v| v.as_str())
            .and_then(|s| s.parse::<rust_decimal::Decimal>().ok()),
        sin_stock: body
            .get("sinStock")
            .and_then(|v| v.as_bool())
            .unwrap_or(false),
        unidad: body
            .get("unidad")
            .and_then(|v| v.as_str())
            .map(String::from),
        es_caja: body
            .get("esCaja")
            .and_then(|v| v.as_bool())
            .unwrap_or(false),
        unidades_por_caja: body
            .get("unidadesPorCaja")
            .and_then(|v| v.as_u64())
            .map(|n| n as u32),
        precio_paquete_usd: body
            .get("precioPaqueteUsd")
            .and_then(|v| v.as_str())
            .and_then(|s| s.parse::<rust_decimal::Decimal>().ok()),
        nombre_paquete: body
            .get("nombrePaquete")
            .and_then(|v| v.as_str())
            .map(String::from),
    };
    let db = state.ledger.lock().map_err(|_| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            "DB bloqueada".to_string(),
        )
    })?;
    db.guardar_producto(&p)
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_productos_eliminar(
    State(state): State<AxumAppState>,
    Path(sku): Path<String>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let tree = db.inner_db().open_tree("productos").map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    tree.remove(sku.as_bytes()).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_productos_compra(
    State(state): State<AxumAppState>,
    Path(sku): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let cant = body
        .get("cantidad")
        .and_then(|v| v.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    if cant <= rust_decimal::Decimal::ZERO {
        return Err((StatusCode::BAD_REQUEST, "Solicitud inválida".to_string()));
    }
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mov = datiolabs_core::models::MovimientoStock {
        id: uuid::Uuid::new_v4().to_string(),
        sku: sku.clone(),
        delta: cant,
        motivo: datiolabs_core::models::MotivoMovimiento::Compra,
        venta_id: None,
        fecha_unix: ahora_unix(),
        firma_sha256: String::new(),
    };
    db.aplicar_movimiento(mov, |_, _| {}).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_productos_reducir(
    State(state): State<AxumAppState>,
    Path(sku): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let cant = body
        .get("cantidad")
        .and_then(|v| v.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    if cant <= rust_decimal::Decimal::ZERO {
        return Err((StatusCode::BAD_REQUEST, "Solicitud inválida".to_string()));
    }
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mov = datiolabs_core::models::MovimientoStock {
        id: uuid::Uuid::new_v4().to_string(),
        sku: sku.clone(),
        delta: -cant,
        motivo: datiolabs_core::models::MotivoMovimiento::Ajuste,
        venta_id: None,
        fecha_unix: ahora_unix(),
        firma_sha256: String::new(),
    };
    db.aplicar_movimiento(mov, |_, _| {}).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_productos_merma(
    State(state): State<AxumAppState>,
    Path(sku): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let cant = body
        .get("cantidad")
        .and_then(|v| v.parse::<rust_decimal::Decimal>().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);
    if cant <= rust_decimal::Decimal::ZERO {
        return Err((StatusCode::BAD_REQUEST, "Solicitud inválida".to_string()));
    }
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mov = datiolabs_core::models::MovimientoStock {
        id: uuid::Uuid::new_v4().to_string(),
        sku: sku.clone(),
        delta: -cant,
        motivo: datiolabs_core::models::MotivoMovimiento::Merma,
        venta_id: None,
        fecha_unix: ahora_unix(),
        firma_sha256: String::new(),
    };
    db.aplicar_movimiento(mov, |_, _| {}).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

async fn api_ventas_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<serde_json::Value>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let ventas = db.ventas_recientes(200).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result: Vec<serde_json::Value> = ventas
        .iter()
        .map(|v| {
            serde_json::json!({
                "ventaId": v.id, "totalUsd": v.total_usd.to_string(),
                "totalBs": v.total_bs.to_string(), "fechaHora": v.fecha_cierre_unix,
            })
        })
        .collect();
    Ok(Json(result))
}

async fn api_ventas_registrar(
    State(state): State<AxumAppState>,
    Json(body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let items = body
        .get("items")
        .and_then(|v| v.as_array())
        .cloned()
        .unwrap_or_default();
    if items.is_empty() {
        return Err((StatusCode::BAD_REQUEST, "Solicitud inválida".to_string()));
    }
    let tasa = state.servicio_tasa.info_actual().valor;
    if tasa <= rust_decimal::Decimal::ZERO {
        return Err((
            StatusCode::BAD_REQUEST,
            "Tasa de cambio no disponible o inválida".to_string(),
        ));
    }
    let monto_recibido_bs: rust_decimal::Decimal = body
        .get("montoRecibidoBs")
        .and_then(|v| v.as_str())
        .and_then(|s| s.parse().ok())
        .unwrap_or(rust_decimal::Decimal::ZERO);

    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let catalogo = db.cargar_catalogo().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;

    // Validate stock and build lineas
    let mut lineas = datiolabs_core::models::LineasVenta::nuevas();
    let mut toques: Vec<(usize, rust_decimal::Decimal, String)> = Vec::with_capacity(items.len());
    for item in &items {
        let sku_str = item.get("sku").and_then(|v| v.as_str()).unwrap_or("");
        let cant: rust_decimal::Decimal = item
            .get("cantidad")
            .and_then(|v| v.as_str())
            .and_then(|s| s.parse().ok())
            .unwrap_or(rust_decimal::Decimal::ONE);
        let modo = item
            .get("modo_venta")
            .and_then(|v| v.as_str())
            .unwrap_or("unidad");
        let idx = catalogo.indice_de(sku_str).ok_or((
            StatusCode::BAD_REQUEST,
            format!("SKU inexistente: {sku_str}"),
        ))?;
        let (precio_efectivo, unidades_por_venta) =
            resolver_precio_presentacion(&catalogo, idx, modo);
        let cant_unidades = cant * rust_decimal::Decimal::from(unidades_por_venta);
        validar_linea(
            catalogo.capacidades(idx),
            cant_unidades,
            catalogo.stock(idx),
        )
        .map_err(|e| (StatusCode::BAD_REQUEST, format!("{e}")))?;
        toques.push((idx, cant, modo.to_string()));
        lineas.agregar(
            catalogo.sku_obj(idx),
            catalogo.nombre_obj(idx),
            cant,
            precio_efectivo,
            tasa,
            modo.to_string(),
        );
    }

    let total_usd = lineas.total_usd();
    let total_bs = lineas.total_bs();
    let epsilon = rust_decimal::Decimal::from_str("0.01").unwrap_or(rust_decimal::Decimal::ZERO);
    if monto_recibido_bs > rust_decimal::Decimal::ZERO && (monto_recibido_bs + epsilon) < total_bs {
        return Err((
            StatusCode::BAD_REQUEST,
            "El pago recibido no cubre el total en bolivares".to_string(),
        ));
    }
    let vuelto = if monto_recibido_bs > rust_decimal::Decimal::ZERO {
        monto_recibido_bs - total_bs
    } else {
        rust_decimal::Decimal::ZERO
    };

    // Parse pagos
    let pagos_body = body
        .get("pagos")
        .and_then(|v| v.as_array())
        .cloned()
        .unwrap_or_default();
    let pagos_model: Vec<datiolabs_core::models::PagoVenta> = pagos_body
        .iter()
        .map(|p| datiolabs_core::models::PagoVenta {
            metodo: p
                .get("metodo")
                .and_then(|v| v.as_str())
                .unwrap_or("")
                .to_string(),
            moneda: p
                .get("moneda")
                .and_then(|v| v.as_str())
                .unwrap_or("BS")
                .to_string(),
            monto_usd: p
                .get("montoUsd")
                .and_then(|v| v.as_str())
                .and_then(|s| s.parse().ok())
                .unwrap_or(rust_decimal::Decimal::ZERO),
            monto_bs: p
                .get("montoBs")
                .and_then(|v| v.as_str())
                .and_then(|s| s.parse().ok())
                .unwrap_or(rust_decimal::Decimal::ZERO),
            tasa_cambio: p
                .get("tasaCambio")
                .and_then(|v| v.as_str())
                .and_then(|s| s.parse().ok()),
            referencia: p
                .get("referencia")
                .and_then(|v| v.as_str())
                .map(String::from),
        })
        .collect();

    // Parse resolucion_vuelto
    let res_vuelto = body.get("resolucionVuelto");
    let (estado_v, metodo_v, monto_v_usd, tasa_v) = match res_vuelto {
        Some(res) => (
            res.get("estado").and_then(|v| v.as_str()).map(String::from),
            res.get("metodo").and_then(|v| v.as_str()).map(String::from),
            res.get("montoUsd")
                .and_then(|v| v.as_str())
                .and_then(|s| s.parse().ok()),
            res.get("tasa")
                .and_then(|v| v.as_str())
                .and_then(|s| s.parse().ok()),
        ),
        None => {
            let est = if vuelto > rust_decimal::Decimal::ZERO {
                Some("PAGADO".to_string())
            } else {
                Some("SIN_VUELTO".to_string())
            };
            (est, None, None, None)
        }
    };

    // Deduct stock
    let venta_id = uuid::Uuid::new_v4().to_string();
    for (idx, cantidad, modo) in &toques {
        descontar_con_lotes_interno(&*db, &catalogo, *idx, *cantidad, &venta_id, modo).map_err(
            |e| {
                (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    format!("Error interno: {e}"),
                )
            },
        )?;
    }

    // Capturar operador activo de la jornada para trazabilidad del ticket
    let operador_activo: Option<String> = db.jornada_actual().ok().flatten().map(|j| {
        if !j.operadores_activos.is_empty() {
            j.operadores_activos.join(", ")
        } else {
            j.operador_actual.clone()
        }
    });

    let venta = datiolabs_core::models::Venta {
        id: venta_id,
        etiqueta: String::new(),
        es_cuenta_abierta: false,
        estado: datiolabs_core::models::EstadoVenta::Cerrada,
        lineas,
        tasa_del_dia: tasa,
        total_usd,
        total_bs,
        monto_recibido_bs,
        vuelto_bs: vuelto,
        pagos: pagos_model,
        estado_vuelto: estado_v,
        metodo_vuelto: metodo_v,
        monto_vuelto_usd: monto_v_usd,
        tasa_vuelto: tasa_v,
        fecha_apertura_unix: ahora_unix(),
        fecha_cierre_unix: ahora_unix(),
        firma_sha256: String::new(),
        tipo: "venta".to_string(),
        cliente: operador_activo,
        nota: None,
        abonos_usd: None,
        abonos_bs: None,
    };
    let firmada = db.guardar_venta(venta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;

    // Actualizar contadores de la jornada activa
    if let Ok(Some(mut jornada)) = db.jornada_actual() {
        jornada.ventas_total_usd += total_usd;
        jornada.ventas_total_bs += total_bs;
        jornada.tickets_emitidos += 1;
        match firmada.estado_vuelto.as_deref() {
            Some("PAGADO") => {
                jornada.vuelto_pagado_bs += vuelto;
            }
            Some("RETENIDO") => {
                jornada.vuelto_retenido_bs += vuelto;
            }
            _ => {}
        }
        let _ = db.guardar_jornada(&jornada);
    }

    // Build and return TicketDto
    let ticket = armar_ticket(&firmada, monto_recibido_bs, vuelto);
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::to_value(ticket).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error serializando ticket: {e}"),
        )
    })?))
}

// CRUD categorias
async fn api_categorias_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<datiolabs_core::models::Categoria>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cats = db.listar_categorias().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(cats))
}
async fn api_categorias_crear(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<Vec<datiolabs_core::models::Categoria>>, (StatusCode, String)> {
    let nombre = body.get("nombre").cloned().unwrap_or_default();
    let cat = datiolabs_core::models::Categoria {
        id: format!("cat-{}", uuid::Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
    };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_categoria(&cat).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cats = db.listar_categorias().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(cats))
}
async fn api_categorias_eliminar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
) -> Result<Json<Vec<datiolabs_core::models::Categoria>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.eliminar_categoria(&id).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cats = db.listar_categorias().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(cats))
}

// CRUD tasas impuestos
async fn api_tasas_impuestos_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<datiolabs_core::models::TasaImpuesto>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(db.listar_tasas_impuestos().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?))
}
async fn api_tasas_impuestos_crear(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<Vec<datiolabs_core::models::TasaImpuesto>>, (StatusCode, String)> {
    let nombre = body
        .get("nombre")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();
    let porcentaje = body
        .get("porcentaje")
        .and_then(|v| v.as_f64())
        .unwrap_or(0.0);
    let t = datiolabs_core::models::TasaImpuesto {
        id: format!("ti-{}", uuid::Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
        porcentaje: rust_decimal::Decimal::try_from(porcentaje)
            .unwrap_or(rust_decimal::Decimal::ZERO),
    };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_tasa_impuesto(&t).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_tasas_impuestos().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}
async fn api_tasas_impuestos_eliminar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
) -> Result<Json<Vec<datiolabs_core::models::TasaImpuesto>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.eliminar_tasa_impuesto(&id).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_tasas_impuestos().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}

// CRUD metodos pago
async fn api_metodos_pago_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<datiolabs_core::models::MetodoPagoConfig>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(db.listar_metodos_pago().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?))
}
async fn api_metodos_pago_crear(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<Vec<datiolabs_core::models::MetodoPagoConfig>>, (StatusCode, String)> {
    let nombre = body
        .get("nombre")
        .cloned()
        .unwrap_or_default()
        .to_uppercase();
    let moneda = body
        .get("moneda")
        .cloned()
        .unwrap_or_else(|| "BS".to_string());
    let m = datiolabs_core::models::MetodoPagoConfig { nombre, moneda };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_metodo_pago(&m).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_metodos_pago().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}
async fn api_metodos_pago_eliminar(
    State(state): State<AxumAppState>,
    Path(nombre): Path<String>,
) -> Result<Json<Vec<datiolabs_core::models::MetodoPagoConfig>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.eliminar_metodo_pago(&nombre).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_metodos_pago().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}

// CRUD operadores
async fn api_operadores_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<datiolabs_core::models::Operador>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(db.listar_operadores().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?))
}
async fn api_operadores_crear(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<Vec<datiolabs_core::models::Operador>>, (StatusCode, String)> {
    let nombre = body.get("nombre").cloned().unwrap_or_default();
    let op = datiolabs_core::models::Operador {
        id: format!("op-{}", uuid::Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
        activo: true,
        creado_unix: ahora_unix(),
    };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_operador(&op).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_operadores().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}
async fn api_operadores_editar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<Vec<datiolabs_core::models::Operador>>, (StatusCode, String)> {
    let nombre = body.get("nombre").cloned().unwrap_or_default();
    let mut ops = {
        let db = state.ledger.lock().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
        db.listar_operadores().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
    };
    if let Some(op) = ops.iter_mut().find(|o| o.id == id) {
        op.nombre = nombre;
    }
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    for op in &ops {
        db.guardar_operador(op).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
    }
    let result = db.listar_operadores().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}
async fn api_operadores_eliminar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
) -> Result<Json<Vec<datiolabs_core::models::Operador>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.eliminar_operador(&id).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result = db.listar_operadores().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}
async fn api_operadores_alternar(
    State(state): State<AxumAppState>,
    Path(id): Path<String>,
) -> Result<Json<Vec<datiolabs_core::models::Operador>>, (StatusCode, String)> {
    let mut ops = {
        let db = state.ledger.lock().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
        db.listar_operadores().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
    };
    if let Some(op) = ops.iter_mut().find(|o| o.id == id) {
        op.activo = !op.activo;
    }
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    for op in &ops {
        db.guardar_operador(op).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
    }
    let result = db.listar_operadores().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(result))
}

// Jornadas
async fn api_jornada_actual(
    State(state): State<AxumAppState>,
) -> Result<Json<Option<datiolabs_core::models::Jornada>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(db.jornada_actual().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?))
}
async fn api_jornadas_listar(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<datiolabs_core::models::Jornada>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(db.listar_jornadas(50).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?))
}
async fn api_jornadas_abrir(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let operador = body
        .get("operador")
        .and_then(|v| v.as_str())
        .unwrap_or("")
        .to_string();
    let tasa = state.servicio_tasa.info_actual().valor;
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    if db
        .jornada_actual()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .is_some()
    {
        return Err((
            StatusCode::CONFLICT,
            "Conflicto: ya existe un recurso similar".to_string(),
        ));
    }
    let jornada = datiolabs_core::models::Jornada {
        id: format!("JOR-{}-01", chrono::Utc::now().format("%Y%m%d")),
        estado: "abierta".to_string(),
        inicio_unix: ahora_unix(),
        fin_unix: None,
        operador_inicial: operador.clone(),
        operador_actual: operador,
        operadores_activos: Vec::new(),
        operadores_relevo: Vec::new(),
        tasa_inicio: tasa,
        tasa_fin: None,
        ventas_total_usd: rust_decimal::Decimal::ZERO,
        ventas_total_bs: rust_decimal::Decimal::ZERO,
        tickets_emitidos: 0,
        vuelto_pagado_bs: rust_decimal::Decimal::ZERO,
        vuelto_retenido_bs: rust_decimal::Decimal::ZERO,
        deudas_liquidadas_usd: rust_decimal::Decimal::ZERO,
        entradas_stock_reg: 0,
        mermas_stock_reg: 0,
        cambios_precio_reg: 0,
        checksum_sha256: None,
    };
    db.guardar_jornada(&jornada).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(
        serde_json::to_value(jornada).unwrap_or(serde_json::json!({})),
    ))
}
async fn api_jornadas_cerrar(
    State(state): State<AxumAppState>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let tasa = state.servicio_tasa.info_actual().valor;
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut jornada = db
        .jornada_actual()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;

    let ahora = ahora_unix();
    if let Ok(ventas) = db.consultar_ventas_rango(jornada.inicio_unix, ahora) {
        let mut tot_usd = rust_decimal::Decimal::ZERO;
        let mut tot_bs = rust_decimal::Decimal::ZERO;
        let mut v_pagado = rust_decimal::Decimal::ZERO;
        let mut tickets = 0u32;
        for v in ventas {
            tot_usd += v.total_usd;
            tot_bs += v.total_bs;
            v_pagado += v.vuelto_bs;
            tickets += 1;
        }
        jornada.ventas_total_usd = tot_usd;
        jornada.ventas_total_bs = tot_bs;
        jornada.vuelto_pagado_bs = v_pagado;
        jornada.tickets_emitidos = tickets;
    }

    jornada.estado = "cerrada".to_string();
    jornada.fin_unix = Some(ahora);
    jornada.tasa_fin = Some(tasa);
    let checksum = format!("{:x}", sha2::Sha256::digest(jornada.id.as_bytes()));
    jornada.checksum_sha256 = Some(checksum);
    db.guardar_jornada(&jornada).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(
        serde_json::to_value(jornada).unwrap_or(serde_json::json!({})),
    ))
}
async fn api_jornadas_asignar(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let ops: Vec<String> = body
        .get("operadores")
        .and_then(|v| v.as_array())
        .map(|a| {
            a.iter()
                .filter_map(|v| v.as_str().map(String::from))
                .collect()
        })
        .unwrap_or_default();
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut jornada = db
        .jornada_actual()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    jornada.operadores_activos = ops.clone();
    for op in &ops {
        if !jornada.operadores_relevo.contains(op) {
            jornada.operadores_relevo.push(op.clone());
        }
    }
    db.guardar_jornada(&jornada).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(
        serde_json::to_value(jornada).unwrap_or(serde_json::json!({})),
    ))
}
async fn api_jornadas_relevar(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let operador = body.get("operador").cloned().unwrap_or_default();
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut jornada = db
        .jornada_actual()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    jornada.operador_actual = operador.clone();
    jornada.operadores_activos = vec![operador.clone()];
    if !jornada.operadores_relevo.contains(&operador) {
        jornada.operadores_relevo.push(operador);
    }
    db.guardar_jornada(&jornada).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(
        serde_json::to_value(jornada).unwrap_or(serde_json::json!({})),
    ))
}

// Semaforo
async fn api_semaforo_obtener(
    State(state): State<AxumAppState>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let s = db.cargar_semaforo().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    Ok(Json(
        s.map(|v| serde_json::json!({ "rojoMax": v.rojo_max, "amarilloMax": v.amarillo_max }))
            .unwrap_or(serde_json::json!({ "rojoMax": 5, "amarilloMax": 15 })),
    ))
}
async fn api_semaforo_guardar(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, serde_json::Value>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let rojo = body.get("rojoMax").and_then(|v| v.as_u64()).unwrap_or(5) as u32;
    let amarillo = body
        .get("amarilloMax")
        .and_then(|v| v.as_u64())
        .unwrap_or(15) as u32;
    let s = datiolabs_core::models::SemaforoStock {
        rojo_max: rojo,
        amarillo_max: amarillo,
    };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.guardar_semaforo(&s).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(
        serde_json::json!({ "rojoMax": rojo, "amarilloMax": amarillo }),
    ))
}

// PIN
async fn api_pin_cambiar(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let pin_anterior = body.get("pinAnterior").cloned().unwrap_or_default();
    let pin_nuevo = body.get("pinNuevo").cloned().unwrap_or_default();
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut cfg = db
        .cargar_config()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    if !cfg.pin_dueno_sha256.is_empty() {
        let hash = format!("{:x}", sha2::Sha256::digest(pin_anterior.as_bytes()));
        if cfg.pin_dueno_sha256 != hash {
            return Err((StatusCode::FORBIDDEN, "Acceso denegado".to_string()));
        }
    }
    cfg.pin_dueno_sha256 = if pin_nuevo.trim().is_empty() {
        String::new()
    } else {
        format!("{:x}", sha2::Sha256::digest(pin_nuevo.as_bytes()))
    };
    db.actualizar_config(&cfg).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

// Config
async fn api_config(
    State(state): State<AxumAppState>,
) -> Result<Json<ConfigDto>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let cfg = db
        .cargar_config()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "No hay configuración".to_string()))?;
    Ok(Json(ConfigDto {
        capacidades: capacidades_de_rubros(cfg.rubros),
        tiene_pin: !cfg.pin_dueno_sha256.is_empty(),
        nombre: cfg.nombre.as_str().to_string(),
        rubros: cfg.rubros,
        licencia_estado: cfg.licencia_estado,
        licencia_titular: cfg.licencia_titular,
        privacidad_inventario: cfg.privacidad_inventario,
    }))
}

// Privacidad de inventario
async fn api_config_privacidad(
    State(state): State<AxumAppState>,
    Json(body): Json<HashMap<String, bool>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    let valor = body.get("privacidadInventario").copied().unwrap_or(false);
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let mut cfg = db
        .cargar_config()
        .map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?
        .ok_or((StatusCode::NOT_FOUND, "Recurso no encontrado".to_string()))?;
    cfg.privacidad_inventario = valor;
    db.actualizar_config(&cfg).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

// Respaldos
async fn api_respaldos_listar(
    State(_state): State<AxumAppState>,
) -> Result<Json<Vec<RespaldoInfo>>, (StatusCode, String)> {
    use datiolabs_core::db::BackupMetadata;
    use std::io::{BufReader, Read, Seek, SeekFrom};
    let dir = get_backup_dir().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error directorio: {e}"),
        )
    })?;
    let mut infos = Vec::new();
    for entry in std::fs::read_dir(&dir).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error directorio: {e}"),
        )
    })? {
        let entry = entry.map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error entrada: {e}"),
            )
        })?;
        let path = entry.path();
        if path.extension().and_then(|s| s.to_str()) != Some("backup") {
            continue;
        }
        let archivo_nombre = path
            .file_name()
            .unwrap_or_default()
            .to_string_lossy()
            .to_string();
        let file_size = std::fs::metadata(&path).map(|m| m.len()).unwrap_or(0);
        let tamano_kb = file_size / 1024;
        let file = match std::fs::File::open(&path) {
            Ok(f) => f,
            Err(_) => continue,
        };
        let mut reader = BufReader::new(file);
        let header: datiolabs_core::db::BackupHeader = match bincode::deserialize_from(&mut reader)
        {
            Ok(h) => h,
            Err(_) => continue,
        };
        let mut len_buf = [0u8; 4];
        let mut ok = true;
        for _ in 0..header.arboles_count {
            if reader.read_exact(&mut len_buf).is_err() {
                ok = false;
                break;
            }
            let nombre_len = u32::from_le_bytes(len_buf) as i64;
            if reader.seek(SeekFrom::Current(nombre_len)).is_err() {
                ok = false;
                break;
            }
            if reader.read_exact(&mut len_buf).is_err() {
                ok = false;
                break;
            }
            let cant_registros = u32::from_le_bytes(len_buf);
            for _ in 0..cant_registros {
                if reader.read_exact(&mut len_buf).is_err() {
                    ok = false;
                    break;
                }
                let clave_len = u32::from_le_bytes(len_buf) as i64;
                if reader.seek(SeekFrom::Current(clave_len)).is_err() {
                    ok = false;
                    break;
                }
                if reader.read_exact(&mut len_buf).is_err() {
                    ok = false;
                    break;
                }
                let valor_len = u32::from_le_bytes(len_buf) as i64;
                if reader.seek(SeekFrom::Current(valor_len)).is_err() {
                    ok = false;
                    break;
                }
            }
            if !ok {
                break;
            }
        }
        if !ok {
            continue;
        }
        let metadata_len = file_size - reader.stream_position().unwrap_or(0);
        if metadata_len == 0 || metadata_len > 1024 * 1024 {
            continue;
        }
        let mut metadata_buf = vec![0u8; metadata_len as usize];
        if reader.read_exact(&mut metadata_buf).is_err() {
            continue;
        }
        let meta: BackupMetadata = match bincode::deserialize(&metadata_buf) {
            Ok(m) => m,
            Err(_) => continue,
        };
        let fecha = chrono::DateTime::from_timestamp(meta.timestamp_unix, 0)
            .map(|dt| dt.format("%Y-%m-%d %H:%M").to_string())
            .unwrap_or_default();
        let id = archivo_nombre.replace(".backup", "");
        infos.push(RespaldoInfo {
            id,
            fecha,
            archivo_nombre,
            registros: meta.total_registros,
            tamano_kb,
            checksum_sha256: meta.checksum_sha256,
        });
    }
    infos.sort_by(|a, b| b.fecha.cmp(&a.fecha));
    Ok(Json(infos))
}
async fn api_respaldos_crear(
    state: State<AxumAppState>,
) -> Result<Json<RespaldoInfo>, (StatusCode, String)> {
    let dir = get_backup_dir().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error directorio: {e}"),
        )
    })?;
    std::fs::create_dir_all(&dir).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error directorio: {e}"),
        )
    })?;
    let ruta = std::path::Path::new(&dir).join(format!("datio_{}.backup", ahora_unix()));
    let ruta_str = ruta.to_string_lossy().to_string();
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let meta = db.exportar_backup(&ruta_str).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error al crear respaldo: {e}"),
        )
    })?;
    let archivo_nombre = ruta
        .file_name()
        .unwrap_or_default()
        .to_string_lossy()
        .to_string();
    let id = archivo_nombre.replace(".backup", "");
    let fecha = chrono::DateTime::from_timestamp(meta.timestamp_unix, 0)
        .map(|dt| dt.format("%Y-%m-%d %H:%M").to_string())
        .unwrap_or_default();
    let tamano_kb = std::fs::metadata(&ruta)
        .map(|m| m.len() / 1024)
        .unwrap_or(0);
    Ok(Json(RespaldoInfo {
        id,
        fecha,
        archivo_nombre,
        registros: meta.total_registros,
        tamano_kb,
        checksum_sha256: meta.checksum_sha256,
    }))
}
async fn api_respaldos_restaurar(
    state: State<AxumAppState>,
    Json(body): Json<HashMap<String, String>>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    use base64::Engine;
    if let Some(contenido) = body.get("contenido_base64") {
        let nombre = body
            .get("nombre_archivo")
            .cloned()
            .unwrap_or_else(|| format!("{}.backup", ahora_unix()));
        let bytes = base64::engine::general_purpose::STANDARD
            .decode(contenido)
            .map_err(|e| (StatusCode::BAD_REQUEST, format!("Base64 inválido: {e}")))?;
        let dir = get_backup_dir().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error directorio: {e}"),
            )
        })?;
        std::fs::create_dir_all(&dir).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error directorio: {e}"),
            )
        })?;
        let safe_name = nombre.replace(['/', '\\', '\0'], "_");
        let ruta = std::path::Path::new(&dir).join(&safe_name);
        std::fs::write(&ruta, &bytes).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error escritura: {e}"),
            )
        })?;
        let db = state.ledger.lock().map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error interno: {e}"),
            )
        })?;
        db.importar_backup(&ruta.to_string_lossy()).map_err(|e| {
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                format!("Error al restaurar: {e}"),
            )
        })?;
        drop(db);
        let _ = state.tx.send(());
        return Ok(Json(serde_json::json!({ "ok": true })));
    }
    let archivo = body.get("archivo").cloned().unwrap_or_default();
    let dir = get_backup_dir().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error directorio: {e}"),
        )
    })?;
    let ruta = if archivo.is_empty() {
        std::path::Path::new(&dir)
            .join(format!("datio_{}.backup", ahora_unix()))
            .to_string_lossy()
            .to_string()
    } else {
        std::path::Path::new(&dir)
            .join(&archivo)
            .to_string_lossy()
            .to_string()
    };
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    db.importar_backup(&ruta).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error al restaurar: {e}"),
        )
    })?;
    drop(db);
    let _ = state.tx.send(());
    Ok(Json(serde_json::json!({ "ok": true })))
}

// Historico tasas
async fn api_historico_tasas(
    State(state): State<AxumAppState>,
) -> Result<Json<Vec<serde_json::Value>>, (StatusCode, String)> {
    let db = state.ledger.lock().map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let tasas = db.ultimas_tasas(50).map_err(|e| {
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            format!("Error interno: {e}"),
        )
    })?;
    let result: Vec<serde_json::Value> = tasas.iter().enumerate().map(|(i, t)| {
        let fuente_len = t.fuente_len as usize;
        let fuente_str = std::str::from_utf8(&t.fuente[..fuente_len]).unwrap_or("BCV");
        let tipo = if fuente_str == "MANUAL" { "manual" } else { "automatico" };
        serde_json::json!({ "id": format!("tasa-{}", i), "valor": t.valor_bs_por_usd.to_string(), "tipo": tipo })
    }).collect();
    Ok(Json(result))
}

#[derive(Clone)]
struct AppState {
    ledger: Arc<Mutex<Ledger>>,
    servicio_tasa: Arc<ServicioTasa>,
    session_store: SessionStore,
    tx: broadcast::Sender<()>,
    external_ip: Arc<Mutex<Option<String>>>,
    dedup_ventas: Arc<std::sync::Mutex<HashMap<String, (i64, String)>>>, // key -> (timestamp, venta_id)
}

fn ahora_unix() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_secs() as i64)
        .unwrap_or_default()
}

fn hash_pin(pin: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(pin.as_bytes());
    format!("{:x}", hasher.finalize())
}

fn hex_token(token: &[u8; 32]) -> String {
    let mut out = [0u8; 64];
    const HEX: &[u8; 16] = b"0123456789abcdef";
    for i in 0..32 {
        out[i * 2] = HEX[(token[i] >> 4) as usize];
        out[i * 2 + 1] = HEX[(token[i] & 0x0f) as usize];
    }
    String::from_utf8_lossy(&out).into_owned()
}

// ---------------- UPnP: auto port forwarding ----------------

async fn try_upnp(port: u16) -> Option<String> {
    let options = igd::SearchOptions::default();
    match igd::search_gateway(options) {
        Ok(gateway) => {
            let local_ip = match local_ip_address::local_ip() {
                Ok(ip) => ip,
                Err(_) => return None,
            };
            let local_addr = std::net::SocketAddrV4::new(
                match local_ip {
                    std::net::IpAddr::V4(v4) => v4,
                    _ => return None,
                },
                port,
            );
            match gateway.add_port(
                igd::PortMappingProtocol::TCP,
                port,
                local_addr,
                3600,
                "DatioLabs",
            ) {
                Ok(_) => {
                    let external_ip = gateway.get_external_ip().ok()?;
                    Some(external_ip.to_string())
                }
                Err(e) => {
                    eprintln!("[UPnP] Error adding port mapping: {:?}", e);
                    None
                }
            }
        }
        Err(e) => {
            eprintln!("[UPnP] Gateway not found: {:?}", e);
            None
        }
    }
}

// ---------------- Rate Limiting para PIN ----------------

#[derive(Clone)]
struct RateLimiter {
    attempts: Arc<std::sync::Mutex<HashMap<String, Vec<i64>>>>,
    max_attempts: usize,
    lockout_secs: i64,
}

impl RateLimiter {
    fn new(max_attempts: usize, lockout_secs: i64) -> Self {
        Self {
            attempts: Arc::new(std::sync::Mutex::new(HashMap::new())),
            max_attempts,
            lockout_secs,
        }
    }

    fn check_and_record(&self, key: &str) -> Result<(), String> {
        let mut map = self.attempts.lock().map_err(|e| e.to_string())?;
        let now = ahora_unix();
        let entry = map.entry(key.to_string()).or_insert_with(Vec::new);
        entry.retain(|&t| now - t < self.lockout_secs);

        if entry.len() >= self.max_attempts {
            let remaining = self.lockout_secs - (now - entry[0]);
            return Err(format!(
                "Demasiados intentos. Espera {} segundos.",
                remaining
            ));
        }

        entry.push(now);
        Ok(())
    }

    fn clear(&self, key: &str) {
        if let Ok(mut map) = self.attempts.lock() {
            map.remove(key);
        }
    }
}

fn con_ledger<T, E>(
    estado: &AppState,
    operacion: impl FnOnce(&Ledger) -> Result<T, E>,
) -> Result<T, UIError>
where
    E: Into<UIError>,
{
    let guardia = estado.ledger.lock().map_err(|_| {
        UIError::new(
            "almacenamiento bloqueado",
            "El mutex de la base de datos esta envenenado",
        )
    })?;
    operacion(&guardia).map_err(Into::into)
}

fn notificar_panel(estado: &AppState) {
    let _ = estado.tx.send(());
}

// ---------------- DTOs (contrato camelCase con el frontend) ----------------

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct ConfigDto {
    nombre: String,
    rubros: u16,
    capacidades: u16,
    tiene_pin: bool,
    licencia_estado: String,
    licencia_titular: String,
    privacidad_inventario: bool,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct PresentacionDto {
    nombre: String,
    precio_usd: String,
    unidades: u32,
}

impl From<&datiolabs_core::models::Presentacion> for PresentacionDto {
    fn from(p: &datiolabs_core::models::Presentacion) -> Self {
        Self {
            nombre: p.nombre.clone(),
            precio_usd: p.precio_usd.to_string(),
            unidades: p.unidades,
        }
    }
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ProductoInput {
    sku: String,
    nombre: String,
    precio_usd: String,
    impuesto_pct: String,
    stock_inicial: String,
    pesable: bool,
    #[serde(default)]
    categoria_id: Option<String>,
    #[serde(default)]
    precio_bruto_usd: Option<String>,
    #[serde(default)]
    margen_pct: Option<String>,
    #[serde(default)]
    sin_stock: Option<bool>,
    #[serde(default)]
    unidad: Option<String>,
    #[serde(default)]
    es_caja: Option<bool>,
    #[serde(default)]
    unidades_por_caja: Option<u32>,
    #[serde(default)]
    precio_paquete_usd: Option<String>,
    #[serde(default)]
    nombre_paquete: Option<String>,
    #[serde(default)]
    presentaciones: Option<Vec<PresentacionDto>>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct ProductoDto {
    sku: Sku,
    nombre: Nombre,
    precio_usd: Decimal,
    impuesto_pct: Decimal,
    stock: Decimal,
    capacidades: u16,
    #[serde(skip_serializing_if = "Option::is_none")]
    categoria_id: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    precio_bruto_usd: Option<Decimal>,
    #[serde(skip_serializing_if = "Option::is_none")]
    margen_pct: Option<Decimal>,
    #[serde(skip_serializing_if = "std::ops::Not::not")]
    sin_stock: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    unidad: Option<String>,
    #[serde(skip_serializing_if = "std::ops::Not::not")]
    es_caja: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    unidades_por_caja: Option<u32>,
    #[serde(skip_serializing_if = "Option::is_none")]
    precio_paquete_usd: Option<Decimal>,
    #[serde(skip_serializing_if = "Option::is_none")]
    nombre_paquete: Option<String>,
    #[serde(skip_serializing_if = "Vec::is_empty", default)]
    presentaciones: Vec<PresentacionDto>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct ItemVentaDto {
    sku: String,
    cantidad: String,
    #[serde(default)]
    modo_venta: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct LineaTicketDto {
    sku: Sku,
    nombre: Nombre,
    cantidad: Decimal,
    precio_usd: Decimal,
    tasa_bloqueada: Decimal,
    subtotal_usd: Decimal,
    subtotal_bs: Decimal,
    #[serde(skip_serializing_if = "Option::is_none")]
    modo_venta: Option<String>,
}

#[derive(Deserialize, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
struct PagoTicketDto {
    metodo: String,
    moneda: Option<String>,
    monto_usd: String,
    monto_bs: String,
    tasa_cambio: Option<String>,
    referencia: Option<String>,
}

#[derive(Deserialize, Serialize, Clone)]
#[serde(rename_all = "camelCase")]
struct ResolucionVueltoDto {
    estado: String,
    metodo: Option<String>,
    monto_bs: Option<String>,
    monto_usd: Option<String>,
    tasa: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct TicketDto {
    venta_id: String,
    lineas: Vec<LineaTicketDto>,
    total_usd: Decimal,
    total_bs: Decimal,
    monto_recibido_bs: Decimal,
    vuelto_bs: Decimal,
    tasa_del_dia: Decimal,
    #[serde(skip_serializing_if = "Option::is_none")]
    pagos: Option<Vec<PagoTicketDto>>,
    #[serde(skip_serializing_if = "Option::is_none")]
    estado_vuelto: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    metodo_vuelto: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    monto_vuelto_bs: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    monto_vuelto_usd: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    tasa_vuelto: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    fecha_hora: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    canal: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    operador: Option<String>,
    fecha_unix: i64,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct ConsumoCuentaDto {
    id: String,
    sku: String,
    nombre: String,
    cantidad: Decimal,
    precio_usd: Decimal,
    subtotal_usd: Decimal,
    #[serde(skip_serializing_if = "Option::is_none")]
    modo_venta: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct CuentaDto {
    venta_id: String,
    etiqueta: String,
    lineas: usize,
    total_parcial_usd: Decimal,
    total_parcial_bs: Decimal,
    #[serde(skip_serializing_if = "Option::is_none")]
    abonos_usd: Option<Decimal>,
    #[serde(skip_serializing_if = "Option::is_none")]
    abonos_bs: Option<Decimal>,
    #[serde(skip_serializing_if = "Option::is_none")]
    tipo: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    cliente: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    nota: Option<String>,
    consumos: Vec<ConsumoCuentaDto>,
    fecha_apertura_unix: i64,
}

#[derive(Clone, Copy, Serialize)]
#[serde(rename_all = "camelCase")]
struct CriticoDto {
    sku: Sku,
    nombre: Nombre,
    stock: Decimal,
}

#[derive(Clone, Copy, Serialize)]
#[serde(rename_all = "camelCase")]
struct TopProductoDto {
    nombre: Nombre,
    cantidad: Decimal,
}

const MAX_PANEL_CRITICOS: usize = 16;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct CategoriaDineroBrutoDto {
    categoria_id: String,
    nombre: String,
    cantidad_productos: usize,
    unidades_stock: Decimal,
    dinero_bruto_usd: Decimal,
    dinero_bruto_bs: Decimal,
    dinero_venta_usd: Decimal,
    dinero_venta_bs: Decimal,
    margen_bruto_proyectado_usd: Decimal,
    margen_bruto_pct: String,
    porcentaje_capital: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct PanelDto {
    ventas_24h_usd: Decimal,
    ventas_24h_bs: Decimal,
    tickets_24h: usize,
    total_productos: usize,
    valor_inventario_usd: Decimal,
    costo_total_usd: Decimal,
    ganancia_bruta_usd: Decimal,
    ganancia_neta_usd: Decimal,
    ganancia_neta_sin_imp_usd: Decimal,
    ganancia_neta_bs: Decimal,
    criticos: Vec<CriticoDto>,
    cuentas_abiertas: usize,
    deudas_abiertas: usize,
    dinero_en_la_calle_usd: Decimal,
    dinero_en_la_calle_bs: Decimal,
    top_productos: Vec<TopProductoDto>,
    dinero_por_categoria: Vec<CategoriaDineroBrutoDto>,
}

fn decimal_de(texto: &str) -> Result<Decimal, UIError> {
    Decimal::from_str(texto.trim().replace(',', ".").as_str()).map_err(|_| {
        UIError::new(
            format!("monto invalido: {texto}"),
            "Se esperaba un numero decimal",
        )
    })
}

fn config_requerida(estado: &AppState) -> Result<ConfigNegocio, UIError> {
    con_ledger(estado, |db| db.cargar_config())?.ok_or_else(|| {
        UIError::new(
            "negocio sin inicializar",
            "Ejecute el asistente inicial antes de operar",
        )
    })
}

fn catalogo_fresco(db: &Ledger) -> Result<Catalogo, DbError> {
    db.cargar_catalogo()
}

fn tasa_viva(estado: &AppState) -> Result<Decimal, UIError> {
    let info = estado.servicio_tasa.info_actual();
    if info.valor <= Decimal::ZERO {
        return Err(UIError::new(
            "sin tasa BCV vigente",
            "Actualice la tasa manual o revise la conexion antes de cobrar",
        ));
    }
    Ok(info.valor)
}

fn movimiento(
    sku: &str,
    delta: Decimal,
    motivo: MotivoMovimiento,
    venta_id: Option<String>,
) -> MovimientoStock {
    MovimientoStock {
        id: Uuid::new_v4().to_string(),
        sku: sku.to_string(),
        delta,
        motivo,
        venta_id,
        fecha_unix: ahora_unix(),
        firma_sha256: String::new(),
    }
}

fn descontar_con_lotes_interno(
    db: &Ledger,
    catalogo: &Catalogo,
    idx: usize,
    cantidad: Decimal,
    venta_id: &str,
    modo_venta: &str,
) -> Result<(), DbError> {
    // Resolucion dinamica de unidades a descontar segun la presentacion activa
    let mut unidades = cantidad;
    if let Some((_, upc)) = catalogo.presentacion_por_nombre(idx, modo_venta) {
        if upc > 0 {
            unidades = cantidad * Decimal::from(upc);
        }
    } else if modo_venta == "paquete" && catalogo.es_caja(idx) {
        if let Some(upc) = catalogo.unidades_por_caja(idx) {
            if upc > 0 {
                unidades = cantidad * Decimal::from(upc);
            }
        }
    }
    let es_perecedero = catalogo.capacidades(idx) & capacidades::CAP_PERECEDERO != 0;
    if es_perecedero {
        let sku = catalogo.sku(idx).to_string();
        let mut libro = db.cargar_lotes()?;
        let tocados = libro.descontar_fefo(&sku, unidades, ahora_unix())?;
        for (lote_id, _) in tocados {
            if let Some((_, disp)) = libro.par_disponible_por_id(&lote_id) {
                db.actualizar_disponible_lote(&lote_id, disp)?;
            }
        }
    }
    let mov = movimiento(
        catalogo.sku(idx),
        -unidades,
        MotivoMovimiento::Venta,
        Some(venta_id.to_string()),
    );
    db.aplicar_movimiento(mov, |_, _| {})?;
    Ok(())
}

// ---------------- comandos: configuracion ----------------

#[tauri::command]
fn obtener_config(estado: tauri::State<AppState>) -> Result<Option<ConfigDto>, UIError> {
    let cfg = con_ledger(&estado, |db| db.cargar_config())?;
    Ok(cfg.map(|c| ConfigDto {
        capacidades: capacidades_de_rubros(c.rubros),
        tiene_pin: !c.pin_dueno_sha256.is_empty(),
        nombre: c.nombre.as_str().to_string(),
        rubros: c.rubros,
        licencia_estado: c.licencia_estado,
        licencia_titular: c.licencia_titular,
        privacidad_inventario: c.privacidad_inventario,
    }))
}

#[tauri::command]
fn inicializar_negocio(
    estado: tauri::State<AppState>,
    nombre: String,
    rubros: u8,
    pin_dueno: Option<String>,
    licencia_clave: Option<String>,
    licencia_titular: Option<String>,
    privacidad_inventario: Option<bool>,
) -> Result<(), UIError> {
    let rubros_u16 = rubros as u16;
    if !rubros_activos(rubros_u16) {
        return Err(UIError::new(
            "seleccion de rubros invalida",
            "Active al menos un rubro conocido (abasto, panaderia, licoreria)",
        ));
    }
    let nombre_obj = Nombre::new(&nombre).map_err(|e| UIError::new("nombre invalido", e))?;

    let clave = licencia_clave.unwrap_or_default();
    let titular = licencia_titular.unwrap_or_default();
    let estado_lic = if clave.is_empty() {
        "demo".to_string()
    } else {
        "activa".to_string()
    };

    // Validate PIN length if provided
    if let Some(ref p) = pin_dueno {
        if !p.trim().is_empty() && p.trim().len() < 6 {
            return Err(UIError::new(
                "pin muy corto",
                "El PIN debe tener al menos 6 dígitos",
            ));
        }
    }

    con_ledger(&estado, |db| {
        db.guardar_config(&ConfigNegocio {
            nombre: nombre_obj,
            rubros: rubros_u16,
            pin_dueno_sha256: pin_dueno.map(|p| hash_pin(&p)).unwrap_or_default(),
            licencia_clave: clave,
            licencia_titular: titular,
            licencia_estado: estado_lic,
            privacidad_inventario: privacidad_inventario.unwrap_or(false),
        })?;
        let defaults = [
            ("PUNTOD.VENTA", "BS"),
            ("BIOPAGO", "BS"),
            ("PAGO MOVIL", "BS"),
            ("TRANSF.BS.", "BS"),
            ("BS.EFEC.", "BS"),
            ("DOL.CASH", "USD"),
            ("ZELLE", "USD"),
            ("BINAN.USDT", "USD"),
        ];
        for (nombre, moneda) in defaults {
            let _ = db.guardar_metodo_pago(&MetodoPagoConfig {
                nombre: nombre.to_string(),
                moneda: moneda.to_string(),
            });
        }
        Ok::<(), DbError>(())
    })?;
    Ok(())
}

#[tauri::command]
fn validar_pin_dueno(estado: tauri::State<AppState>, pin: String) -> Result<bool, UIError> {
    let cfg = config_requerida(&estado)?;
    Ok(!cfg.pin_dueno_sha256.is_empty() && cfg.pin_dueno_sha256 == hash_pin(&pin))
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct LicenciaDto {
    estado: String,
    tipo: String,
    clave_licencia: String,
    titular: String,
    validez: String,
}

fn validar_clave_licencia(clave: &str, rubros: u16) -> bool {
    let limpio: String = clave.chars().filter(|c| c.is_alphanumeric()).collect();
    if limpio.len() != 16 {
        return false;
    }
    let digitos: Vec<u16> = limpio
        .bytes()
        .map(|b| (b - b'0') as u16)
        .filter(|&d| d < 10)
        .collect();
    if digitos.len() != 16 {
        return false;
    }
    let _rubro_code = rubros & 0x0F;
    let mut suma: u32 = 0;
    for i in 0..12 {
        suma += digitos[i] as u32 * (i as u32 + 1);
    }
    let checksum = (suma % 10000) as u16;
    let esperado = digitos[12] * 1000 + digitos[13] * 100 + digitos[14] * 10 + digitos[15];
    checksum == esperado
}

#[tauri::command]
fn obtener_licencia(estado: tauri::State<AppState>) -> Result<LicenciaDto, UIError> {
    let cfg = config_requerida(&estado)?;
    let tipo = match cfg.rubros {
        r if r & 1 != 0 => "Enterprise Abasto",
        r if r & 2 != 0 => "Enterprise Panaderia",
        r if r & 4 != 0 => "Enterprise Licoreria",
        r if r & 8 != 0 => "Enterprise Retail",
        _ => "Enterprise Standalone Local",
    };
    Ok(LicenciaDto {
        estado: cfg.licencia_estado,
        tipo: tipo.to_string(),
        clave_licencia: cfg.licencia_clave,
        titular: cfg.licencia_titular,
        validez: "Perpetua (Sin caducidad)".to_string(),
    })
}

#[tauri::command]
fn validar_licencia(estado: tauri::State<AppState>, clave: String) -> Result<bool, UIError> {
    let cfg = config_requerida(&estado)?;
    Ok(validar_clave_licencia(&clave, cfg.rubros))
}

// ---------------- comandos: productos ----------------

#[tauri::command]
fn crear_producto(estado: tauri::State<AppState>, input: ProductoInput) -> Result<(), UIError> {
    let cfg = config_requerida(&estado)?;
    let permitidas = capacidades_de_rubros(cfg.rubros);
    let mut caps = capacidades::CAP_UNITARIA;
    if input.pesable {
        caps |= capacidades::CAP_PESABLE;
        if permitidas & capacidades::CAP_PESABLE == 0 {
            return Err(UIError::from(ErrorNegocio::CapacidadInactiva(caps)));
        }
    }
    let producto = Producto {
        sku: Sku::new(&input.sku.trim().to_uppercase())
            .map_err(|e| UIError::new("SKU invalido", e))?,
        nombre: Nombre::new(input.nombre.trim()).map_err(|e| UIError::new("nombre invalido", e))?,
        precio_usd: decimal_de(&input.precio_usd)?,
        impuesto_pct: decimal_de(&input.impuesto_pct)?,
        stock: decimal_de(&input.stock_inicial)?,
        capacidades: caps,
        categoria_id: input.categoria_id.clone(),
        precio_bruto_usd: input
            .precio_bruto_usd
            .as_deref()
            .and_then(|s| decimal_de(s).ok()),
        margen_pct: input.margen_pct.as_deref().and_then(|s| decimal_de(s).ok()),
        sin_stock: input.sin_stock.unwrap_or(false),
        unidad: input.unidad.clone(),
        es_caja: input.es_caja.unwrap_or(false),
        unidades_por_caja: input.unidades_por_caja,
        precio_paquete_usd: input
            .precio_paquete_usd
            .as_deref()
            .and_then(|s| decimal_de(s).ok()),
        nombre_paquete: input.nombre_paquete.clone(),
        presentaciones: input
            .presentaciones
            .unwrap_or_default()
            .into_iter()
            .filter_map(|p| {
                decimal_de(&p.precio_usd).ok().map(|precio_usd| {
                    datiolabs_core::models::Presentacion {
                        nombre: p.nombre,
                        precio_usd,
                        unidades: p.unidades.max(1),
                    }
                })
            })
            .collect(),
    };
    if producto.sku.as_str().is_empty()
        || producto.nombre.as_str().is_empty()
        || producto.precio_usd <= Decimal::ZERO
        || producto.stock < Decimal::ZERO
    {
        return Err(UIError::new(
            "datos de producto invalidos",
            "SKU y nombre obligatorios; precio mayor a cero; stock no negativo",
        ));
    }
    con_ledger(&estado, |db| db.guardar_producto(&producto))?;
    notificar_panel(&estado);
    Ok(())
}

#[tauri::command]
fn listar_productos(estado: tauri::State<AppState>) -> Result<Vec<ProductoDto>, UIError> {
    config_requerida(&estado)?;
    let db = estado
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let tree = db
        .inner_db()
        .open_tree("productos")
        .map_err(|e| UIError::new("error db", &e.to_string()))?;
    let filas: Vec<ProductoDto> = tree
        .iter()
        .filter_map(|r| r.ok())
        .filter_map(|(_, v)| {
            bincode::deserialize::<Producto>(&v)
                .or_else(|_| serde_json::from_slice::<Producto>(&v))
                .ok()
        })
        .map(|p| ProductoDto {
            sku: p.sku,
            nombre: p.nombre,
            precio_usd: p.precio_usd,
            impuesto_pct: p.impuesto_pct,
            stock: p.stock,
            capacidades: p.capacidades,
            categoria_id: p.categoria_id,
            precio_bruto_usd: p.precio_bruto_usd,
            margen_pct: p.margen_pct,
            sin_stock: p.sin_stock,
            unidad: p.unidad,
            es_caja: p.es_caja,
            unidades_por_caja: p.unidades_por_caja,
            precio_paquete_usd: p.precio_paquete_usd,
            nombre_paquete: p.nombre_paquete,
            presentaciones: p.presentaciones.iter().map(PresentacionDto::from).collect(),
        })
        .collect();
    Ok(filas)
}

#[tauri::command]
fn compra_stock(
    estado: tauri::State<AppState>,
    sku: String,
    cantidad: String,
) -> Result<Decimal, UIError> {
    config_requerida(&estado)?;
    let cant = decimal_de(&cantidad)?;
    if cant <= Decimal::ZERO {
        return Err(UIError::new("cantidad invalida", "Debe ser mayor a cero"));
    }
    let mov = movimiento(
        sku.trim().to_uppercase().as_str(),
        cant,
        MotivoMovimiento::Compra,
        None,
    );
    let nuevo_stock = con_ledger(&estado, |db| -> Result<Decimal, DbError> {
        db.aplicar_movimiento(mov, |_, _| {})?;
        let cat = db.cargar_catalogo()?;
        let idx = cat
            .indice_de(sku.trim().to_uppercase().as_str())
            .ok_or(DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
        Ok(cat.stock(idx))
    })?;
    notificar_panel(&estado);
    Ok(nuevo_stock)
}

#[tauri::command]
fn registrar_merma(
    estado: tauri::State<AppState>,
    sku: String,
    cantidad: String,
    lote_id: Option<String>,
) -> Result<Decimal, UIError> {
    config_requerida(&estado)?;
    let cant = decimal_de(&cantidad)?;
    if cant <= Decimal::ZERO {
        return Err(UIError::new("cantidad invalida", "Debe ser mayor a cero"));
    }
    let sku_norm = sku.trim().to_uppercase();

    if let Some(lid) = lote_id {
        let (_, restante) = con_ledger(&estado, |db| -> Result<(String, Decimal), DbError> {
            let mut libro = db.cargar_lotes()?;
            let restante = libro
                .registrar_merma(&lid, cant)
                .map_err(DbError::Negocio)?;
            Ok((lid.clone(), restante))
        })?;
        con_ledger(&estado, |db| db.actualizar_disponible_lote(&lid, restante))?;
    }

    let mov = movimiento(&sku_norm, -cant, MotivoMovimiento::Merma, None);
    let nuevo_stock = con_ledger(&estado, |db| -> Result<Decimal, DbError> {
        db.aplicar_movimiento(mov, |_, _| {})?;
        let cat = db.cargar_catalogo()?;
        let idx = cat
            .indice_de(&sku_norm)
            .ok_or(DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
        Ok(cat.stock(idx))
    })?;
    notificar_panel(&estado);
    Ok(nuevo_stock)
}

#[tauri::command]
fn crear_lote(
    estado: tauri::State<AppState>,
    sku: String,
    cantidad: String,
    caduce_unix: i64,
) -> Result<String, UIError> {
    let cfg = config_requerida(&estado)?;
    if capacidades_de_rubros(cfg.rubros) & capacidades::CAP_PERECEDERO == 0 {
        return Err(UIError::from(ErrorNegocio::CapacidadInactiva(
            capacidades::CAP_PERECEDERO,
        )));
    }
    let cant = decimal_de(&cantidad)?;
    if cant <= Decimal::ZERO || caduce_unix <= ahora_unix() {
        return Err(UIError::new(
            "lote invalido",
            "Cantidad mayor a cero y caducidad futura requeridas",
        ));
    }
    let sku_norm = sku.trim().to_uppercase();
    let lote = Lote {
        id: Uuid::new_v4().to_string(),
        sku: sku_norm.clone(),
        horneado_unix: ahora_unix(),
        cantidad_inicial: cant,
        disponible: cant,
        caduce_unix,
    };
    con_ledger(&estado, |db| db.guardar_lote(&lote))?;

    let mov = movimiento(&sku_norm, cant, MotivoMovimiento::Compra, None);
    con_ledger(&estado, |db| db.aplicar_movimiento(mov, |_, _| {}))?;
    Ok(lote.id)
}

/// Resuelve el precio efectivo de venta y las unidades base a descontar del stock
/// para el modo/presentacion solicitado. Compatible con presentaciones multiples y
/// con el campo legacy es_caja/nombre_paquete.
fn resolver_precio_presentacion(catalogo: &Catalogo, idx: usize, modo: &str) -> (Decimal, u32) {
    if modo == "unidad" || modo.is_empty() {
        return (catalogo.precio_usd(idx), 1);
    }
    // Buscar en presentaciones multiples
    if let Some((precio, upc)) = catalogo.presentacion_por_nombre(idx, modo) {
        return (precio, upc.max(1));
    }
    // Compatibilidad legacy: modo "paquete" con es_caja
    if modo == "paquete" && catalogo.es_caja(idx) {
        let upc = catalogo.unidades_por_caja(idx).unwrap_or(1).max(1);
        let precio = catalogo
            .precio_paquete_usd(idx)
            .unwrap_or_else(|| catalogo.precio_usd(idx) * Decimal::from(upc));
        return (precio, upc);
    }
    // Fallback: unidad base
    (catalogo.precio_usd(idx), 1)
}

// ---------------- comandos: venta directa ----------------

#[tauri::command]
fn registrar_venta(
    estado: tauri::State<AppState>,
    items: Vec<ItemVentaDto>,
    monto_recibido_bs: String,
    pagos: Option<Vec<PagoTicketDto>>,
    resolucion_vuelto: Option<ResolucionVueltoDto>,
    idempotency_key: Option<String>,
) -> Result<TicketDto, UIError> {
    if items.is_empty() {
        return Err(UIError::new("venta vacia", "Agregue productos al carrito"));
    }
    let _cfg = config_requerida(&estado)?;
    let tasa = tasa_viva(&estado)?;
    let recibido = decimal_de(&monto_recibido_bs)?;

    // Idempotency check: if this key was used recently, return the existing ticket
    if let Some(ref key) = idempotency_key {
        let now = ahora_unix();
        if let Ok(mut dedup) = estado.dedup_ventas.lock() {
            // Clean up entries older than 5 minutes
            dedup.retain(|_, (ts, _)| now - *ts < 300);
            if let Some((_, venta_id)) = dedup.get(key) {
                // Return existing ticket
                let venta_id_clone = venta_id.clone();
                return con_ledger(&estado, |db| -> Result<TicketDto, DbError> {
                    let venta = db
                        .cargar_venta(&venta_id_clone)?
                        .ok_or_else(|| DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
                    Ok(armar_ticket(&venta, recibido, Decimal::ZERO))
                });
            }
        }
    }

    let resultado = con_ledger(&estado, |db| {
        let catalogo = catalogo_fresco(db)?;
        let mut lineas = LineasVenta::nuevas();
        let mut toques: Vec<(usize, Decimal, String)> = Vec::with_capacity(items.len());
        for item in &items {
            let idx = catalogo
                .indice_de(item.sku.trim().to_uppercase().as_str())
                .ok_or(DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
            let cantidad = decimal_de(&item.cantidad)?;
            let modo = item.modo_venta.as_deref().unwrap_or("unidad");
            let (precio_efectivo, unidades_por_venta) =
                resolver_precio_presentacion(&catalogo, idx, modo);
            let cant_unidades = cantidad * Decimal::from(unidades_por_venta);
            validar_linea(
                catalogo.capacidades(idx),
                cant_unidades,
                catalogo.stock(idx),
            )?;
            toques.push((idx, cantidad, modo.to_string()));
            lineas.agregar(
                catalogo.sku_obj(idx),
                catalogo.nombre_obj(idx),
                cantidad,
                precio_efectivo,
                tasa,
                modo.to_string(),
            );
        }

        let total_usd = lineas.total_usd();
        let total_bs = lineas.total_bs();
        // Use epsilon tolerance for comparison to handle floating point precision issues
        let epsilon = Decimal::from_str("0.01").unwrap_or(Decimal::ZERO);
        if recibido > Decimal::ZERO && (total_bs - recibido) > epsilon {
            return Err(UIError::new(
                "monto insuficiente",
                "El pago recibido no cubre el total en bolivares",
            ));
        }
        let vuelto = if recibido > Decimal::ZERO {
            recibido - total_bs
        } else {
            Decimal::ZERO
        };

        let pagos_model: Vec<PagoVenta> = pagos
            .unwrap_or_default()
            .into_iter()
            .map(|p| PagoVenta {
                metodo: p.metodo,
                moneda: p.moneda.unwrap_or_else(|| "BS".to_string()),
                monto_usd: decimal_de(&p.monto_usd).unwrap_or(Decimal::ZERO),
                monto_bs: decimal_de(&p.monto_bs).unwrap_or(Decimal::ZERO),
                tasa_cambio: p.tasa_cambio.and_then(|t| decimal_de(&t).ok()),
                referencia: p.referencia,
            })
            .collect();

        let (estado_v, metodo_v, monto_v_usd, tasa_v) = match resolucion_vuelto {
            Some(res) => (
                Some(res.estado),
                res.metodo,
                res.monto_usd.and_then(|m| decimal_de(&m).ok()),
                res.tasa.and_then(|t| decimal_de(&t).ok()),
            ),
            None => {
                let est = if vuelto > Decimal::ZERO {
                    Some("PAGADO".to_string())
                } else {
                    Some("SIN_VUELTO".to_string())
                };
                (est, None, None, None)
            }
        };

        let venta_id = Uuid::new_v4().to_string();
        for (idx, cantidad, modo) in &toques {
            descontar_con_lotes_interno(db, &catalogo, *idx, *cantidad, &venta_id, modo)?;
        }

        // Capturar operador activo de la jornada para trazabilidad del ticket
        let operador_activo: Option<String> = db.jornada_actual().ok().flatten().map(|j| {
            if !j.operadores_activos.is_empty() {
                j.operadores_activos.join(", ")
            } else {
                j.operador_actual.clone()
            }
        });

        let venta = Venta {
            id: venta_id,
            etiqueta: String::new(),
            es_cuenta_abierta: false,
            estado: EstadoVenta::Cerrada,
            lineas,
            tasa_del_dia: tasa,
            total_usd,
            total_bs,
            monto_recibido_bs: recibido,
            vuelto_bs: vuelto,
            pagos: pagos_model,
            estado_vuelto: estado_v,
            metodo_vuelto: metodo_v,
            monto_vuelto_usd: monto_v_usd,
            tasa_vuelto: tasa_v,
            fecha_apertura_unix: ahora_unix(),
            fecha_cierre_unix: ahora_unix(),
            firma_sha256: String::new(),
            tipo: "venta".to_string(),
            cliente: operador_activo,
            nota: None,
            abonos_usd: None,
            abonos_bs: None,
        };
        let firmada = db.guardar_venta(venta)?;

        // Actualizar contadores de la jornada activa
        if let Ok(Some(mut jornada)) = db.jornada_actual() {
            jornada.ventas_total_usd += total_usd;
            jornada.ventas_total_bs += total_bs;
            jornada.tickets_emitidos += 1;
            match firmada.estado_vuelto.as_deref() {
                Some("PAGADO") => {
                    jornada.vuelto_pagado_bs += vuelto;
                }
                Some("RETENIDO") => {
                    jornada.vuelto_retenido_bs += vuelto;
                }
                _ => {}
            }
            let _ = db.guardar_jornada(&jornada);
        }

        Ok(armar_ticket(&firmada, recibido, vuelto))
    });

    // Store idempotency key after successful sale
    if let (Some(key), Ok(ticket)) = (&idempotency_key, &resultado) {
        if let Ok(mut dedup) = estado.dedup_ventas.lock() {
            dedup.insert(key.clone(), (ahora_unix(), ticket.venta_id.clone()));
        }
    }

    notificar_panel(&estado);
    resultado
}

fn armar_ticket(venta: &Venta, recibido: Decimal, vuelto: Decimal) -> TicketDto {
    let pagos_dto: Option<Vec<PagoTicketDto>> = if venta.pagos.is_empty() {
        None
    } else {
        Some(
            venta
                .pagos
                .iter()
                .map(|p| PagoTicketDto {
                    metodo: p.metodo.clone(),
                    moneda: Some(p.moneda.clone()),
                    monto_usd: p.monto_usd.to_string(),
                    monto_bs: p.monto_bs.to_string(),
                    tasa_cambio: p.tasa_cambio.map(|t| t.to_string()),
                    referencia: p.referencia.clone(),
                })
                .collect(),
        )
    };

    TicketDto {
        venta_id: venta.id.clone(),
        total_usd: venta.total_usd,
        total_bs: venta.total_bs,
        monto_recibido_bs: recibido,
        vuelto_bs: vuelto,
        tasa_del_dia: venta.tasa_del_dia,
        pagos: pagos_dto,
        estado_vuelto: venta.estado_vuelto.clone(),
        metodo_vuelto: venta.metodo_vuelto.clone(),
        monto_vuelto_bs: if vuelto > Decimal::ZERO {
            Some(vuelto.to_string())
        } else {
            None
        },
        monto_vuelto_usd: venta.monto_vuelto_usd.map(|m| m.to_string()),
        tasa_vuelto: venta.tasa_vuelto.map(|t| t.to_string()),
        fecha_hora: chrono::DateTime::from_timestamp(venta.fecha_cierre_unix, 0).map(|dt| {
            let tz_vet = chrono::FixedOffset::east_opt(-4 * 3600).unwrap();
            dt.with_timezone(&tz_vet)
                .format("%d/%m/%Y %H:%M")
                .to_string()
        }),
        canal: Some(if venta.es_cuenta_abierta {
            "CONSUMO EN CUENTA".to_string()
        } else if venta.tipo == "deuda" {
            "LIQUIDACION DE DEUDA".to_string()
        } else {
            "VENTA DIRECTA".to_string()
        }),
        operador: venta.cliente.clone(),
        fecha_unix: venta.fecha_cierre_unix,
        lineas: (0..venta.lineas.skus.len())
            .map(|i| {
                let sub_usd = venta.lineas.cantidades[i] * venta.lineas.precios_usd[i];
                LineaTicketDto {
                    sku: venta.lineas.skus[i].clone(),
                    nombre: venta.lineas.nombres[i].clone(),
                    cantidad: venta.lineas.cantidades[i],
                    precio_usd: venta.lineas.precios_usd[i],
                    tasa_bloqueada: venta.lineas.tasas_bloqueadas[i],
                    subtotal_usd: sub_usd,
                    subtotal_bs: sub_usd * venta.lineas.tasas_bloqueadas[i],
                    modo_venta: venta.lineas.modos_venta.get(i).cloned(),
                }
            })
            .collect(),
    }
}

// ---------------- comandos: cuenta abierta (licoreria) ----------------

#[tauri::command]
fn abrir_cuenta(
    estado: tauri::State<AppState>,
    etiqueta: String,
    tipo: Option<String>,
    cliente: Option<String>,
    nota: Option<String>,
) -> Result<CuentaDto, UIError> {
    let cfg = config_requerida(&estado)?;
    let permitidas = capacidades_de_rubros(cfg.rubros);
    if !licoreria::admite_cuenta_abierta(permitidas) {
        return Err(UIError::from(ErrorNegocio::CapacidadInactiva(
            capacidades::CAP_CUENTA_ABIERTA,
        )));
    }
    if etiqueta.trim().is_empty() {
        return Err(UIError::new(
            "etiqueta requerida",
            "Identifique mesa o cliente",
        ));
    }
    let venta = Venta {
        id: Uuid::new_v4().to_string(),
        etiqueta: etiqueta.trim().to_string(),
        es_cuenta_abierta: true,
        estado: EstadoVenta::Abierta,
        lineas: LineasVenta::nuevas(),
        tasa_del_dia: Decimal::ZERO,
        total_usd: Decimal::ZERO,
        total_bs: Decimal::ZERO,
        monto_recibido_bs: Decimal::ZERO,
        vuelto_bs: Decimal::ZERO,
        pagos: Vec::new(),
        estado_vuelto: None,
        metodo_vuelto: None,
        monto_vuelto_usd: None,
        tasa_vuelto: None,
        fecha_apertura_unix: ahora_unix(),
        fecha_cierre_unix: 0,
        firma_sha256: String::new(),
        tipo: tipo.unwrap_or_else(|| "activa".to_string()),
        cliente,
        nota,
        abonos_usd: Some(Decimal::ZERO),
        abonos_bs: Some(Decimal::ZERO),
    };
    let guardada = con_ledger(&estado, |db| db.guardar_venta(venta))?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&guardada))
}

fn cuenta_dto(v: &Venta) -> CuentaDto {
    let consumos: Vec<ConsumoCuentaDto> = (0..v.lineas.skus.len())
        .map(|i| ConsumoCuentaDto {
            id: format!("consumo-{}", i),
            sku: v.lineas.skus[i].as_str().to_string(),
            nombre: v.lineas.nombres[i].as_str().to_string(),
            cantidad: v.lineas.cantidades[i],
            precio_usd: v.lineas.precios_usd[i],
            subtotal_usd: v.lineas.cantidades[i] * v.lineas.precios_usd[i],
            modo_venta: v.lineas.modos_venta.get(i).cloned(),
        })
        .collect();
    CuentaDto {
        venta_id: v.id.clone(),
        etiqueta: v.etiqueta.clone(),
        lineas: v.lineas.skus.len(),
        total_parcial_usd: v.lineas.total_usd(),
        total_parcial_bs: v.lineas.total_bs(),
        abonos_usd: v.abonos_usd,
        abonos_bs: v.abonos_bs,
        tipo: Some(v.tipo.clone()),
        cliente: v.cliente.clone(),
        nota: v.nota.clone(),
        consumos,
        fecha_apertura_unix: v.fecha_apertura_unix,
    }
}

#[tauri::command]
fn listar_cuentas(estado: tauri::State<AppState>) -> Result<Vec<CuentaDto>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.cuentas_abiertas())?
        .iter()
        .map(cuenta_dto)
        .collect())
}

#[tauri::command]
fn agregar_consumo(
    estado: tauri::State<AppState>,
    venta_id: String,
    sku: String,
    cantidad: String,
    modo_venta: Option<String>,
) -> Result<CuentaDto, UIError> {
    let _cfg = config_requerida(&estado)?;
    let tasa = tasa_viva(&estado)?;
    let cant = decimal_de(&cantidad)?;
    let modo = modo_venta.unwrap_or_else(|| "unidad".to_string());

    let actualizada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(
                venta_id.clone(),
            )))?;

        let catalogo = catalogo_fresco(db)?;
        let idx = catalogo
            .indice_de(sku.trim().to_uppercase().as_str())
            .ok_or(DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
        let (precio_efectivo, unidades_por_venta) =
            resolver_precio_presentacion(&catalogo, idx, &modo);
        let cant_unidades = cant * Decimal::from(unidades_por_venta);
        validar_linea(
            catalogo.capacidades(idx),
            cant_unidades,
            catalogo.stock(idx),
        )?;

        let sku_obj = catalogo.sku_obj(idx);
        if let Some(pos) = venta.lineas.skus.iter().position(|s| s == &sku_obj) {
            venta.lineas.cantidades[pos] += cant;
        } else {
            venta.lineas.agregar(
                sku_obj,
                catalogo.nombre_obj(idx),
                cant,
                precio_efectivo,
                tasa,
                modo.clone(),
            );
        }
        descontar_con_lotes_interno(db, &catalogo, idx, cant, &venta.id, &modo)?;
        db.guardar_venta(venta)
    })?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&actualizada))
}

#[tauri::command]
fn cerrar_cuenta(
    estado: tauri::State<AppState>,
    venta_id: String,
    monto_recibido_bs: String,
    pagos: Option<Vec<PagoTicketDto>>,
    resolucion_vuelto: Option<ResolucionVueltoDto>,
) -> Result<TicketDto, UIError> {
    let _cfg = config_requerida(&estado)?;
    let recibido = decimal_de(&monto_recibido_bs)?;
    let tasa = estado.servicio_tasa.info_actual().valor;

    let cerrada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(venta_id)))?;

        let cierre = licoreria::liquidar_cierre(&venta.lineas);
        let abonos_usd = venta.abonos_usd.unwrap_or(Decimal::ZERO);

        let total_neto_usd = if abonos_usd > cierre.total_usd {
            Decimal::ZERO
        } else {
            cierre.total_usd - abonos_usd
        };
        let total_neto_bs = total_neto_usd * tasa;

        // Use epsilon tolerance for comparison to handle floating point precision issues
        let epsilon = Decimal::from_str("0.01").unwrap_or(Decimal::ZERO);
        if recibido > Decimal::ZERO && (total_neto_bs - recibido) > epsilon {
            return Err(DbError::Negocio(ErrorNegocio::PagoInsuficiente {
                requerido: total_neto_bs,
                recibido,
            }));
        }

        let vuelto = if recibido > Decimal::ZERO {
            recibido - total_neto_bs
        } else {
            Decimal::ZERO
        };

        let pagos_model: Vec<PagoVenta> = pagos
            .unwrap_or_default()
            .into_iter()
            .map(|p| PagoVenta {
                metodo: p.metodo,
                moneda: p.moneda.unwrap_or_else(|| "BS".to_string()),
                monto_usd: decimal_de(&p.monto_usd).unwrap_or(Decimal::ZERO),
                monto_bs: decimal_de(&p.monto_bs).unwrap_or(Decimal::ZERO),
                tasa_cambio: p.tasa_cambio.and_then(|t| decimal_de(&t).ok()),
                referencia: p.referencia,
            })
            .collect();

        let (estado_v, metodo_v, monto_v_usd, tasa_v) = match resolucion_vuelto {
            Some(res) => (
                Some(res.estado),
                res.metodo,
                res.monto_usd.and_then(|m| decimal_de(&m).ok()),
                res.tasa.and_then(|t| decimal_de(&t).ok()),
            ),
            None => {
                let est = if vuelto > Decimal::ZERO {
                    Some("PAGADO".to_string())
                } else {
                    Some("SIN_VUELTO".to_string())
                };
                (est, None, None, None)
            }
        };

        venta.estado = EstadoVenta::Cerrada;
        venta.total_usd = total_neto_usd;
        venta.total_bs = total_neto_bs;
        venta.monto_recibido_bs = recibido;
        venta.vuelto_bs = vuelto;
        venta.pagos = pagos_model;
        venta.estado_vuelto = estado_v;
        venta.metodo_vuelto = metodo_v;
        venta.monto_vuelto_usd = monto_v_usd;
        venta.tasa_vuelto = tasa_v;
        venta.fecha_cierre_unix = ahora_unix();
        // Si la cuenta no tenia cliente (operador) asignado, capturar el activo en la jornada
        if venta.cliente.is_none() {
            venta.cliente = db.jornada_actual().ok().flatten().map(|j| {
                if !j.operadores_activos.is_empty() {
                    j.operadores_activos.join(", ")
                } else {
                    j.operador_actual.clone()
                }
            });
        }
        let cerrada = db.guardar_venta(venta)?;

        if abonos_usd > cierre.total_usd {
            let excedente = abonos_usd - cierre.total_usd;
            let saldo_venta = Venta {
                id: Uuid::new_v4().to_string(),
                etiqueta: format!("Saldo a favor de {}", cerrada.etiqueta),
                es_cuenta_abierta: false,
                estado: EstadoVenta::Cerrada,
                lineas: LineasVenta::nuevas(),
                tasa_del_dia: tasa,
                total_usd: Decimal::ZERO,
                total_bs: Decimal::ZERO,
                monto_recibido_bs: Decimal::ZERO,
                vuelto_bs: Decimal::ZERO,
                pagos: vec![PagoVenta {
                    metodo: "SALDO.A_FAVOR".to_string(),
                    moneda: "USD".to_string(),
                    monto_usd: excedente,
                    monto_bs: excedente * tasa,
                    tasa_cambio: Some(tasa),
                    referencia: Some(cerrada.id.clone()),
                }],
                estado_vuelto: Some("SALDO_A_FAVOR".to_string()),
                metodo_vuelto: None,
                monto_vuelto_usd: Some(excedente),
                tasa_vuelto: Some(tasa),
                fecha_apertura_unix: ahora_unix(),
                fecha_cierre_unix: ahora_unix(),
                firma_sha256: String::new(),
                tipo: "saldo_a_favor".to_string(),
                cliente: cerrada.cliente.clone(),
                nota: Some(format!(
                    "Saldo a favor de ${:.2} generado al cerrar {}",
                    excedente, cerrada.id
                )),
                abonos_usd: None,
                abonos_bs: None,
            };
            let _ = db.guardar_venta(saldo_venta);
        }

        // Actualizar contadores de la jornada activa
        if let Ok(Some(mut jornada)) = db.jornada_actual() {
            jornada.ventas_total_usd += total_neto_usd;
            jornada.ventas_total_bs += total_neto_bs;
            jornada.tickets_emitidos += 1;
            if cerrada.tipo == "deuda" {
                jornada.deudas_liquidadas_usd += total_neto_usd;
            }
            match cerrada.estado_vuelto.as_deref() {
                Some("PAGADO") => {
                    jornada.vuelto_pagado_bs += vuelto;
                }
                Some("RETENIDO") => {
                    jornada.vuelto_retenido_bs += vuelto;
                }
                _ => {}
            }
            let _ = db.guardar_jornada(&jornada);
        }

        Ok(cerrada)
    })?;
    notificar_panel(&estado);

    Ok(armar_ticket(
        &cerrada,
        cerrada.monto_recibido_bs,
        cerrada.vuelto_bs,
    ))
}

// ---------------- comandos: panel del dueno ----------------

#[tauri::command]
fn datos_panel(estado: tauri::State<AppState>) -> Result<PanelDto, UIError> {
    config_requerida(&estado)?;
    let tasa = tasa_viva(&estado)?;
    con_ledger(&estado, |db| -> Result<PanelDto, DbError> {
        let catalogo = db.cargar_catalogo()?;
        let limite = ahora_unix() - 86_400;
        let ventas = db.ventas_recientes(2_000)?;

        let mut usd = Decimal::ZERO;
        let mut bs = Decimal::ZERO;
        let mut tickets = 0usize;

        const MAX_VENDIDOS: usize = 32;
        const MAX_TOP: usize = 5;
        let mut vendidos_nombre: [Nombre; MAX_VENDIDOS] = [Nombre::empty(); MAX_VENDIDOS];
        let mut vendidos_cant: [Decimal; MAX_VENDIDOS] = [Decimal::ZERO; MAX_VENDIDOS];
        let mut vendidos_len: usize = 0;

        for v in &ventas {
            if v.estado != EstadoVenta::Cerrada || v.fecha_cierre_unix < limite {
                continue;
            }
            tickets += 1;
            usd += v.total_usd;
            bs += v.total_bs;
            for i in 0..v.lineas.nombres.len() {
                let nombre = &v.lineas.nombres[i];
                let cant = v.lineas.cantidades[i];
                let mut found = false;
                for j in 0..vendidos_len {
                    if vendidos_nombre[j].as_str() == nombre.as_str() {
                        vendidos_cant[j] += cant;
                        found = true;
                        break;
                    }
                }
                if !found && vendidos_len < MAX_VENDIDOS {
                    vendidos_nombre[vendidos_len] = nombre.clone();
                    vendidos_cant[vendidos_len] = cant;
                    vendidos_len += 1;
                }
            }
        }

        let mut top_len: usize = 0;
        let mut top_nombre: [Nombre; MAX_TOP] = [Nombre::empty(); MAX_TOP];
        let mut top_cant: [Decimal; MAX_TOP] = [Decimal::ZERO; MAX_TOP];
        for k in 0..vendidos_len {
            if top_len < MAX_TOP {
                top_nombre[top_len] = vendidos_nombre[k].clone();
                top_cant[top_len] = vendidos_cant[k];
                top_len += 1;
                let mut m = top_len - 1;
                while m > 0 && top_cant[m] > top_cant[m - 1] {
                    top_nombre.swap(m, m - 1);
                    top_cant.swap(m, m - 1);
                    m -= 1;
                }
            } else if vendidos_cant[k] > top_cant[MAX_TOP - 1] {
                top_nombre[MAX_TOP - 1] = vendidos_nombre[k].clone();
                top_cant[MAX_TOP - 1] = vendidos_cant[k];
                let mut m = MAX_TOP - 1;
                while m > 0 && top_cant[m] > top_cant[m - 1] {
                    top_nombre.swap(m, m - 1);
                    top_cant.swap(m, m - 1);
                    m -= 1;
                }
            }
        }

        let mut top: Vec<TopProductoDto> = Vec::with_capacity(top_len);
        for i in 0..top_len {
            top.push(TopProductoDto {
                nombre: top_nombre[i].clone(),
                cantidad: top_cant[i],
            });
        }

        let mut criticos: Vec<CriticoDto> = Vec::new();
        for i in 0..catalogo.len() {
            if catalogo.stock(i) <= dec!(5) && criticos.len() < 16 {
                criticos.push(CriticoDto {
                    sku: catalogo.sku_obj(i),
                    nombre: catalogo.nombre_obj(i),
                    stock: catalogo.stock(i),
                });
            }
        }

        let cuentas_todas = db.cuentas_abiertas()?;
        let abiertas = cuentas_todas.len();

        // Financial metrics - calculate from actual product costs
        let mut total_venta_usd = Decimal::ZERO;
        let mut total_costo_usd = Decimal::ZERO;
        for i in 0..catalogo.len() {
            let precio_venta = catalogo.precio_usd(i);
            let precio_bruto = catalogo.precio_bruto_usd(i).unwrap_or(Decimal::ZERO);
            if precio_venta > Decimal::ZERO {
                total_venta_usd += precio_venta;
                total_costo_usd += if precio_bruto > Decimal::ZERO {
                    precio_bruto
                } else {
                    precio_venta * dec!(0.65)
                };
            }
        }
        let costo_total_usd = if total_venta_usd > Decimal::ZERO {
            usd * total_costo_usd / total_venta_usd
        } else {
            usd * dec!(0.65)
        };
        let ganancia_bruta_usd = usd - costo_total_usd;
        let impuestos_usd = usd * dec!(0.12);
        let ganancia_neta_usd = ganancia_bruta_usd - impuestos_usd;
        let ganancia_neta_sin_imp_usd = ganancia_bruta_usd;
        let ganancia_neta_bs = ganancia_neta_usd * tasa;

        // Deudas y dinero en la calle
        let deudas_abiertas = cuentas_todas.iter().filter(|v| v.tipo == "deuda").count();
        let dinero_en_la_calle_usd: Decimal = cuentas_todas
            .iter()
            .filter(|v| v.tipo == "deuda")
            .map(|v| {
                let total = v.lineas.total_usd();
                let abonos = v.abonos_usd.unwrap_or(Decimal::ZERO);
                if total > abonos {
                    total - abonos
                } else {
                    Decimal::ZERO
                }
            })
            .sum();
        let dinero_en_la_calle_bs = dinero_en_la_calle_usd * tasa;

        // Dinero por categoria
        let categorias = db.listar_categorias()?;
        let mut mapa_cats: std::collections::HashMap<String, (usize, Decimal, Decimal, Decimal)> =
            std::collections::HashMap::new();
        let mut total_bruto_global: Decimal = Decimal::ZERO;
        for i in 0..catalogo.len() {
            let cat_id = catalogo
                .categoria_id(i)
                .unwrap_or_else(|| "cat-general".to_string());
            let entry = mapa_cats.entry(cat_id.clone()).or_insert((
                0,
                Decimal::ZERO,
                Decimal::ZERO,
                Decimal::ZERO,
            ));
            entry.0 += 1;
            let st = if catalogo.sin_stock(i) {
                Decimal::ZERO
            } else {
                catalogo.stock(i)
            };
            let bruto_unit = catalogo
                .precio_bruto_usd(i)
                .unwrap_or(catalogo.precio_usd(i) * dec!(0.65));
            let venta_unit = catalogo.precio_usd(i);
            entry.1 += st;
            entry.2 += st * bruto_unit;
            entry.3 += st * venta_unit;
            total_bruto_global += st * bruto_unit;
        }
        let cat_nombre_map: std::collections::HashMap<String, String> = categorias
            .iter()
            .map(|c| (c.id.clone(), c.nombre.clone()))
            .collect();
        let mut dinero_por_categoria: Vec<CategoriaDineroBrutoDto> = mapa_cats
            .into_iter()
            .filter(|(_, (n, _, b, _))| *n > 0 || *b > Decimal::ZERO)
            .map(|(cat_id, (cant_prod, unidades, bruto, venta))| {
                let nombre = cat_nombre_map
                    .get(&cat_id)
                    .cloned()
                    .unwrap_or_else(|| "General".to_string());
                let margen = if venta > bruto {
                    venta - bruto
                } else {
                    Decimal::ZERO
                };
                let margen_pct = if venta > Decimal::ZERO {
                    format!("{:.1}", margen / venta * dec!(100))
                } else {
                    "0.0".to_string()
                };
                let pct_cap = if total_bruto_global > Decimal::ZERO {
                    format!("{:.1}", bruto / total_bruto_global * dec!(100))
                } else {
                    "0.0".to_string()
                };
                CategoriaDineroBrutoDto {
                    categoria_id: cat_id,
                    nombre,
                    cantidad_productos: cant_prod,
                    unidades_stock: unidades,
                    dinero_bruto_usd: bruto,
                    dinero_bruto_bs: bruto * tasa,
                    dinero_venta_usd: venta,
                    dinero_venta_bs: venta * tasa,
                    margen_bruto_proyectado_usd: margen,
                    margen_bruto_pct: margen_pct,
                    porcentaje_capital: pct_cap,
                }
            })
            .collect();
        dinero_por_categoria.sort_by(|a, b| b.dinero_bruto_usd.cmp(&a.dinero_bruto_usd));

        Ok(PanelDto {
            ventas_24h_usd: usd,
            ventas_24h_bs: bs,
            tickets_24h: tickets,
            valor_inventario_usd: catalogo.valor_inventario_usd(),
            total_productos: catalogo.len(),
            costo_total_usd,
            ganancia_bruta_usd,
            ganancia_neta_usd,
            ganancia_neta_sin_imp_usd,
            ganancia_neta_bs,
            criticos,
            cuentas_abiertas: abiertas,
            deudas_abiertas,
            dinero_en_la_calle_usd,
            dinero_en_la_calle_bs,
            top_productos: top,
            dinero_por_categoria,
        })
    })
}

#[tauri::command]
fn obtener_tasa_bcv(state: tauri::State<AppState>) -> Result<TasaInfo, UIError> {
    Ok(state.servicio_tasa.info_actual())
}

#[tauri::command]
async fn forzar_actualizacion_tasa(state: tauri::State<'_, AppState>) -> Result<TasaInfo, UIError> {
    let resultado = state.servicio_tasa.refrescar().await;
    notificar_panel(&state);
    resultado
}

#[tauri::command]
fn obtener_tasa_pendiente(state: tauri::State<AppState>) -> Result<Option<TasaInfo>, UIError> {
    Ok(state.servicio_tasa.tasa_pendiente())
}

#[tauri::command]
fn aplicar_tasa_pendiente(state: tauri::State<AppState>) -> Result<TasaInfo, UIError> {
    let resultado = state.servicio_tasa.aplicar_tasa_pendiente();
    notificar_panel(&state);
    resultado
}

#[tauri::command]
fn establecer_tasa_manual(
    state: tauri::State<AppState>,
    valor: String,
) -> Result<TasaInfo, UIError> {
    let valor = Decimal::from_str(&valor.trim().replace(',', "."))
        .map_err(|_| UIError::new("tasa inválida", "Formato decimal inválido"))?;
    let resultado = state.servicio_tasa.establecer_tasa_manual(valor);
    notificar_panel(&state);
    resultado
}

#[tauri::command]
fn fijar_tasa_manual(state: tauri::State<AppState>, tasa: String) -> Result<TasaInfo, UIError> {
    let valor = Decimal::from_str(&tasa.trim().replace(',', "."))
        .map_err(|_| UIError::new("tasa invalida", "Formato decimal invalido"))?;
    let resultado = state.servicio_tasa.establecer_tasa_manual(valor);
    notificar_panel(&state);
    resultado
}

#[tauri::command]
fn show_main_window(window: tauri::Window) {
    let _ = window.show();
}

#[derive(Deserialize)]
struct LoginRequest {
    pin: String,
}

#[derive(Serialize)]
struct LoginResponse {
    ok: bool,
    message: String,
}

#[tauri::command]
async fn api_login(
    state: tauri::State<'_, AppState>,
    payload: LoginRequest,
) -> Result<LoginResponse, UIError> {
    let cfg = config_requerida(&state)?;
    if cfg.pin_dueno_sha256.is_empty() {
        return Ok(LoginResponse {
            ok: false,
            message: "No hay PIN configurado".into(),
        });
    }
    if cfg.pin_dueno_sha256 != hash_pin(&payload.pin) {
        return Ok(LoginResponse {
            ok: false,
            message: "PIN incorrecto".into(),
        });
    }
    let token = state.session_store.create()?;
    Ok(LoginResponse {
        ok: true,
        message: hex_token(&token),
    })
}

#[tauri::command]
fn api_logout(state: tauri::State<'_, AppState>) -> Result<LoginResponse, UIError> {
    if let Some(token) = extract_session_token(&HeaderMap::new()) {
        state.session_store.remove(&token);
    }
    Ok(LoginResponse {
        ok: true,
        message: "Sesion cerrada".into(),
    })
}

#[tauri::command]
fn get_lan_ip() -> Result<String, UIError> {
    let addrs = local_ip_address::list_afinet_netifas()
        .map_err(|e| UIError::new("error obteniendo IP", &e.to_string()))?;
    for (_, ip) in addrs {
        if ip.is_ipv4() && !ip.is_loopback() {
            return Ok(ip.to_string());
        }
    }
    Ok("127.0.0.1".into())
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct BackupMetadataDto {
    version: u32,
    timestamp_unix: i64,
    arboles: Vec<String>,
    total_registros: usize,
    checksum_sha256: String,
}

#[derive(Deserialize)]
struct BackupRuta {
    ruta: String,
}

#[tauri::command]
fn exportar_backup(
    state: tauri::State<AppState>,
    payload: BackupRuta,
) -> Result<BackupMetadataDto, UIError> {
    let db = state
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let meta = db.exportar_backup(&payload.ruta)?;
    Ok(BackupMetadataDto {
        version: meta.version,
        timestamp_unix: meta.timestamp_unix,
        arboles: meta.arboles,
        total_registros: meta.total_registros,
        checksum_sha256: meta.checksum_sha256,
    })
}

#[tauri::command]
fn importar_backup(
    state: tauri::State<AppState>,
    payload: BackupRuta,
) -> Result<BackupMetadataDto, UIError> {
    let db = state
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let meta = db.importar_backup(&payload.ruta)?;
    Ok(BackupMetadataDto {
        version: meta.version,
        timestamp_unix: meta.timestamp_unix,
        arboles: meta.arboles,
        total_registros: meta.total_registros,
        checksum_sha256: meta.checksum_sha256,
    })
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct RespaldoInfo {
    id: String,
    fecha: String,
    archivo_nombre: String,
    registros: usize,
    tamano_kb: u64,
    checksum_sha256: String,
}

#[tauri::command]
fn listar_backups(
    state: tauri::State<AppState>,
    directorio: String,
) -> Result<Vec<RespaldoInfo>, UIError> {
    let db = state
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let metas = db.listar_backups(&directorio)?;
    let mut infos = Vec::new();
    for meta in metas {
        let ruta =
            std::path::Path::new(&directorio).join(format!("datio_{}.backup", meta.timestamp_unix));
        let archivo_nombre = ruta
            .file_name()
            .unwrap_or_default()
            .to_string_lossy()
            .to_string();
        let id = archivo_nombre.replace(".backup", "");
        let fecha = chrono::DateTime::from_timestamp(meta.timestamp_unix, 0)
            .map(|dt| dt.format("%Y-%m-%d %H:%M").to_string())
            .unwrap_or_default();
        let tamano_kb = std::fs::metadata(&ruta)
            .map(|m| m.len() / 1024)
            .unwrap_or(0);
        infos.push(RespaldoInfo {
            id,
            fecha,
            archivo_nombre,
            registros: meta.total_registros,
            tamano_kb,
            checksum_sha256: meta.checksum_sha256,
        });
    }
    Ok(infos)
}

#[tauri::command]
fn auto_backup(
    state: tauri::State<AppState>,
    directorio: String,
    max_backups: usize,
) -> Result<Option<BackupMetadataDto>, UIError> {
    let db = state
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let meta = db.auto_backup(&directorio, max_backups)?;
    Ok(meta.map(|m| BackupMetadataDto {
        version: m.version,
        timestamp_unix: m.timestamp_unix,
        arboles: m.arboles,
        total_registros: m.total_registros,
        checksum_sha256: m.checksum_sha256,
    }))
}

#[tauri::command]
fn get_backup_dir() -> Result<String, UIError> {
    let base_dir = std::env::current_exe()
        .ok()
        .and_then(|p| p.parent().map(|p| p.to_path_buf()))
        .unwrap_or_else(|| {
            std::env::current_dir().unwrap_or_else(|_| std::path::PathBuf::from("."))
        });
    let dir = base_dir.join("Respaldos");
    std::fs::create_dir_all(&dir)
        .map_err(|e| UIError::new("error creando directorio de respaldos", &e.to_string()))?;
    Ok(dir.to_string_lossy().to_string())
}

// ---------------- comandos: categorias ----------------

#[tauri::command]
fn listar_categorias(estado: tauri::State<AppState>) -> Result<Vec<Categoria>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.listar_categorias())?)
}

#[tauri::command]
fn crear_categoria(
    estado: tauri::State<AppState>,
    nombre: String,
) -> Result<Vec<Categoria>, UIError> {
    config_requerida(&estado)?;
    let nombre = nombre.trim().to_string();
    if nombre.is_empty() || nombre.len() > 32 {
        return Err(UIError::new("nombre invalido", "1-32 caracteres"));
    }
    let cat = Categoria {
        id: format!("cat-{}", Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
    };
    con_ledger(&estado, |db| db.guardar_categoria(&cat))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_categorias())?)
}

#[tauri::command]
fn eliminar_categoria(
    estado: tauri::State<AppState>,
    id: String,
) -> Result<Vec<Categoria>, UIError> {
    config_requerida(&estado)?;
    con_ledger(&estado, |db| db.eliminar_categoria(&id))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_categorias())?)
}

// ---------------- comandos: tasas impuestos ----------------

#[tauri::command]
fn listar_tasas_impuestos(estado: tauri::State<AppState>) -> Result<Vec<TasaImpuesto>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.listar_tasas_impuestos())?)
}

#[tauri::command]
fn crear_tasa_impuesto(
    estado: tauri::State<AppState>,
    nombre: String,
    porcentaje: f64,
) -> Result<Vec<TasaImpuesto>, UIError> {
    config_requerida(&estado)?;
    let nombre = nombre.trim().to_string();
    if nombre.is_empty() || nombre.len() > 32 {
        return Err(UIError::new("nombre invalido", "1-32 caracteres"));
    }
    if porcentaje < 0.0 || porcentaje > 100.0 {
        return Err(UIError::new("porcentaje invalido", "0-100"));
    }
    let t = TasaImpuesto {
        id: format!("ti-{}", Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
        porcentaje: Decimal::try_from(porcentaje).unwrap_or(Decimal::ZERO),
    };
    con_ledger(&estado, |db| db.guardar_tasa_impuesto(&t))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_tasas_impuestos())?)
}

#[tauri::command]
fn eliminar_tasa_impuesto(
    estado: tauri::State<AppState>,
    id: String,
) -> Result<Vec<TasaImpuesto>, UIError> {
    config_requerida(&estado)?;
    con_ledger(&estado, |db| db.eliminar_tasa_impuesto(&id))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_tasas_impuestos())?)
}

// ---------------- comandos: metodos de pago ----------------

#[tauri::command]
fn listar_metodos_pago(estado: tauri::State<AppState>) -> Result<Vec<MetodoPagoConfig>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.listar_metodos_pago())?)
}

#[tauri::command]
fn crear_metodo_pago(
    estado: tauri::State<AppState>,
    nombre: String,
    moneda: String,
) -> Result<Vec<MetodoPagoConfig>, UIError> {
    config_requerida(&estado)?;
    let nombre = nombre.trim().to_uppercase().to_string();
    if nombre.is_empty() || nombre.len() > 25 {
        return Err(UIError::new(
            "nombre invalido",
            "1-25 caracteres, solo alfanumerico",
        ));
    }
    if moneda != "USD" && moneda != "BS" {
        return Err(UIError::new("moneda invalida", "USD o BS"));
    }
    let m = MetodoPagoConfig { nombre, moneda };
    con_ledger(&estado, |db| db.guardar_metodo_pago(&m))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_metodos_pago())?)
}

#[tauri::command]
fn eliminar_metodo_pago(
    estado: tauri::State<AppState>,
    nombre: String,
) -> Result<Vec<MetodoPagoConfig>, UIError> {
    config_requerida(&estado)?;
    let metodos = con_ledger(&estado, |db| db.listar_metodos_pago())?;
    if metodos.len() <= 1 {
        return Err(UIError::new(
            "no permitido",
            "Debe existir al menos un metodo de pago",
        ));
    }
    con_ledger(&estado, |db| db.eliminar_metodo_pago(&nombre))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_metodos_pago())?)
}

// ---------------- comandos: operadores ----------------

#[tauri::command]
fn listar_operadores(estado: tauri::State<AppState>) -> Result<Vec<Operador>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.listar_operadores())?)
}

#[tauri::command]
fn crear_operador(
    estado: tauri::State<AppState>,
    nombre: String,
) -> Result<Vec<Operador>, UIError> {
    config_requerida(&estado)?;
    let nombre = nombre.trim().to_string();
    if nombre.is_empty() || nombre.len() > 30 {
        return Err(UIError::new("nombre invalido", "1-30 caracteres"));
    }
    let op = Operador {
        id: format!("op-{}", Uuid::new_v4().to_string()[..8].to_string()),
        nombre,
        activo: true,
        creado_unix: ahora_unix(),
    };
    con_ledger(&estado, |db| db.guardar_operador(&op))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_operadores())?)
}

#[tauri::command]
fn editar_operador(
    estado: tauri::State<AppState>,
    id: String,
    nombre: String,
) -> Result<Vec<Operador>, UIError> {
    config_requerida(&estado)?;
    let nombre = nombre.trim().to_string();
    if nombre.is_empty() || nombre.len() > 30 {
        return Err(UIError::new("nombre invalido", "1-30 caracteres"));
    }
    let mut ops = con_ledger(&estado, |db| db.listar_operadores())?;
    if let Some(op) = ops.iter_mut().find(|o| o.id == id) {
        op.nombre = nombre;
        con_ledger(&estado, |db| db.guardar_operador(op))?;
    }
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_operadores())?)
}

#[tauri::command]
fn eliminar_operador(estado: tauri::State<AppState>, id: String) -> Result<Vec<Operador>, UIError> {
    config_requerida(&estado)?;
    con_ledger(&estado, |db| db.eliminar_operador(&id))?;
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_operadores())?)
}

#[tauri::command]
fn alternar_operador(estado: tauri::State<AppState>, id: String) -> Result<Vec<Operador>, UIError> {
    config_requerida(&estado)?;
    let mut ops = con_ledger(&estado, |db| db.listar_operadores())?;
    if let Some(op) = ops.iter_mut().find(|o| o.id == id) {
        op.activo = !op.activo;
        con_ledger(&estado, |db| db.guardar_operador(op))?;
    }
    notificar_panel(&estado);
    Ok(con_ledger(&estado, |db| db.listar_operadores())?)
}

// ---------------- comandos: semaforo stock ----------------

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct SemaforoDto {
    rojo_max: u32,
    amarillo_max: u32,
}

#[tauri::command]
fn obtener_semaforo_stock(estado: tauri::State<AppState>) -> Result<SemaforoDto, UIError> {
    config_requerida(&estado)?;
    let s = con_ledger(&estado, |db| db.cargar_semaforo())?;
    Ok(s.map(|v| SemaforoDto {
        rojo_max: v.rojo_max,
        amarillo_max: v.amarillo_max,
    })
    .unwrap_or(SemaforoDto {
        rojo_max: 5,
        amarillo_max: 15,
    }))
}

#[tauri::command]
fn guardar_semaforo_stock(
    estado: tauri::State<AppState>,
    rojo_max: u32,
    amarillo_max: u32,
) -> Result<SemaforoDto, UIError> {
    config_requerida(&estado)?;
    if rojo_max < 1 || amarillo_max <= rojo_max {
        return Err(UIError::new(
            "valores invalidos",
            "Rojo >= 1, amarillo > rojo",
        ));
    }
    let s = SemaforoStock {
        rojo_max,
        amarillo_max,
    };
    con_ledger(&estado, |db| db.guardar_semaforo(&s))?;
    notificar_panel(&estado);
    Ok(SemaforoDto {
        rojo_max,
        amarillo_max,
    })
}

// ---------------- comandos: cambiar PIN ----------------

#[tauri::command]
fn cambiar_pin_dueno(
    estado: tauri::State<AppState>,
    pin_anterior: String,
    pin_nuevo: String,
) -> Result<bool, UIError> {
    config_requerida(&estado)?;
    let mut cfg = con_ledger(&estado, |db| db.cargar_config())?
        .ok_or_else(|| UIError::new("negocio sin inicializar", "Ejecute el asistente"))?;
    if !cfg.pin_dueno_sha256.is_empty() {
        if cfg.pin_dueno_sha256 != hash_pin(&pin_anterior) {
            return Err(UIError::new(
                "pin incorrecto",
                "La clave anterior no coincide",
            ));
        }
    }
    // Validate new PIN length
    if !pin_nuevo.trim().is_empty() && pin_nuevo.trim().len() < 6 {
        return Err(UIError::new(
            "pin muy corto",
            "El PIN debe tener al menos 6 dígitos",
        ));
    }
    cfg.pin_dueno_sha256 = if pin_nuevo.trim().is_empty() {
        String::new()
    } else {
        hash_pin(&pin_nuevo)
    };
    con_ledger(&estado, |db| db.actualizar_config(&cfg))?;
    notificar_panel(&estado);
    Ok(true)
}

// ---------------- comandos: eliminar producto ----------------

#[tauri::command]
fn eliminar_producto(estado: tauri::State<AppState>, sku: String) -> Result<(), UIError> {
    config_requerida(&estado)?;
    let sku_norm = sku.trim().to_uppercase();
    let db = estado
        .ledger
        .lock()
        .map_err(|_| UIError::new("db bloqueada", ""))?;
    let tree = db
        .inner_db()
        .open_tree("productos")
        .map_err(|e| UIError::new("error db", &e.to_string()))?;
    tree.remove(sku_norm.as_bytes())
        .map_err(|e| UIError::new("error eliminando", &e.to_string()))?;
    drop(db);
    notificar_panel(&estado);
    Ok(())
}

// ---------------- comandos: reducir stock ----------------

#[tauri::command]
fn reducir_stock(
    estado: tauri::State<AppState>,
    sku: String,
    cantidad: String,
) -> Result<Decimal, UIError> {
    config_requerida(&estado)?;
    let cant = decimal_de(&cantidad)?;
    if cant <= Decimal::ZERO {
        return Err(UIError::new("cantidad invalida", "Debe ser mayor a cero"));
    }
    let mov = movimiento(
        sku.trim().to_uppercase().as_str(),
        -cant,
        MotivoMovimiento::Ajuste,
        None,
    );
    let nuevo_stock = con_ledger(&estado, |db| -> Result<Decimal, DbError> {
        db.aplicar_movimiento(mov, |_, _| {})?;
        let cat = db.cargar_catalogo()?;
        let idx = cat
            .indice_de(sku.trim().to_uppercase().as_str())
            .ok_or(DbError::Negocio(ErrorNegocio::ProductoInexistente))?;
        Ok(cat.stock(idx))
    })?;
    notificar_panel(&estado);
    Ok(nuevo_stock)
}

// ---------------- comandos: jornada ----------------

#[tauri::command]
fn obtener_jornada_actual(estado: tauri::State<AppState>) -> Result<Option<Jornada>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.jornada_actual())?)
}

#[tauri::command]
fn listar_historico_jornadas(estado: tauri::State<AppState>) -> Result<Vec<Jornada>, UIError> {
    config_requerida(&estado)?;
    Ok(con_ledger(&estado, |db| db.listar_jornadas(50))?)
}

#[tauri::command]
fn abrir_jornada(
    estado: tauri::State<AppState>,
    operador: String,
    operadores: Option<Vec<String>>,
) -> Result<Jornada, UIError> {
    config_requerida(&estado)?;
    let tasa = tasa_viva(&estado)?;
    let actual = con_ledger(&estado, |db| db.jornada_actual())?;
    if actual.is_some() {
        return Err(UIError::new(
            "jornada abierta",
            "Ya existe una jornada laboral abierta",
        ));
    }
    let ops = operadores.unwrap_or_default();
    let jornada = Jornada {
        id: format!(
            "JOR-{}-{}",
            chrono::Utc::now().format("%Y%m%d"),
            Uuid::new_v4().to_string()[..6].to_uppercase()
        ),
        estado: "abierta".to_string(),
        inicio_unix: ahora_unix(),
        fin_unix: None,
        operador_inicial: operador.clone(),
        operador_actual: operador,
        operadores_activos: ops.clone(),
        operadores_relevo: ops,
        tasa_inicio: tasa,
        tasa_fin: None,
        ventas_total_usd: Decimal::ZERO,
        ventas_total_bs: Decimal::ZERO,
        tickets_emitidos: 0,
        vuelto_pagado_bs: Decimal::ZERO,
        vuelto_retenido_bs: Decimal::ZERO,
        deudas_liquidadas_usd: Decimal::ZERO,
        entradas_stock_reg: 0,
        mermas_stock_reg: 0,
        cambios_precio_reg: 0,
        checksum_sha256: None,
    };
    con_ledger(&estado, |db| db.guardar_jornada(&jornada))?;
    notificar_panel(&estado);
    Ok(jornada)
}

#[tauri::command]
fn asignar_operadores_turno(
    estado: tauri::State<AppState>,
    operadores: Vec<String>,
) -> Result<Jornada, UIError> {
    config_requerida(&estado)?;
    let mut jornada = con_ledger(&estado, |db| db.jornada_actual())?
        .ok_or_else(|| UIError::new("sin jornada", "No hay jornada abierta"))?;
    jornada.operadores_activos = operadores.clone();
    for op in &operadores {
        if !jornada.operadores_relevo.contains(op) {
            jornada.operadores_relevo.push(op.clone());
        }
    }
    con_ledger(&estado, |db| db.guardar_jornada(&jornada))?;
    notificar_panel(&estado);
    Ok(jornada)
}

#[tauri::command]
fn relevar_operador_jornada(
    estado: tauri::State<AppState>,
    operador: String,
) -> Result<Jornada, UIError> {
    config_requerida(&estado)?;
    let mut jornada = con_ledger(&estado, |db| db.jornada_actual())?
        .ok_or_else(|| UIError::new("sin jornada", "No hay jornada abierta"))?;
    jornada.operador_actual = operador.clone();
    jornada.operadores_activos = vec![operador.clone()];
    if !jornada.operadores_relevo.contains(&operador) {
        jornada.operadores_relevo.push(operador);
    }
    con_ledger(&estado, |db| db.guardar_jornada(&jornada))?;
    notificar_panel(&estado);
    Ok(jornada)
}

#[tauri::command]
fn cerrar_jornada(estado: tauri::State<AppState>) -> Result<Jornada, UIError> {
    config_requerida(&estado)?;
    let tasa = tasa_viva(&estado)?;
    let mut jornada = con_ledger(&estado, |db| db.jornada_actual())?
        .ok_or_else(|| UIError::new("sin jornada", "No hay jornada abierta para cerrar"))?;
    jornada.estado = "cerrada".to_string();
    jornada.fin_unix = Some(ahora_unix());
    jornada.tasa_fin = Some(tasa);
    let checksum = format!("{:x}", Sha256::digest(jornada.id.as_bytes()));
    jornada.checksum_sha256 = Some(checksum);
    con_ledger(&estado, |db| db.guardar_jornada(&jornada))?;
    notificar_panel(&estado);
    Ok(jornada)
}

// ---------------- comandos: cuentas (eliminar consumo, abonar, editar abono) ----------------

#[tauri::command]
fn eliminar_consumo(
    estado: tauri::State<AppState>,
    venta_id: String,
    consumo_id: String,
) -> Result<CuentaDto, UIError> {
    config_requerida(&estado)?;
    // Parse index from consumption ID (format: "consumo-{index}")
    let consumo_idx = consumo_id
        .strip_prefix("consumo-")
        .and_then(|s| s.parse::<usize>().ok())
        .ok_or_else(|| UIError::new("consumo invalido", "El ID del consumo no es valido"))?;
    let actualizada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(
                venta_id.clone(),
            )))?;
        if consumo_idx >= venta.lineas.skus.len() {
            return Err(DbError::Negocio(ErrorNegocio::CuentaInvalida(venta_id)));
        }
        let sku = venta.lineas.skus[consumo_idx];
        let cantidad = venta.lineas.cantidades[consumo_idx];
        venta.lineas.skus.remove(consumo_idx);
        venta.lineas.nombres.remove(consumo_idx);
        venta.lineas.cantidades.remove(consumo_idx);
        venta.lineas.precios_usd.remove(consumo_idx);
        venta.lineas.tasas_bloqueadas.remove(consumo_idx);
        let tree_p = db.inner_db().open_tree("productos")?;
        let sin_stock = tree_p
            .get(sku.as_bytes())?
            .and_then(|v| {
                bincode::deserialize::<Producto>(&v)
                    .or_else(|_| serde_json::from_slice::<Producto>(&v))
                    .ok()
            })
            .map(|p| p.sin_stock)
            .unwrap_or(false);
        if !sin_stock {
            let mov = MovimientoStock {
                id: Uuid::new_v4().to_string(),
                sku: sku.as_str().to_string(),
                delta: cantidad,
                motivo: MotivoMovimiento::Ajuste,
                venta_id: Some(venta_id),
                fecha_unix: ahora_unix(),
                firma_sha256: String::new(),
            };
            db.aplicar_movimiento(mov, |_, _| {})?;
        }
        db.guardar_venta(venta)
    })?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&actualizada))
}

#[tauri::command]
fn abonar_cuenta(
    estado: tauri::State<AppState>,
    venta_id: String,
    monto_usd: Option<f64>,
    monto_bs: Option<f64>,
) -> Result<CuentaDto, UIError> {
    config_requerida(&estado)?;
    let usd = monto_usd
        .map(|v| Decimal::try_from(v).unwrap_or(Decimal::ZERO))
        .unwrap_or(Decimal::ZERO);
    let bs = monto_bs
        .map(|v| Decimal::try_from(v).unwrap_or(Decimal::ZERO))
        .unwrap_or(Decimal::ZERO);
    let actualizada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(venta_id)))?;

        // Reject payments on accounts with no products — prevents floating data
        if venta.lineas.skus.is_empty() && venta.total_usd <= Decimal::ZERO {
            return Err(DbError::Negocio(ErrorNegocio::CuentaInvalida(
                "No se puede abonar a una cuenta sin productos registrados".into(),
            )));
        }

        venta.abonos_usd = Some(venta.abonos_usd.unwrap_or(Decimal::ZERO) + usd);
        venta.abonos_bs = Some(venta.abonos_bs.unwrap_or(Decimal::ZERO) + bs);
        db.guardar_venta(venta)
    })?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&actualizada))
}

#[tauri::command]
fn editar_abono_cuenta(
    estado: tauri::State<AppState>,
    venta_id: String,
    nuevo_abono_usd: f64,
) -> Result<CuentaDto, UIError> {
    config_requerida(&estado)?;
    let usd = Decimal::try_from(nuevo_abono_usd).unwrap_or(Decimal::ZERO);
    let actualizada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(venta_id)))?;
        venta.abonos_usd = Some(usd.max(Decimal::ZERO));
        db.guardar_venta(venta)
    })?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&actualizada))
}

#[tauri::command]
fn convertir_cuenta_a_deuda(
    estado: tauri::State<AppState>,
    venta_id: String,
    cliente: String,
    nota: Option<String>,
) -> Result<CuentaDto, UIError> {
    config_requerida(&estado)?;
    let actualizada = con_ledger(&estado, |db| {
        let mut venta = db
            .cargar_venta(&venta_id)?
            .filter(|v| v.es_cuenta_abierta && v.estado == EstadoVenta::Abierta)
            .ok_or(DbError::Negocio(ErrorNegocio::CuentaInvalida(venta_id)))?;
        venta.tipo = "deuda".to_string();
        let c = cliente.trim().to_string();
        if !c.is_empty() {
            venta.etiqueta = c.clone();
            venta.cliente = Some(c);
        }
        if let Some(n) = nota {
            venta.nota = Some(n.trim().to_string());
        }
        db.guardar_venta(venta)
    })?;
    notificar_panel(&estado);
    Ok(cuenta_dto(&actualizada))
}

// ---------------- comandos: listar ventas ----------------

#[tauri::command]
fn listar_ventas(estado: tauri::State<AppState>) -> Result<Vec<TicketDto>, UIError> {
    config_requerida(&estado)?;
    let ventas = con_ledger(&estado, |db| db.ventas_recientes(200))?;
    Ok(ventas
        .iter()
        .map(|v| armar_ticket(v, v.monto_recibido_bs, v.vuelto_bs))
        .collect())
}

// ---------------- comandos: historico tasas ----------------

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct RegistroHistoricoTasa {
    id: String,
    valor: String,
    fecha_hora: String,
    tipo: String,
}

#[tauri::command]
fn listar_historico_tasas(
    estado: tauri::State<AppState>,
) -> Result<Vec<RegistroHistoricoTasa>, UIError> {
    config_requerida(&estado)?;
    let tasas = con_ledger(&estado, |db| db.ultimas_tasas(50))?;
    Ok(tasas
        .iter()
        .enumerate()
        .map(|(i, t)| RegistroHistoricoTasa {
            id: format!("tasa-{}", i),
            valor: t.valor_bs_por_usd.to_string(),
            fecha_hora: chrono::DateTime::from_timestamp(t.fecha_unix, 0)
                .map(|d| d.format("%Y-%m-%d %H:%M").to_string())
                .unwrap_or_default(),
            tipo: {
                let fuente_len = t.fuente_len as usize;
                let fuente_str = std::str::from_utf8(&t.fuente[..fuente_len]).unwrap_or("BCV");
                if fuente_str == "MANUAL" {
                    "manual".to_string()
                } else {
                    "automatico".to_string()
                }
            },
        })
        .collect())
}

// ---------------- comandos: respaldos (aliases) ----------------

#[tauri::command]
fn crear_respaldo(estado: tauri::State<AppState>) -> Result<RespaldoInfo, UIError> {
    let dir = get_backup_dir()?;
    std::fs::create_dir_all(&dir).map_err(|e| UIError::new("error directorio", &e.to_string()))?;
    let ruta = std::path::Path::new(&dir).join(format!("datio_{}.backup", ahora_unix()));
    let ruta_str = ruta.to_string_lossy().to_string();
    let payload = BackupRuta { ruta: ruta_str };
    let meta = exportar_backup(estado, payload)?;
    let archivo_nombre = ruta
        .file_name()
        .unwrap_or_default()
        .to_string_lossy()
        .to_string();
    let id = archivo_nombre.replace(".backup", "");
    let fecha = chrono::DateTime::from_timestamp(meta.timestamp_unix, 0)
        .map(|dt| dt.format("%Y-%m-%d %H:%M").to_string())
        .unwrap_or_default();
    let tamano_kb = std::fs::metadata(&ruta)
        .map(|m| m.len() / 1024)
        .unwrap_or(0);
    Ok(RespaldoInfo {
        id,
        fecha,
        archivo_nombre,
        registros: meta.total_registros,
        tamano_kb,
        checksum_sha256: meta.checksum_sha256,
    })
}

#[tauri::command]
fn listar_respaldos(estado: tauri::State<AppState>) -> Result<Vec<RespaldoInfo>, UIError> {
    let dir = get_backup_dir()?;
    let ledger = estado
        .ledger
        .lock()
        .map_err(|e| UIError::new("lock", &e.to_string()))?;
    let metas = ledger
        .listar_backups(&dir)
        .map_err(|e| UIError::new("error listando respaldos", &e.to_string()))?;
    let mut infos = Vec::new();
    for meta in metas {
        let fecha = chrono::DateTime::from_timestamp(meta.timestamp_unix, 0)
            .map(|dt| dt.format("%Y-%m-%d %H:%M").to_string())
            .unwrap_or_default();
        let nombre_con_prefijo = format!("datio_{}.backup", meta.timestamp_unix);
        let ruta_con_prefijo = std::path::Path::new(&dir).join(&nombre_con_prefijo);
        let (archivo_nombre, ruta) = if ruta_con_prefijo.exists() {
            (nombre_con_prefijo, ruta_con_prefijo)
        } else {
            let nombre_simple = format!("{}.backup", meta.timestamp_unix);
            let ruta_simple = std::path::Path::new(&dir).join(&nombre_simple);
            (nombre_simple, ruta_simple)
        };
        let id = archivo_nombre.replace(".backup", "");
        let tamano_kb = std::fs::metadata(&ruta)
            .ok()
            .map(|m| m.len() / 1024)
            .unwrap_or(0);
        infos.push(RespaldoInfo {
            id,
            fecha,
            archivo_nombre,
            registros: meta.total_registros,
            tamano_kb,
            checksum_sha256: meta.checksum_sha256,
        });
    }
    infos.sort_by(|a, b| b.fecha.cmp(&a.fecha));
    Ok(infos)
}

#[tauri::command]
fn restaurar_desde_respaldo(
    state: tauri::State<AppState>,
    archivo: Option<String>,
) -> Result<bool, UIError> {
    let ruta = archivo.unwrap_or_else(|| {
        let dir = get_backup_dir().unwrap_or_default();
        std::path::Path::new(&dir)
            .join(format!("datio_{}.backup", ahora_unix()))
            .to_string_lossy()
            .to_string()
    });
    let payload = BackupRuta { ruta };
    importar_backup(state, payload).map(|_| true)
}

#[tauri::command]
fn restaurar_desde_archivo(
    state: tauri::State<AppState>,
    contenido_base64: String,
    nombre_archivo: String,
) -> Result<BackupMetadataDto, UIError> {
    use base64::Engine;
    let bytes = base64::engine::general_purpose::STANDARD
        .decode(&contenido_base64)
        .map_err(|e| UIError::new("archivo corrupto", &e.to_string()))?;
    let dir = get_backup_dir()?;
    std::fs::create_dir_all(&dir).map_err(|e| UIError::new("error directorio", &e.to_string()))?;
    let safe_name = nombre_archivo.replace(['/', '\\', '\0'], "_");
    let ruta = std::path::Path::new(&dir).join(&safe_name);
    std::fs::write(&ruta, &bytes)
        .map_err(|e| UIError::new("error escribiendo archivo", &e.to_string()))?;
    let payload = BackupRuta {
        ruta: ruta.to_string_lossy().to_string(),
    };
    let meta = importar_backup(state, payload)?;
    Ok(BackupMetadataDto {
        version: meta.version,
        timestamp_unix: meta.timestamp_unix,
        arboles: meta.arboles,
        total_registros: meta.total_registros,
        checksum_sha256: meta.checksum_sha256,
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let mut db_path = std::path::PathBuf::from("../datiolabs_db");
            if let Ok(dir) = app.path().app_data_dir() {
                let _ = std::fs::create_dir_all(&dir);
                db_path = dir.join("datiolabs_db");
            }
            let ledger = Ledger::abrir(db_path.to_str().unwrap_or("../datiolabs_db"))
                .map_err(UIError::from)?;

            let mut ruta_cache = db_path.clone();
            ruta_cache.set_file_name("tasa_bcv_cache.json");

            let ledger_arc = Arc::new(Mutex::new(ledger));
            let servicio_tasa = Arc::new(ServicioTasa::new(ruta_cache, ledger_arc.clone())?);

            let db_sled = ledger_arc
                .lock()
                .map_err(|_| UIError::new("error de bloqueo", "fallo al bloquear base de datos"))?
                .inner_db();

            let app_state = AppState {
                ledger: ledger_arc.clone(),
                servicio_tasa: servicio_tasa.clone(),
                session_store: SessionStore::new(&db_sled)?,
                tx: broadcast::channel(16).0,
                external_ip: Arc::new(Mutex::new(None)),
                dedup_ventas: Arc::new(std::sync::Mutex::new(HashMap::new())),
            };

            app.manage(app_state.clone());

            iniciar_refresco(servicio_tasa.clone());

            let session_store = app_state.session_store.clone();
            let ledger_for_axum = ledger_arc.clone();
            let servicio_tasa_for_axum = servicio_tasa.clone();
            let tx_for_axum = app_state.tx.clone();
            let app_state_clone = app_state.clone();

            tauri::async_runtime::spawn(async move {
                let cors = CorsLayer::new()
                    .allow_origin(Any)
                    .allow_methods([
                        Method::GET,
                        Method::POST,
                        Method::PUT,
                        Method::DELETE,
                        Method::OPTIONS,
                    ])
                    .allow_headers(Any)
                    .allow_credentials(true);

                let protected = Router::new()
                    .route("/api/panel", get(api_panel))
                    .route("/api/tasa", get(api_tasa))
                    .route("/api/tasa/pendiente", get(api_tasa_pendiente))
                    .route("/api/tasa/aplicar", post(api_tasa_aplicar))
                    .route("/api/tasa/manual", post(api_tasa_manual))
                    .route("/api/cuentas", get(api_cuentas))
                    .route("/api/cuentas", post(api_cuentas_abrir))
                    .route("/api/cuentas/:id/consumo", post(api_cuentas_consumo))
                    .route(
                        "/api/cuentas/:id/consumo/:idx",
                        delete(api_cuentas_eliminar_consumo),
                    )
                    .route("/api/cuentas/:id/abonar", post(api_cuentas_abonar))
                    .route(
                        "/api/cuentas/:id/convertir-deuda",
                        post(api_cuentas_convertir_deuda),
                    )
                    .route("/api/cuentas/:id/cerrar", post(api_cuentas_cerrar))
                    .route("/api/productos", get(api_productos))
                    .route("/api/productos", post(api_productos_crear))
                    .route("/api/productos/:sku", delete(api_productos_eliminar))
                    .route("/api/productos/:sku/compra", post(api_productos_compra))
                    .route("/api/productos/:sku/reducir", post(api_productos_reducir))
                    .route("/api/productos/:sku/merma", post(api_productos_merma))
                    .route("/api/ventas", get(api_ventas_listar))
                    .route("/api/ventas", post(api_ventas_registrar))
                    .route("/api/categorias", get(api_categorias_listar))
                    .route("/api/categorias", post(api_categorias_crear))
                    .route("/api/categorias/:id", delete(api_categorias_eliminar))
                    .route("/api/tasas-impuestos", get(api_tasas_impuestos_listar))
                    .route("/api/tasas-impuestos", post(api_tasas_impuestos_crear))
                    .route(
                        "/api/tasas-impuestos/:id",
                        delete(api_tasas_impuestos_eliminar),
                    )
                    .route("/api/metodos-pago", get(api_metodos_pago_listar))
                    .route("/api/metodos-pago", post(api_metodos_pago_crear))
                    .route(
                        "/api/metodos-pago/:nombre",
                        delete(api_metodos_pago_eliminar),
                    )
                    .route("/api/operadores", get(api_operadores_listar))
                    .route("/api/operadores", post(api_operadores_crear))
                    .route("/api/operadores/:id", put(api_operadores_editar))
                    .route("/api/operadores/:id", delete(api_operadores_eliminar))
                    .route(
                        "/api/operadores/:id/alternar",
                        post(api_operadores_alternar),
                    )
                    .route("/api/jornadas", get(api_jornadas_listar))
                    .route("/api/jornadas/actual", get(api_jornada_actual))
                    .route("/api/jornadas/abrir", post(api_jornadas_abrir))
                    .route("/api/jornadas/cerrar", post(api_jornadas_cerrar))
                    .route("/api/jornadas/asignar", post(api_jornadas_asignar))
                    .route("/api/jornadas/relevar", post(api_jornadas_relevar))
                    .route("/api/semaforo", get(api_semaforo_obtener))
                    .route("/api/semaforo", post(api_semaforo_guardar))
                    .route("/api/pin/cambiar", post(api_pin_cambiar))
                    .route("/api/config/privacidad", post(api_config_privacidad))
                    .route("/api/respaldos", get(api_respaldos_listar))
                    .route("/api/respaldos", post(api_respaldos_crear))
                    .route("/api/respaldos/restaurar", post(api_respaldos_restaurar))
                    .route("/api/historico-tasas", get(api_historico_tasas))
                    .layer(middleware::from_fn_with_state(
                        session_store.clone(),
                        auth_middleware,
                    ));

                let spa_dist_path =
                    std::path::Path::new(env!("CARGO_MANIFEST_DIR")).join("../../ui/dist");
                let public = Router::new()
                    .route("/api/auth/login", post(api_auth_login))
                    .route("/api/auth/logout", post(api_auth_logout))
                    .route("/api/events", get(api_sse_events))
                    .route("/panel", get(serve_panel_html))
                    .route("/api/spa", get(api_spa_content))
                    .route("/api/config", get(api_config))
                    .fallback_service(
                        ServeDir::new(spa_dist_path).append_index_html_on_directories(false),
                    );

                let app = Router::new()
                    .merge(public)
                    .merge(protected)
                    .layer(axum::extract::DefaultBodyLimit::max(2 * 1024 * 1024))
                    .layer(cors)
                    .with_state(AxumAppState {
                        ledger: ledger_for_axum,
                        servicio_tasa: servicio_tasa_for_axum,
                        session_store,
                        tx: tx_for_axum,
                        rate_limiter: RateLimiter::new(5, 300), // 5 intentos, lockout 5 minutos
                    });

                if let Ok(listener) =
                    tokio::net::TcpListener::bind(format!("0.0.0.0:{}", SERVIDOR_PORT)).await
                {
                    // Try UPnP for automatic port forwarding
                    let upnp_ip = try_upnp(SERVIDOR_PORT).await;
                    if let Some(ref ip) = upnp_ip {
                        println!("[UPnP] External IP: {}", ip);
                        // Store external IP in app state for QR generation
                        if let Ok(mut ext) = app_state_clone.external_ip.lock() {
                            *ext = Some(ip.clone());
                        }
                    } else {
                        println!("[UPnP] Could not set up port forwarding");
                    }

                    println!("[Server] Listening on 0.0.0.0:{}", SERVIDOR_PORT);
                    let _ = axum::serve(listener, app).await;
                }
            });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            obtener_config,
            inicializar_negocio,
            validar_pin_dueno,
            obtener_licencia,
            validar_licencia,
            crear_producto,
            listar_productos,
            compra_stock,
            registrar_merma,
            crear_lote,
            registrar_venta,
            abrir_cuenta,
            listar_cuentas,
            agregar_consumo,
            cerrar_cuenta,
            datos_panel,
            obtener_tasa_bcv,
            forzar_actualizacion_tasa,
            obtener_tasa_pendiente,
            aplicar_tasa_pendiente,
            establecer_tasa_manual,
            fijar_tasa_manual,
            show_main_window,
            api_login,
            api_logout,
            get_lan_ip,
            exportar_backup,
            importar_backup,
            listar_backups,
            auto_backup,
            get_backup_dir,
            listar_categorias,
            crear_categoria,
            eliminar_categoria,
            listar_tasas_impuestos,
            crear_tasa_impuesto,
            eliminar_tasa_impuesto,
            listar_metodos_pago,
            crear_metodo_pago,
            eliminar_metodo_pago,
            listar_operadores,
            crear_operador,
            editar_operador,
            eliminar_operador,
            alternar_operador,
            obtener_semaforo_stock,
            guardar_semaforo_stock,
            cambiar_pin_dueno,
            eliminar_producto,
            reducir_stock,
            obtener_jornada_actual,
            listar_historico_jornadas,
            abrir_jornada,
            asignar_operadores_turno,
            relevar_operador_jornada,
            cerrar_jornada,
            eliminar_consumo,
            abonar_cuenta,
            editar_abono_cuenta,
            convertir_cuenta_a_deuda,
            listar_ventas,
            listar_historico_tasas,
            crear_respaldo,
            listar_respaldos,
            restaurar_desde_respaldo,
            restaurar_desde_archivo
        ])
        .run(tauri::generate_context!())
        .unwrap_or_else(|e| {
            eprintln!("Error fatal: {}", e);
        });
}
