# DatioLabs Enterprise — Roadmap

## Estado Actual
- SPA completa (Caja, Ventas, Inventario, Panel, Cuentas, Guia) — UI responsive para desktop y mobile browser.
- Backend Tauri con 32 comandos implementados (config, productos, ventas, cuentas, tasa BCV, backups, P2P).
- Axum server con endpoints de lectura + autenticacion + tasa.
- Demo desplegada en datiolabs.com (Cloudflare Pages).

## Fases de Implementacion

### F0: Fixes Criticos
- QR: colores oscuro/claro casi negros → usar `light_color([0xFF])`.
- BCV: alias `fijar_tasa_manual` → reusa `establecer_tasa_manual`.
- SSE: `broadcast::Sender` creado pero nunca se hace `tx.send(())`.
- Config: desbloquear `guardar_config` (one-shot) → metodo `actualizar_config`.

### F1: Contratos de Integridad
- Extender `Venta` con: `tipo`, `cliente`, `nota`, `abonos_usd`, `abonos_bs`.
- Extender `Producto` con: `categoria_id`, `precio_bruto_usd`, `margen_pct`, `sin_stock`, `unidad`, `es_caja`, `unidades_por_caja`.
- Privacidad de inventario: campo `privacidad_inventario` en `ConfigNegocio`, guardar en wizard, aplicar en vistas.
- Validaciones: venta siempre descuenta stock, cuenta siempre cuadra, PIN consistente, tasa persistida antes de venta, jornada unica abierta, SHA-256 en cierre, al menos 1 metodo pago.

### F2: Modelos + DB
- 8 structs nuevos: Categoria, TasaImpuesto, MetodoPago, Operador, Jornada, DispositivoRemoto, RespaldoInfo, SemaforoStock.
- 7 arboles sled: categorias, tasas_impuestos, metodos_pago, operadores, jornadas, dispositivos, semaforo_stock.
- Metodos CRUD en db.rs para cada arbol.

### F3: 37 Comandos Tauri
- Categorias (3): listar, crear, eliminar.
- Tasas impuestos (3): listar, crear, eliminar.
- Metodos de pago (3): listar, crear, eliminar.
- Operadores (5): listar, crear, editar, eliminar, alternar.
- Dispositivos (3): listar, registrar, revocar.
- Semaforo (2): obtener, guardar.
- PIN (1): cambiar_pin_dueno.
- Producto (1): eliminar_producto.
- Stock (1): reducir_stock.
- Jornada (6): obtener_actual, historico, abrir, asignar_operadores, relevar, cerrar.
- Cuentas (4): eliminar_consumo, abonar, editar_abono, listar_ventas.
- Tasas (2): listar_historico, fijar_tasa_manual (alias).
- Respaldo (3): crear, listar, restaurar (aliases de funciones existentes).

### F4: Endpoints Axum de Escritura
- 37 endpoints POST/PUT/DELETE que replican los comandos Tauri.
- Fix SSE: `tx.send(())` despues de cada escritura.

### F5: panel.html Expansion
- Navegacion por tabs: Dashboard, Productos, Cuentas, Ventas, Operarios, Jornada, Ajustes.
- CRUD completo desde el movil via P2P DataChannel.

### F6: Build + Deploy
- `cargo check -p datiolabs-core` (local).
- `npm run build` en `ui/`.
- Copiar `descargas.html` a `ui/dist/`.
- `npx wrangler pages deploy ui/dist --project-name=datiolabs-demo`.
- Push + tag v0.1.1.
- GitHub Actions build.

## Arquitectura de Produccion
```
Dueño → Celular → QR → P2P DataChannel → Desktop Tauri → Sled DB
```
- datiolabs.com = demo + descargas (solo lectura).
- Produccion = Desktop Tauri + movil via P2P.
