use rust_decimal::Decimal;
use thiserror::Error;

pub const RUBRO_ABASTO: u16 = 1 << 0;
pub const RUBRO_PANADERIA: u16 = 1 << 1;
pub const RUBRO_LICORERIA: u16 = 1 << 2;
pub const RUBRO_RETAIL: u16 = 1 << 3;
pub const RUBRO_UNIVERSAL: u16 = RUBRO_ABASTO | RUBRO_PANADERIA | RUBRO_LICORERIA | RUBRO_RETAIL;

pub const CAP_UNITARIA: u16 = 1 << 0;
pub const CAP_PESABLE: u16 = 1 << 1;
pub const CAP_PERECEDERO: u16 = 1 << 2;
pub const CAP_CUENTA_ABIERTA: u16 = 1 << 3;
pub const CAP_SERIE: u16 = 1 << 4;
pub const CAP_VARIANTES: u16 = 1 << 5;
pub const CAP_GARANTIA: u16 = 1 << 6;
pub const CAP_COMISION: u16 = 1 << 7;
pub const TODAS_LAS_CAPACIDADES: u16 = CAP_UNITARIA
    | CAP_PESABLE
    | CAP_PERECEDERO
    | CAP_CUENTA_ABIERTA
    | CAP_SERIE
    | CAP_VARIANTES
    | CAP_GARANTIA
    | CAP_COMISION;

#[derive(Debug, Error, PartialEq)]
pub enum ErrorNegocio {
    #[error("producto inexistente en el catalogo")]
    ProductoInexistente,
    #[error("stock insuficiente: disponible {disponible}, solicitado {solicitado}")]
    StockInsuficiente {
        disponible: Decimal,
        solicitado: Decimal,
    },
    #[error("cantidad invalida para producto de venta unitaria: {0}")]
    CantidadNoUnitaria(Decimal),
    #[error("lote vencido: caduco en unix {caduco_unix}")]
    LoteVencido { caduco_unix: i64 },
    #[error("sku duplicado en el catalogo: {0}")]
    SkuDuplicado(String),
    #[error("capacidad no activa en la configuracion del negocio: bits solicitados {0:#010b}")]
    CapacidadInactiva(u16),
    #[error("el negocio ya esta inicializado")]
    YaInicializado,
    #[error("el negocio no ha sido inicializado")]
    NoInicializado,
    #[error("cuenta abierta inexistente o ya cerrada: {0}")]
    CuentaInvalida(String),
    #[error("pago insuficiente: requerido {requerido}, recibido {recibido}")]
    PagoInsuficiente {
        requerido: Decimal,
        recibido: Decimal,
    },
}

/// Deduplicacion por OR de bits: el software unificado activa
/// todas las capacidades del motor de forma nativa e inherente.
pub const fn capacidades_de_rubros(rubros: u16) -> u16 {
    if rubros == 0 {
        TODAS_LAS_CAPACIDADES
    } else {
        let mut caps = CAP_UNITARIA;
        if rubros & RUBRO_ABASTO != 0 {
            caps |= CAP_PESABLE;
        }
        if rubros & RUBRO_PANADERIA != 0 {
            caps |= CAP_PESABLE | CAP_PERECEDERO;
        }
        if rubros & RUBRO_LICORERIA != 0 {
            caps |= CAP_CUENTA_ABIERTA;
        }
        if rubros & RUBRO_RETAIL != 0 {
            caps |= CAP_SERIE | CAP_VARIANTES | CAP_GARANTIA | CAP_COMISION;
        }
        caps
    }
}

pub const fn rubros_activos(rubros: u16) -> bool {
    rubros != 0
        && (rubros & !(RUBRO_ABASTO | RUBRO_PANADERIA | RUBRO_LICORERIA | RUBRO_RETAIL)) == 0
}

/// Validacion pura de una linea de venta contra las capacidades del producto.
/// `cantidad_disponible` proviene del indice SoA del catalogo; cero allocaciones.
pub fn validar_linea(
    capacidades: u16,
    cantidad: Decimal,
    stock_disponible: Decimal,
) -> Result<(), ErrorNegocio> {
    if cantidad <= Decimal::ZERO {
        return Err(ErrorNegocio::CantidadNoUnitaria(cantidad));
    }
    let es_unitaria = capacidades & CAP_PESABLE == 0;
    if es_unitaria && cantidad.fract() != Decimal::ZERO {
        return Err(ErrorNegocio::CantidadNoUnitaria(cantidad));
    }
    if stock_disponible < cantidad {
        return Err(ErrorNegocio::StockInsuficiente {
            disponible: stock_disponible,
            solicitado: cantidad,
        });
    }
    Ok(())
}

/// Verificacion de vigencia para productos perecederos gobernados por lote.
pub fn validar_vigencia(caduce_unix: i64, ahora_unix: i64) -> Result<(), ErrorNegocio> {
    if ahora_unix >= caduce_unix {
        return Err(ErrorNegocio::LoteVencido {
            caduco_unix: caduce_unix,
        });
    }
    Ok(())
}

/// Calcula el checksum ponderado de los primeros 12 digitos decimales.
pub fn calcular_checksum_licencia(digitos_12: &[u8; 12]) -> u16 {
    let mut suma: u32 = 0;
    for (i, &d) in digitos_12.iter().enumerate() {
        suma += (d as u32) * (i as u32 + 1);
    }
    (suma % 10000) as u16
}

/// Genera una clave de licencia universal de 16 digitos decimales unica y verificable.
/// Los primeros 12 digitos se derivan de entropia (semilla/RNG seguro) y los ultimos 4
/// codifican el checksum ponderado determinista de integridad.
pub fn generar_licencia_universal() -> String {
    use rand::RngExt;
    let mut rng = rand::rng();
    let mut digitos = [0u8; 12];
    for d in &mut digitos {
        *d = rng.random_range(0..10);
    }
    let checksum = calcular_checksum_licencia(&digitos);
    format!(
        "{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:01}{:04}",
        digitos[0],
        digitos[1],
        digitos[2],
        digitos[3],
        digitos[4],
        digitos[5],
        digitos[6],
        digitos[7],
        digitos[8],
        digitos[9],
        digitos[10],
        digitos[11],
        checksum
    )
}

/// Valida una clave de licencia universal de 16 digitos decimales.
pub fn validar_licencia_universal(clave: &str) -> bool {
    let limpio: String = clave.chars().filter(|c| c.is_ascii_digit()).collect();
    if limpio.len() != 16 {
        return false;
    }
    let bytes = limpio.as_bytes();
    let mut digitos = [0u8; 12];
    for (d, &b) in digitos.iter_mut().zip(&bytes[..12]) {
        *d = b - b'0';
    }
    let checksum = calcular_checksum_licencia(&digitos);
    let mut esperado: u16 = 0;
    for &b in &bytes[12..16] {
        esperado = esperado * 10 + (b - b'0') as u16;
    }
    checksum == esperado
}

#[cfg(test)]
mod tests {
    use super::*;
    use rust_decimal_macros::dec;

    #[test]
    fn union_deduplica_capacidades_compartidas() {
        assert_eq!(
            capacidades_de_rubros(RUBRO_ABASTO),
            CAP_UNITARIA | CAP_PESABLE
        );
        let ambos = capacidades_de_rubros(RUBRO_ABASTO | RUBRO_PANADERIA);
        assert_eq!(ambos.count_ones(), 3);
        assert_eq!(ambos & CAP_PESABLE, CAP_PESABLE);
        let todos = capacidades_de_rubros(RUBRO_ABASTO | RUBRO_PANADERIA | RUBRO_LICORERIA);
        assert_eq!(todos.count_ones(), 4);
    }

    #[test]
    fn rubros_validos_solo_con_bits_conocidos() {
        assert!(rubros_activos(RUBRO_LICORERIA));
        assert!(rubros_activos(RUBRO_ABASTO | RUBRO_PANADERIA));
        assert!(!rubros_activos(0));
        assert!(!rubros_activos(0b1000_0000));
    }

    #[test]
    fn linea_unitaria_rechaza_fracciones_y_falta_stock() {
        let caps = CAP_UNITARIA;
        assert!(validar_linea(caps, dec!(3), dec!(10)).is_ok());
        assert_eq!(
            validar_linea(caps, dec!(1.5), dec!(10)),
            Err(ErrorNegocio::CantidadNoUnitaria(dec!(1.5)))
        );
        assert_eq!(
            validar_linea(caps, dec!(11), dec!(10)),
            Err(ErrorNegocio::StockInsuficiente {
                disponible: dec!(10),
                solicitado: dec!(11)
            })
        );
    }

    #[test]
    fn pesable_admite_fracciones() {
        assert!(validar_linea(CAP_PESABLE, dec!(0.750), dec!(5)).is_ok());
        assert!(validar_linea(CAP_UNITARIA, dec!(0), dec!(5)).is_err());
    }

    #[test]
    fn vigencia_bloquea_en_y_despues_del_limite() {
        assert!(validar_vigencia(2000, 1999).is_ok());
        assert_eq!(
            validar_vigencia(2000, 2000),
            Err(ErrorNegocio::LoteVencido { caduco_unix: 2000 })
        );
    }

    #[test]
    fn licencia_universal_generacion_y_validacion_determinista() {
        // Validación de formato y checksum de 16 dígitos
        for _ in 0..50 {
            let lic = generar_licencia_universal();
            assert_eq!(lic.len(), 16);
            assert!(lic.chars().all(|c| c.is_ascii_digit()));
            assert!(validar_licencia_universal(&lic));
        }

        // Claves inválidas
        assert!(!validar_licencia_universal("123456789012345")); // 15 dígitos
        assert!(!validar_licencia_universal("12345678901234567")); // 17 dígitos
        assert!(!validar_licencia_universal("1234567890129999")); // Checksum incorrecto
        assert!(!validar_licencia_universal(""));
    }
}
