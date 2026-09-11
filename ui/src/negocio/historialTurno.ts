import { api, parseNum } from './api';
import { formatFechaHoraVet } from './dateUtils';

const fmt = (n: number | string | undefined | null): string =>
    parseNum(n).toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export async function abrirModalHistorialTurno(modalHost: HTMLElement): Promise<void> {
    const [jornada, tickets] = await Promise.all([
        api.obtenerJornadaActual(),
        api.ventas(),
    ]);

    if (!jornada) {
        modalHost.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-md text-center">
                <h3 class="font-heading font-black text-xl mb-2 text-red-700">SIN JORNADA ACTIVA</h3>
                <p class="text-xs font-body text-gray-600 mb-4">No existe un turno abierto actualmente en la estación. Abre un turno para iniciar el registro cronológico de ventas.</p>
                <button id="btn-cerrar-historial-turno" class="w-full bg-brand-black text-white font-heading font-black py-2.5 rounded border-2 border-brand-black text-xs">ENTENDIDO</button>
            </div>
        </div>`;
        modalHost.querySelector('#btn-cerrar-historial-turno')?.addEventListener('click', () => {
            modalHost.innerHTML = '';
        });
        return;
    }

    const inicioUnix = jornada.inicioUnix;
    // Filtrar tickets emitidos durante la jornada activa
    const ticketsTurno = tickets.filter(t => {
        const fUnix = t.fechaUnix || 0;
        return fUnix >= inicioUnix;
    });

    let totalRecaudadoUsd = 0;
    let totalRecaudadoBs = 0;
    let recaudadoPorMetodo: Record<string, { usd: number; bs: number }> = {};
    let recaudadoPorOperador: Record<string, { usd: number; bs: number; tickets: number }> = {};

    ticketsTurno.forEach(t => {
        const u = parseNum(t.totalUsd);
        const b = parseNum(t.totalBs);
        totalRecaudadoUsd += u;
        totalRecaudadoBs += b;

        const op = t.operador || jornada.operadorActual || 'Cajero';
        if (!recaudadoPorOperador[op]) {
            recaudadoPorOperador[op] = { usd: 0, bs: 0, tickets: 0 };
        }
        recaudadoPorOperador[op].usd += u;
        recaudadoPorOperador[op].bs += b;
        recaudadoPorOperador[op].tickets += 1;

        if (Array.isArray(t.pagos) && t.pagos.length > 0) {
            t.pagos.forEach(p => {
                const met = p.metodo || 'EFECTIVO';
                if (!recaudadoPorMetodo[met]) {
                    recaudadoPorMetodo[met] = { usd: 0, bs: 0 };
                }
                recaudadoPorMetodo[met].usd += parseNum(p.montoUsd);
                recaudadoPorMetodo[met].bs += parseNum(p.montoBs);
            });
        }
    });

    const operadoresActivos = (jornada.operadoresActivos && jornada.operadoresActivos.length > 0)
        ? jornada.operadoresActivos.join(', ')
        : (jornada.operadorActual || 'Sin asignar');

    modalHost.innerHTML = `
    <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
        <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-5 sm:p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col">
            <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-3">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-brand-purple">Auditoría Operativa de Caja</span>
                    <h3 class="font-heading font-black text-2xl">HISTORIAL DEL TURNO ACTIVO</h3>
                    <p class="text-xs text-gray-500 font-bold">
                        Apertura: ${formatFechaHoraVet(jornada.inicioUnix)} · Operador(es): <strong>${operadoresActivos}</strong>
                    </p>
                </div>
                <button id="btn-cerrar-historial-turno" class="w-8 h-8 rounded border-2 border-brand-black font-black flex items-center justify-center hover:bg-gray-100">&times;</button>
            </div>

            <!-- Resumen Métricas del Turno -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Total Recaudado en Turno</span>
                    <p class="font-heading font-black text-xl text-brand-black mt-0.5">$ ${fmt(totalRecaudadoUsd)} USD</p>
                    <p class="text-xs font-black text-brand-purple">Bs. ${fmt(totalRecaudadoBs)}</p>
                </div>
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Comprobantes Emitidos</span>
                    <p class="font-heading font-black text-xl text-brand-black mt-0.5">${ticketsTurno.length} tickets</p>
                    <p class="text-xs font-bold text-gray-500">Tasa de inicio: Bs. ${fmt(jornada.tasaInicio)}</p>
                </div>
                <div class="bg-gray-50 border-2 border-brand-black rounded p-3">
                    <span class="text-[10px] font-black uppercase text-gray-500 block">Vueltos Otorgados / Retenidos</span>
                    <p class="font-heading font-black text-base text-gray-800 mt-0.5">Pagado: Bs. ${fmt(jornada.vueltoPagadoBs)}</p>
                    <p class="text-xs font-bold text-emerald-800">Retenido: Bs. ${fmt(jornada.vueltoRetenidoBs)}</p>
                </div>
            </div>

            <!-- Desglose por Operador y Métodos -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div class="border-2 border-brand-black rounded p-3 bg-white">
                    <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-2">Desglose por Cajero / Despachador</span>
                    <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${Object.keys(recaudadoPorOperador).length === 0
                            ? `<p class="text-xs text-gray-400 italic">Sin transacciones registradas por operadores.</p>`
                            : Object.entries(recaudadoPorOperador).map(([op, val]) => `
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${op} (${val.tickets} t.)</span>
                                    <span class="font-mono font-black text-brand-black">$${fmt(val.usd)} · Bs. ${fmt(val.bs)}</span>
                                </div>
                            `).join('')}
                    </div>
                </div>
                <div class="border-2 border-brand-black rounded p-3 bg-white">
                    <span class="text-[10px] font-heading font-black uppercase text-gray-600 block mb-2">Desglose por Método de Pago</span>
                    <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                        ${Object.keys(recaudadoPorMetodo).length === 0
                            ? `<p class="text-xs text-gray-400 italic">Sin pagos asentados.</p>`
                            : Object.entries(recaudadoPorMetodo).map(([met, val]) => `
                                <div class="flex justify-between items-center text-xs border-b border-gray-100 pb-1">
                                    <span class="font-bold text-gray-800">${met}</span>
                                    <span class="font-mono font-black text-brand-black">${val.usd > 0 ? `$${fmt(val.usd)} ` : ''}Bs. ${fmt(val.bs)}</span>
                                </div>
                            `).join('')}
                    </div>
                </div>
            </div>

            <!-- Lista Cronológica de Tickets -->
            <div class="border-2 border-brand-black rounded-lg p-3 bg-gray-50 flex-1 flex flex-col min-h-[160px]">
                <div class="flex justify-between items-center border-b-2 border-gray-200 pb-1.5 mb-2">
                    <span class="text-xs font-heading font-black uppercase text-gray-700">Tickets del Turno (${ticketsTurno.length})</span>
                    <span class="text-[10px] font-bold text-gray-500">Hora VET · Canal · Total</span>
                </div>
                <div class="space-y-1.5 overflow-y-auto max-h-56 pr-1">
                    ${ticketsTurno.length === 0
                        ? `<p class="py-6 text-center text-xs text-gray-400 font-bold">No se han emitido tickets durante el turno actual.</p>`
                        : ticketsTurno.map(t => `
                            <div class="flex items-center justify-between border border-brand-black bg-white rounded p-2 text-xs font-bold hover:bg-amber-50/50">
                                <div>
                                    <p class="font-mono text-brand-black">${t.ventaId.slice(0, 10)} · <span class="text-[10px] text-gray-500">${formatFechaHoraVet(t.fechaUnix)}</span></p>
                                    <p class="text-[10px] text-brand-purple font-black uppercase">${t.canal || 'VENTA DIRECTA'} ${t.operador ? `· Cajero: ${t.operador}` : ''}</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-heading font-black text-sm text-brand-black">$${fmt(t.totalUsd)}</p>
                                    <p class="text-[10px] font-bold text-gray-500">Bs. ${fmt(t.totalBs)}</p>
                                </div>
                            </div>
                        `).join('')}
                </div>
            </div>

            <div class="pt-4 mt-2 border-t-2 border-brand-black text-right">
                <button id="btn-cerrar-historial-turno-footer" class="bg-brand-black text-white font-heading font-black px-6 py-2.5 rounded border-2 border-brand-black text-xs hover:bg-gray-800">
                    CERRAR
                </button>
            </div>
        </div>
    </div>`;

    const cerrar = () => { modalHost.innerHTML = ''; };
    modalHost.querySelector('#btn-cerrar-historial-turno')?.addEventListener('click', cerrar);
    modalHost.querySelector('#btn-cerrar-historial-turno-footer')?.addEventListener('click', cerrar);
}
