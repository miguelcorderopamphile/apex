# Instrucciones de Despliegue, Pipeline y Estado de Conectividad

## 1. Procedimiento de Despliegue y Compilación en GitHub Actions
Para compilar el instalador nativo de Windows (`DatioLabs.Retail_0.1.0_x64-setup.exe`) y publicar el Release oficial:

1. **Flujo de Trabajo Configurado**:
   - Archivo de workflow: `.github/workflows/build-windows.yml`.
   - Se ejecuta sobre `windows-latest`.
   - Compila el instalador con: `cargo tauri build --target x86_64-pc-windows-msvc`.
   - El instalador se genera en: `target/x86_64-pc-windows-msvc/release/bundle/nsis/*.exe`.

2. **Pasos para Disparar la Compilación y Crear el Release**:
   - Asegurar que los cambios locales estén confirmados:
     ```bash
     git add -A
     git commit -m "feat: correccion de inicializacion de catalogo, tasa bcv y url movil"
     git push origin main
     ```
   - Si se requiere generar un **Release con instalador descargable en GitHub**:
     - El workflow se activa automáticamente al crear y pushear un tag que comience por `v`:
       ```bash
       git tag -a v0.1.1 -m "Release v0.1.1 con instalador corregido"
       git push origin v0.1.1
       ```
     - O disparar manualmente el workflow desde la pestaña **Actions** en GitHub mediante `workflow_dispatch`.

3. **Verificación de la Descarga en `/descargas`**:
   - Las páginas de descargas (`ui/descargas.html` y `ui/public/descargas/index.html`) enlazan directamente a:
     `https://github.com/miguelcorderopamphile/apex/releases/download/<TAG>/DatioLabs.Retail_0.1.0_x64-setup.exe`
   - Si el tag publicado cambia (por ejemplo a `v0.1.1`), actualizar el atributo `href` en ambos archivos HTML para apuntar al tag correspondiente antes del despliegue en Cloudflare Pages (`npm run build` en `ui/`).

---

## 2. Diagnóstico y Estado Real de la Conexión Móvil

### Aclaración de Arquitectura vs Implementación Actual:
- **Diseño Planificado**: En la documentación y requerimientos (Sección 20 de especificaciones) se contempló un esquema de enlace P2P soberano con WebRTC DataChannel, STUN público (`stun.cloudflare.com:3478` / `stun.l.google.com:19302`) y mDNS para funcionar fuera de la LAN sin abrir puertos y tolerar saltos de IP.
- **Implementación Física Existente**:
  - Actualmente, el comando `generar_qr_panel` en `datiolabs-ui/src/lib.rs` sólo genera una URL HTTP fija (`http://<LAN_IP>:4000/panel`).
  - No existe aún la capa de señalización WebRTC, STUN/TURN, ICE restart ni túnel de transporte P2P en el código compilado de Rust.
  - Por esta razón, la conexión **únicamente funciona dentro de la misma red local (WiFi/LAN)** y se rompe al cambiar de IP o salir a redes 4G/5G externas.

### Requerimiento para el Siguiente Agente:
- Si se va a mantener temporalmente HTTP LAN: Unificar el puerto 4000 en el modal de `ui/src/main.ts` y en `lib.rs` para que al menos funcione de forma limpia y confiable dentro de la red local.
- Si se va a materializar la conexión fuera de LAN persistente a desconexiones: Se debe implementar la capa WebRTC DataChannel con servidor STUN público y señalización ligera, o un túnel seguro que no dependa de la IP fija del host en el código QR.
