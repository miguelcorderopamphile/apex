# Implementación Pendiente: Presentaciones Múltiples por Producto

## Contexto
El cliente necesita vender el mismo producto en diferentes presentaciones (unidad, caja de 6, caja de 12, etc.) con precios distintos. Actualmente solo se soporta UN paquete por producto.

## Estado actual
- `Producto` tiene: `es_caja`, `unidades_por_caja`, `precio_paquete_usd`, `nombre_paquete` (solo 1 paquete)
- Frontend: Caja muestra 2 botones (unidad + paquete) por producto
- Backend: `registrar_venta` soporta `modo_venta: "unidad" | "paquete"`

## Cambios necesarios

### 1. Backend - `datiolabs-core/src/models.rs`
- Agregar struct `Presentacion`:
  ```rust
  pub struct Presentacion {
      pub id: String,
      pub nombre: String,        // "Caja de 6", "Fardo de 12"
      pub unidades: u32,         // 6, 12, etc.
      pub precio_usd: Decimal,   // precio de venta de esta presentación
  }
  ```
- Agregar a `Producto`: `pub presentaciones: Vec<Presentacion>` con `#[serde(default)]`
- Mantener compatibilidad: si `presentaciones` está vacío, usar `es_caja`/`precio_paquete_usd` legacy

### 2. Backend - `datiolabs-core/src/db.rs`
- `guardar_producto`: serializar presentaciones como JSON en sled
- `cargar_producto`: deserializar presentaciones desde JSON

### 3. Backend - `datiolabs-ui/src/lib.rs`
- `ProductoInput`: agregar `presentaciones: Option<Vec<PresentacionInput>>`
- `crear_producto` y HTTP `api_productos_crear`: mapear presentaciones
- `registrar_venta` / `api_ventas_registrar`: buscar precio según `presentacion_id` enviada
- `Catalogo`: agregar columnas de presentaciones para lookup rápido

### 4. Frontend - `InventarioView.ts`
- Formulario de producto: reemplazar sección de paquete por lista dinámica de presentaciones
- Botón "+ Agregar presentación" que agrega campos: nombre, unidades, precio
- Eliminar campos legacy `esCaja`, `precioPaqueteUsd`

### 5. Frontend - `CajaView.ts` / `CajaViewModel.ts`
- Por cada producto, mostrar N botones: 1 por presentación + botón unidad
- Cada botón muestra nombre y precio de la presentación
- `agregar()` acepta `presentacionId` en vez de `modo: 'unidad' | 'paquete'`

### 6. Frontend - `CuentasView.ts`
- Misma lógica que CajaView para agregar consumos

### 7. Backend - `api.ts`
- `crearProducto`: enviar `presentaciones[]` en vez de `esCaja`/`precioPaqueteUsd`
- `registrar_venta`: enviar `presentacion_id` por item
- `mockInvocar` (demo): soportar presentaciones en cálculo de precios

### 8. Backward compatibility
- `#[serde(default)]` en `presentaciones` → respaldos viejos cargan con array vacío
- Si `presentaciones` vacío + `es_caja == true` → usar lógica legacy
- Migración: al cargar producto legacy, convertir `es_caja`/`precio_paquete_usd` a 1 Presentacion
