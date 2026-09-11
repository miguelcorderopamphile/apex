# DATIOLABS ENTERPRISE - LISTA MAESTRA DE REQUERIMIENTOS (TODO)

## 0. PRIORIDAD MÁXIMA: Blindaje Matemático en Frontend y Auditoría Cruzada Frontend <-> Backend [COMPLETADO]

### 0.1. Módulo Financiero Determinista en Frontend (Paridad con Rust) [COMPLETADO]
- **Eliminación de Flotantes Crudos en TypeScript**:
  - Implementado `Money.ts` con manejo de punto fijo / céntimos enteros exactos para importes, tasas y conversiones.
  - Cero discrepancia entre números renderizados visualmente y payloads hacia Tauri/Axum.
- **Suite de Pruebas de Propiedades y Fuzzing en Vitest (`fast-check`)**:
  - Implementada suite en `tests/property_financial.test.ts` validando invariantes generativas de cuadratura bancaria multimoneda y precisión exacta.

### 0.2. Auditoría Exhaustiva de Incongruencias Entre Secciones (Frontend <-> Backend) [COMPLETADO]
- Auditoría integral y saneamiento de contratos entre `CajaView`, `CuentasView`, `InventarioView`, `PanelDuenoView`, `GuiaView` y `datiolabs-ui/src/lib.rs`.
- Tipos unificados, sin errores de compilación TypeScript (`tsc --noEmit` limpio) ni advertencias en el núcleo Rust.

---

## 1. Módulo de Presentaciones Múltiples (N Presentaciones por Producto) [COMPLETADO]
- **Solución Orgánica de GUI**:
  - Soporte de botón selector de presentación por tarjeta sin romper la cuadrícula visual.
  - Modo 'unidad' y 'paquete' accesibles de forma inmediata.
- **Descuento Atómico de Stock Físico**:
  - Al vender o agregar a cuenta una presentación que contiene $K$ unidades físicas, se descuenta exactamente $K$ unidades base del inventario físico en `datiolabs-core`, `datiolabs-ui` y validaciones en frontend (`CajaViewModel`).

---

## 2. Gestión de Consumos en Cuentas Abiertas [COMPLETADO]
- **Paridad Operativa con Caja Directa**:
  - Controles de adición rápida `+`, `-` y eliminación total en cada renglón de consumo en `CuentasView`.
  - Reintegro atómico de existencias al inventario al decrementar o eliminar consumos.
  - Búsqueda y adición directa de productos a la cuenta seleccionada.

---

## 3. Reactividad en Formulario de Cobro Multimoneda [COMPLETADO]
- **Actualización Inmediata de Faltante y Sobrante**:
  - Cálculo reactivo vinculado al evento `input` en todos los campos numéricos de monto y tasa en Caja y Cuentas.
  - Captura del evento `keydown` (tecla `Enter`) para recalcular y confirmar automáticamente la operación.

---

## 4. Control de Turnos, Permanencia y Cierre por Check-out en Jornada [COMPLETADO]
- **Registro de Entrada / Salida de Trabajadores**:
  - Modal de gestión de operadores con registro de check-in, check-out y marcas temporales auditables.
- **Cierre de Turno Automático al Hacer Check-out**:
  - Generación automática de balances por operador con desglose de métodos de pago y comprobante de recaudación.

---

## 5. Conversión de Cuentas Abiertas a Deudas (Licorería / Abasto) [COMPLETADO]
- **Transición de Estado Cuenta -> Deuda**:
  - Botón "CONVERTIR A DEUDA" en `CuentasView` para cuentas abiertas no liquidadas.
  - Asignación de cliente titular y nota de plazo/compromiso de pago.
  - Endpoint Axum `POST /api/cuentas/:id/convertir-deuda` y comando Tauri `convertir_cuenta_a_deuda` implementados y sincronizados.

---

## 6. Historial de Turno en Caja y Cuentas (Integración Orgánica UX/UI) [COMPLETADO]
- **Botón Desplegable / Modal de Historial**:
  - Botón compacto "HISTORIAL" en la cabecera de `CajaView` y "HISTORIAL DEL TURNO" en la cabecera de `CuentasView`.
  - Ventana modal brutalista (`historialTurno.ts`) que presenta la recaudación consolidada de la jornada activa, desglose por método de pago y tickets emitidos con marcas horarias VET.

---

## 7. Estandarización y Validación Horaria Estricta (Zona Local VET / UTC-4) [COMPLETADO]
- **Eliminación Total de Horas Flotantes o Desfasadas**:
  - Persistencia en Unix timestamps (`i64`).
  - Módulo `dateUtils.ts` con zona horaria estricta `America/Caracas` para todas las vistas y reportes.

---

## 8. Sustitución de Alertas Nativas del Navegador (`window.alert` / `window.confirm`) [COMPLETADO]
- **Modales y Notificaciones Brutalistas en GUI**:
  - Implementado `dialogs.ts` con `confirmarAccion`, `pedirValor` y `mostrarToast`.
  - Cero llamadas a `window.alert`, `window.confirm` o `window.prompt` en la aplicación.

---

## 9. Purga de Conexión Móvil en Vista GUÍA [COMPLETADO]
- **Eliminación de Referencias y Secciones Móviles**:
  - Purgadas completamente todas las menciones y esquemas de vinculación móvil en `GuiaView.ts`.
