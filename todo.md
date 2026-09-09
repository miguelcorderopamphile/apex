# Tareas Pendientes — Bugs Críticos para Próxima Sesión

## 1. Precio de producto por caja/bulto
- **Archivo:** InventarioView.ts (modal "Registrar Nuevo Producto")
- **Problema:** El precio unitario que se ingresa es por unidad suelta, no por caja/bulto. Cuando el producto viene en caja de 12 unidades y se vende por caja, el precio cobrado debería ser el precio de la caja completa, no el precio por unidad multiplicado por 12. Los software institucionales manejan precio por presentación (unidad + caja).
- **Fix:** Agregar campo `precioCajaUsd` al modelo de Producto, o calcular precio por caja = precioUnitario × unidadesPorCaja. La venta por caja debe usar el precio de caja.

## 2. Venta con doble pago se cuenta como 2 tickets
- **Archivo:** CajaView.ts / api.ts (cerrar_cuenta / demo)
- **Problema:** Al hacer pago mixto (ej: BIOPAGO + ZELLE), el sistema genera 2 tickets separados en vez de 1 ticket con 2 líneas de pago. En el historial de ventas se ven 2 registros de la misma venta.
- **Fix:** Un solo ticket con array `pagos` que contenga ambas entradas. Verificar que `cerrar_cuenta` en Rust y demo solo genere 1 ticket.

## 3. Jornada aparece duplicada
- **Archivo:** PanelDuenoView.ts / api.ts
- **Problema:** La misma jornada `JOR-20260909-01` aparece 2 veces en la lista de historial de jornadas. Dice "Página 1 de 1 · 2 jornadas" pero son la misma.
- **Fix:** Deduplicar por `jornadaId` al listar historial, o verificar que `abrir_jornada` no genere 2 registros.

## 4. Error "monto insuficiente" con monto exacto (decimales flotantes)
- **Archivo:** lib.rs (cerrar_cuenta) + CajaView.ts
- **Problema:** Al cobrar $130.00 USD a tasa 820.10 = Bs. 106.613,23, el sistema rechaza con "El pago recibido no cubre el total en bolívares". El monto ingresado es idéntico al total. Error de precisión flotante al comparar `recibido < total_neto_bs`.
- **Fix:** Usar `Decimal` con precisión fija en las comparaciones. En el frontend, redondear a 2 decimales antes de enviar. En Rust, la comparación `recibido < total_neto_bs` debe usar epsilon o redondeo.

## 5. Ventana emergente `tauri.localhost` al cerrar jornada
- **Archivo:** lib.rs (cerrar_jornada) / Rust backend
- **Problema:** Al cerrar jornada, el backend retorna un `alert()` nativo del navegador con el JSON de la jornada (`alert("Jornada cerrada con éxito... Total Recaudado: $130.00 USD (Bs 106613.2340000000)")`). No debería usar `alert()`, debe usar el toast/modal del sistema.
- **Fix:** El comando `cerrar_jornada` en Rust está usando `window.alert()` o similar. Reemplazar por respuesta JSON limpia y que el frontend muestre el resultado en su propio modal.

## 6. Error al eliminar consumo: `consumoIdx` missing
- **Archivo:** lib.rs (eliminar_consumo) / CuentasView.ts
- **Problema:** Al intentar eliminar un consumo de una cuenta abierta, sale error: `invalid args 'consumoIdx' for command 'eliminar_consumo' : command eliminar_consumo missing required key consumoIdx`. El frontend envía `consumoId` (string ID) pero el backend espera `consumoIdx` (índice numérico).
- **Fix:** Unificar el parámetro. El frontend en CuentasView.ts envía `{ ventaId, consumoId }` pero el backend en lib.rs espera `{ ventaId, consumo_idx }`. Cambiar el backend para recibir `consumo_id: String` en vez de `consumo_idx: usize`.

## 7. P2P no funciona — no pide clave, timeout
- **Archivo:** main.ts (abrirModalQrMovil, conectarSignaling) + lib.rs (generar_qr_panel)
- **Problemas:**
  - El QR genera una URL `http://IP:4000/panel?room=...` que apunta al desktop. El móvil no puede acceder si no están en la misma LAN.
  - No se pide la clave del dueño al conectar vía P2P.
  - Timeout después de ~90 segundos sin conexión.
  - No es verdadero P2P (WebRTC), es dependiente del servidor HTTP en el desktop.
- **Fix Necesita arquitectura completa:**
  - Crear Cloudflare Worker en `*.workers.dev` como signaling server (gratis, sin dominio propio, stateless).
  - Worker solo retransmite SDP offers/answers/ICE candidates entre peers via WebSocket.
  - STUN/TURN de Cloudflare ya están configurados en `STUN_SERVERS` (main.ts) — solo hay que asegurar que funcione con el signaling externo.
  - Desktop y mobile se conectan al Worker, intercambian SDP → WebRTC P2P se establece → comunicación directa.
  - Autenticación con PIN del dueño en el handshake.

## 8. Respaldos no se generan
- **Archivo:** main.ts (ejecutarBackupAutomatico) + api.ts
- **Problema:** La función `auto_backup` se llama al arrancar pero no genera archivos. En modo demo, el mock retorna `null`. En modo Tauri, necesita verificarse que `get_backup_dir` y `auto_backup` funcionan correctamente.
- **Fix:** Verificar que el directorio de respaldos se crea y que `auto_backup` escribe el archivo .datio. Agregar logging o feedback al usuario.

## 9. Reposición de stock: solo permite unidades, no cajas
- **Archivo:** InventarioView.ts
- **Problema:** Cuando un producto es "viene en caja" (esCaja=true), la reposición de stock solo muestra campo de unidades sueltas. Debería permitir reposición por cajas (multiplicando por unidadesPorCaja) o por unidades sueltas.
- **Fix:** Agregar selector de tipo reposición (caja/unidad) en el modal de reposición. Si es por caja, stock += cajas × unidadesPorCaja.

## 10. Panel del Dueño: escalado de fechas rompe los datos
- **Archivo:** PanelDuenoView.ts
- **Problema:** Al hacer clic en "7D", "30D" o "1A", los números se multiplican por el factor (x7, x30, x365). Los datos de ventas totales, ganancia, etc. se inflan artificialmente.
- **Fix:** Los filtros de fecha deben filtrar los tickets por rango temporal, NO multiplicar los totales. La lógica debe ser: `tickets.filter(t => t.fechaUnix >= desde && t.fechaUnix <= hasta)` y luego sumar.

## 11. Exportar PDF falla — ventana emergente de error
- **Archivo:** PanelDuenoView.ts (exportarPdf)
- **Problema:** Al clickear "EXPORTAR RESUMEN (PDF)" sale error: "Por favor autoriza las ventanas emergentes para generar el documento PDF". El popup blocker del navegador/Tauri bloquea la ventana.
- **Fix:** En vez de `window.open()`, generar el PDF inline descargando un blob, o usar librería como jsPDF que no requiera popup.

## 12. Rangos de fecha son placeholders
- **Archivo:** PanelDuenoView.ts
- **Problema:** Los campos "DESDE" y "HASTA" muestran `dd/mm/aaaa` como placeholder pero no están conectados a la lógica de filtrado real.
- **Fix:** Conectar los date pickers al filtrado de tickets por rango.

## 13. Click secundario (context menu) habilitado
- **Archivo:** main.ts / styles.css
- **Problema:** Se puede hacer clic derecho en la app y sale el menú contextual del navegador/Tauri.
- **Fix:** Agregar `oncontextmenu="return false"` al body, o CSS `user-select: none` + JS handler.

## 14. Indicadores de Rendimiento: placeholders hardcodeados
- **Archivo:** PanelDuenoView.ts (líneas ~472-478)
- **Problema:**
  - "Margen Comercial Global: 35.0% bruto" — hardcodeado, no calculado
  - "Demanda Principal: 82.4% ingresos" — hardcodeado, no calculado
- **Fix:** Calcular margen real = `(ventas - costo) / ventas × 100`. Demanda principal = producto con mayor % de ingresos sobre total.

## 15. Undefined en header de jornada
- **Archivo:** PanelDuenoView.ts
- **Problema:** A la derecha del header de la jornada sale "undefined" antes del nombre del operador.
- **Fix:** Verificar que `jornada.operadorActual` o el campo que se renderiza no sea undefined.
