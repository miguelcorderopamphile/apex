export class GuiaView {
    private contenedor: HTMLElement;

    constructor(contenedor: HTMLElement) {
        this.contenedor = contenedor;
    }

    render(): void {
        this.contenedor.innerHTML = `
        <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
                <h2 class="text-2xl sm:text-3xl font-black font-heading">Manual de Procedimientos y Operación Comercial</h2>
                <p class="text-brand-text font-body text-xs sm:text-sm">Directrices de uso operativo, arqueo y lectura analítica de DatioLabs</p>
            </div>
            <span class="bg-brand-black text-white px-3 py-1.5 rounded font-black font-heading text-xs uppercase tracking-wider">
                DOCUMENTACIÓN OFICIAL
            </span>
        </div>

        <!-- Tarjetas Resumen de los 5 Modulos -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-6">
            <div class="border-2 border-brand-black rounded-lg bg-amber-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-amber-900 uppercase">MODULO 01</span>
                <h4 class="font-heading font-black text-base mt-0.5">CAJA</h4>
                <p class="text-xs text-gray-700 mt-1">Precio dual USD/Bs., semáforo dinámico, pesable, empaques, multi-operador, historial del turno, reactividad Enter y cobro multimoneda con vuelto exacto.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-yellow-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-yellow-900 uppercase">MODULO 02</span>
                <h4 class="font-heading font-black text-base mt-0.5">CUENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Cuentas activas en mesa, conversión directa a deuda comercial, adición/decremento fluido de consumos con retorno de existencias y abonos a tasa pactada.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-blue-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-blue-900 uppercase">MODULO 03</span>
                <h4 class="font-heading font-black text-base mt-0.5">VENTAS</h4>
                <p class="text-xs text-gray-700 mt-1">Historial de jornadas con KPIs, desglose por método de pago, marcas cronológicas VET UTC-4 y exportación CSV exhaustiva.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-emerald-50 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-emerald-900 uppercase">MODULO 04</span>
                <h4 class="font-heading font-black text-base mt-0.5">INVENTARIO</h4>
                <p class="text-xs text-gray-700 mt-1">Catálogo por categorías, calculadora de margen, descuento atómico por empaque/caja, semáforo configurable y modo privacidad.</p>
            </div>
            <div class="border-2 border-brand-black rounded-lg bg-slate-100 p-3.5 shadow-brutal-sm">
                <span class="font-mono text-[10px] font-black text-gray-800 uppercase">MODULO 05</span>
                <h4 class="font-heading font-black text-base mt-0.5">PANEL</h4>
                <p class="text-xs text-gray-700 mt-1">Diagnóstico financiero por fechas VET, gráfico SVG determinista, semáforo de stock, respaldos criptográficos SHA-256 y control Dueño(a).</p>
            </div>
        </div>

        <div class="space-y-6">

            <!-- ============ MODULO 1: CAJA ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">1</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CAJA: Precio Dual, Historial del Turno y Cobro Reactivo</h3>
                        <p class="text-xs text-gray-500 font-bold">Facturacion directa con precision decimal bancaria en USD y Bs., control de stock visual y auditoria en tiempo real</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Precio Dual USD / Bs.</strong>
                        Cada producto muestra simultaneamente su precio en dolares y en bolivares con tasa BCV. El ticket calcula totales con el modulo determinista de punto fijo Money.ts.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Semaforo Dinamico de Stock</strong>
                        Indicador visual de salud del inventario: ROJO (stock critico), AMARILLO (stock bajo), VERDE (suficiente). Los umbrales se sincronizan en tiempo real con la configuracion del negocio.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Soporte Pesable (kg / ml)</strong>
                        Productos vendidos por peso o volumen muestran input decimal en vez de botones +/-. Paso automatico fraccionario con proteccion contra desbordes.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Empaque y Descuento Atomico</strong>
                        Productos configurados en empaque (six-pack, bultos, cajas) descuentan exactamente la cantidad de unidades fisicas base correspondientes (K unidades x paquete) tanto en el carrito como en el libro mayor.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial del Turno Activo</strong>
                        Boton "HISTORIAL" en cabecera: despliega modal brutalista con tickets y recaudacion acumulada exclusiva del turno activo desglosada por operador y metodo sin interrumpir la sesion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-orange-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Multi-Operador y Relevo</strong>
                        Multiples cajeros pueden operar en el mismo turno. El selector en la cabecera del ticket muestra el operador activo y permite registrar check-in y check-out de personal.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Reactividad Total y Tecla Enter</strong>
                        El calculo de faltante y vuelto se recalcula en tiempo real al tipear (evento input) en montos y tasas. Presionar Enter en cualquier campo confirma la venta si el total esta cubierto.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimoneda con Vuelto</strong>
                        Pagos mixtos en bolivares y divisas con tasas pactadas individuales. El excedente puede entregarse como vuelto fisico o retenerse como saldo a favor en cuenta.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Borrador Persistente</strong>
                        Si se cierra el modal de cobro sin confirmar, los importes, metodos y resolucion de vuelto quedan retenidos en memoria y se restauran al volver a abrir.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 2: CUENTAS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">2</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo CUENTAS: Comandas en Local, Deudas y Conversion</h3>
                        <p class="text-xs text-gray-500 font-bold">Comandas para mesas, cartera de credito comercial, conversion directa a deuda y ajuste fluido de consumos</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Dos Modalidades: Local vs. Deuda</strong>
                        Cuentas Activas (mesas o barras, liquidadas en la sesion) y Deudas Comerciales (credito a clientes de confianza que permanecen abiertas descontando existencias al instante).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Boton Conversion a Deuda</strong>
                        Boton "CONVERTIR A DEUDA": permite transferir una cuenta activa de mesa directamente al balance de deudas por cobrar asignando titular y plazo sin obligar a liquidar en caja.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Ajuste Fluido de Consumos</strong>
                        Controles interactivos [+] y [-] por cada linea de consumo. Permite incrementar o decrementar cantidades con devolucion o descuento automatico de stock fisico.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Liquidacion a Tasa Libre y Enter</strong>
                        El comerciante fija la tasa libremente o carga la oficial con un clic. La liquidacion reacciona a cada pulsacion y confirma la transaccion al presionar Enter.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Abonos Parciales y Saldo a Favor</strong>
                        Abonos en multiples monedas con tasa individual. Si el abono sobrepasa la deuda, se genera automaticamente comprobante con saldo a favor retenido.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial del Turno en Cuentas</strong>
                        Acceso directo al boton "HISTORIAL DEL TURNO" en la barra superior para auditar tickets cobrados y verificar balances de caja sin cambiar de modulo.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 3: VENTAS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">3</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo VENTAS: Historial de Jornadas con KPIs</h3>
                        <p class="text-xs text-gray-500 font-bold">Balance por turno, desglose por metodo de pago, badges de canal y exportacion CSV</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">KPIs en Cabecera</strong>
                        4 tarjetas: Facturado Total (USD), Estado Actual (Abierta/Sin turno con pulse verde), Tasa BCV del dia (morado), Tickets Totales (azul).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Buscador y Paginacion</strong>
                        Filtra por ID de jornada, nombre de operador o fecha. Paginacion a 20 registros por pagina. El estado de expansion se preserva al filtrar.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Detalle Expandible por Jornada</strong>
                        Al expandir: duracion, vueltos pagados y retenidos, deudas liquidadas, entradas de stock, mermas, tasa de apertura y cierre, SHA-256 de verificacion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Desglose por Metodo de Pago</strong>
                        Dentro de cada jornada: tabla con nombre del metodo, total en USD y total en Bs. para cada metodo utilizado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-orange-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Badges de Canal Comercial</strong>
                        Cada ticket muestra badge de color: VENTA DIRECTA (verde), CUENTA/DEUDA (azul), MIXTO (morado). Permite distinguir origen de cada transaccion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Exportacion CSV y Ticket PDF</strong>
                        Cada jornada tiene boton CSV con encabezado completo (operadores, totales, vueltos, SHA-256) y tabla de tickets. Modal de detalle de ticket con comprobante completo.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 4: INVENTARIO ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">4</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Modulo INVENTARIO: Catalogo, Margenes, Empaque y Movimientos</h3>
                        <p class="text-xs text-gray-500 font-bold">Alta de productos con calculadora de margen, sistema de empaque/paquete, PIN protegido</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Calculadora de Margen Bidireccional</strong>
                        Ingrese precio bruto (costo) y margen % para calcular precio neto, O ingrese precio neto para calcular margen inverso. Soporta tasa de impuesto configurable.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Empaque / Caja con Unidades</strong>
                        Configuracion de productos en empaque: unidades por caja, stock en cajas (se convierte automaticamente a unidades base). Stock se despieza en "X cajas + Y un.".
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Precio por Paquete</strong>
                        Productos pueden tener precio adicional por paquete/boveda/cambio. Nombre del empaque configurable. Se muestra boton morado en Caja y Cuentas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Unidades de Medida</strong>
                        Soporte para Unidad/Pieza (un.), Peso (Kilogramos - kg) y Volumen (Mililitros - ml) con pasos de input diferentes.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">PIN Protegido y Modo Privacidad</strong>
                        Operadores requieren PIN para eliminar productos, entradas, reducciones y mermas. Dueño(a) puede ocultar precios y stock a los operadores desde la configuración.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Movimientos de Stock</strong>
                        + ENTRADA (reposicion), - REDUCIR (ajuste fisico) y - MERMA (deterioro). Cada movimiento se registra en la auditoria. Boton de eliminacion por producto con confirmacion.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Gestion de Categorias e Impuestos</strong>
                        Pestana dedicada para CRUD de categorias (con conteo de productos) y tasas de impuestos (0% y 16% predefinidas,加上 personalizadas).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Catalogo Lateral Paginado</strong>
                        Columna derecha con filtro por categoria, busqueda y lista paginada (40 por pagina) con nombre, categoria, precio, IVA% y badge de stock.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Venta Sin Stock</strong>
                        Checkbox "Venta Sin Stock" para servicios o detal libre: productos que no descuentan inventario al vender.
                    </div>
                </div>
            </div>

            <!-- ============ MODULO 5: PANEL DE CONTROL DUEÑO(A) ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <span class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">5</span>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Módulo PANEL: Diagnóstico Financiero y Control Dueño(a)</h3>
                        <p class="text-xs text-gray-500 font-bold">KPIs por rango de fechas, gráfico SVG, semáforo, respaldos y administración con clave</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-amber-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">KPIs y Rango de Fechas</strong>
                        4 indicadores: Ventas Totales (USD+Bs.), Ganancia Bruta (con % margen), Ganancia Neta (Bs.) e Inventario Total. Selector de rango (24H, 7D, 30D, 1A, TODO) y rango personalizado con fechas exactas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-emerald-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Grafico SVG de Rendimiento</strong>
                        Grafico de pie puro SVG (sin librerias externas). Criterio toggleable: POR VOLUMEN o POR INGRESOS. Colores dinamicos, tooltips, leyenda con tabla de productos.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-blue-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Capital por Categoria</strong>
                        Tabla desglosada: categoria, n productos, stock fisico, dinero en bruto (USD y Bs.), valor PVP, margen proyectado, % capital con barra de progreso y total consolidado.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-red-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Semaforo de Salud del Stock</strong>
                        Configuracion de umbrales de stock: ROJO (critico) y AMARILLO (bajo). Validacion de coherencia. Boton de restablecer a valores predeterminados.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-purple-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Historial de Transacciones</strong>
                        Tabla cronologica con ID, fecha, canal (badge: Cuenta Abierta / Caja Directa), operador, tasa BCV, total USD y Bs. Paginacion a 20 por pagina.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-100">
                        <strong class="text-brand-black block font-heading font-black mb-1">Respaldos Criptograficos</strong>
                        Copias de seguridad con SHA-256 verificable. Lista de respaldos con nombre de archivo, hash truncado, fecha, registros y tamano. Boton de crear respaldo con verificacion inmediata.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Jornada y Multi-Operador</strong>
                        Apertura y cierre de jornada desde el Panel con confirmacion. Gestion completa de operadores: alta, edicion de nombre, baja. Asignacion de operadores al turno activo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Metodos de Pago</strong>
                        CRUD de metodos de pago: nombre y moneda (USD o Bs.). Chips con badge de moneda. Eliminacion con garantia de al menos un metodo activo.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-slate-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Seguridad y PIN</strong>
                        Cambio o eliminacion de clave del Panel. Campo "vacio = sin clave". Indicador de estado "Protegido" con descripcion de seguridad.
                    </div>
                </div>
            </div>

            <!-- ============ PROCEDIMIENTOS OPERATIVOS ============ -->
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6">
                <div class="flex items-center gap-3 border-b-2 border-brand-black pb-3 mb-4">
                    <div class="w-8 h-8 rounded-full bg-brand-black text-white font-black font-heading flex items-center justify-center text-sm">O</div>
                    <div>
                        <h3 class="font-heading font-black text-lg sm:text-xl">Procedimientos Operativos: Jornadas, Cobro y Stock</h3>
                        <p class="text-xs text-gray-500 font-bold">Instrucciones para apertura de turno, gestion de cajeros, cobro multimethod y control de inventario</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-body leading-relaxed text-gray-700">
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Apertura Directa sin Clave</strong>
                        Si no hay turno activo, el botón de operador en Caja muestra "SIN TURNO ACTIVO". El operador selecciona los cajeros del día y abre el turno sin requerir clave de Dueño(a).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Relevo y Asignación en Vivo</strong>
                        Desde Caja o Panel se pueden agregar, editar y relevar cajeros simultáneos. Los cambios se propagan inmediatamente al turno activo sin interrumpir ventas.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cierre desde Panel</strong>
                        Solo Dueño(a) puede cerrar la jornada desde el Panel. El cierre consolida totales, genera SHA-256 de verificación y bloquea ediciones posteriores.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Paginacion y Rendimiento</strong>
                        Todos los modulos historicos (Jornadas, Transacciones, Catalogo, Reposicion, Cuentas) operan bajo paginacion estricta con sanitizacion en tiempo real.
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Cobro Multimethod y Vuelto</strong>
                        El sistema prioriza bolivares arriba y divisas abajo. Vuelto se resuelve como PAGADO (entregado) o RETENIDO (saldo a favor del cliente).
                    </div>
                    <div class="border border-brand-black rounded p-3 bg-gray-50">
                        <strong class="text-brand-black block font-heading font-black mb-1">Notificaciones Toast</strong>
                        Alertas no intrusivas en la esquina inferior derecha: verde (exito), rojo (error), negro (info). Se auto-cierran a los 8 segundos.
                    </div>
                </div>
            </div>
        </div>`;
    }
}
