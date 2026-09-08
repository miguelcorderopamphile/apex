# Tareas Pendientes Inmediatas - DatioLabs Enterprise

## 1. Validación y Entrada de Licencia en Instalador / Asistente
- [ ] No mostrar ni exponer las claves de licencia en texto plano en el asistente ni hardcodear por defecto la de Licorería.
- [ ] Permitir el ingreso limpio de la clave de activación comercial durante la instalación o el primer arranque.
- [ ] Validar deterministamente que la clave ingresada corresponda al rubro comercial seleccionado.

## 2. Inserción de Catálogo Semilla según Rubro Seleccionado
- [ ] Al seleccionar el tipo de negocio (Abasto, Panadería, Licorería o Retail) en la inicialización, poblar automáticamente los productos iniciales correspondientes en la base de datos persistente Sled.
- [ ] Garantizar que al ingresar inmediatamente a Caja e Inventario se visualicen los productos y el estado inicial del negocio sin pantallas vacías.

## 3. Actualización y Visualización de la Tasa BCV
- [ ] Asegurar que el servicio de tasa en Rust sondee y obtenga la tasa oficial del BCV al iniciar la aplicación.
- [ ] Refrescar de forma reactiva el widget de tasa en la interfaz de usuario en tiempo de ejecución.

## 4. Conectividad Móvil P2P y Alineación de Puerto
- [ ] Corregir la URL y el código QR de conexión móvil para que use la IP LAN real detectada por el sistema y el puerto de escucha configurado (4000).
- [ ] Validar que la conexión y emparejamiento desde el dispositivo móvil enlace correctamente con el servidor Axum local.
