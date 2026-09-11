/**
 * DatioLabs Enterprise - Sistema de Notificaciones y Cuadros de Diálogo Brutalistas.
 * Sustituye completamente las llamadas nativas a alert(), confirm() y prompt().
 */

export function mostrarToast(mensaje: string, tipo: 'success' | 'error' | 'info' = 'info'): void {
    const colores = {
        success: 'bg-emerald-600 text-white',
        error: 'bg-red-600 text-white',
        info: 'bg-brand-black text-white',
    };
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 ${colores[tipo]} border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110] transition-all duration-300`;
    toast.innerHTML = `<span class="text-xs sm:text-sm">${mensaje.replace(/"/g, '')}</span> <button class="ml-3 underline font-black text-xs uppercase">Cerrar</button>`;
    toast.querySelector('button')?.addEventListener('click', () => toast.remove());
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 6000);
}

export function confirmarAccion(mensaje: string, titulo: string = 'CONFIRMACIÓN REQUERIDA'): Promise<boolean> {
    return new Promise((resolve) => {
        const backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]';
        
        backdrop.innerHTML = `
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${titulo}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-5">${mensaje}</p>
                <div class="flex justify-end gap-2 pt-2 border-t border-gray-200">
                    <button data-dialog-cancel class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs hover:bg-gray-100">
                        CANCELAR
                    </button>
                    <button data-dialog-confirm class="bg-brand-black text-white hover:bg-gray-800 border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs shadow-brutal-sm">
                        CONFIRMAR
                    </button>
                </div>
            </div>
        `;

        const cerrar = (res: boolean) => {
            backdrop.remove();
            resolve(res);
        };

        backdrop.querySelectorAll('[data-dialog-cancel]').forEach((b) =>
            b.addEventListener('click', () => cerrar(false))
        );
        backdrop.querySelector('[data-dialog-confirm]')?.addEventListener('click', () => cerrar(true));
        document.body.appendChild(backdrop);
    });
}

export function pedirValor(mensaje: string, valorDefecto: string = '', titulo: string = 'SOLICITUD DE DATO'): Promise<string | null> {
    return new Promise((resolve) => {
        const backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[120]';
        
        backdrop.innerHTML = `
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal max-w-md w-full p-5 sm:p-6">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-2 mb-3">
                    <h3 class="font-heading font-black text-base sm:text-lg text-brand-black uppercase">${titulo}</h3>
                    <button data-dialog-cancel class="text-brand-black font-black text-lg hover:text-red-600">&times;</button>
                </div>
                <p class="text-xs sm:text-sm font-bold text-gray-700 leading-relaxed mb-3">${mensaje}</p>
                <input id="dialog-input-val" type="text" value="${valorDefecto}" class="w-full border-2 border-brand-black rounded px-3 py-2 text-sm font-bold mb-4 focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                <div class="flex justify-end gap-2 pt-2 border-t border-gray-200">
                    <button data-dialog-cancel class="bg-white border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs hover:bg-gray-100">
                        CANCELAR
                    </button>
                    <button data-dialog-accept class="bg-brand-black text-white hover:bg-gray-800 border-2 border-brand-black font-heading font-black px-4 py-2 rounded text-xs shadow-brutal-sm">
                        ACEPTAR
                    </button>
                </div>
            </div>
        `;

        const input = backdrop.querySelector<HTMLInputElement>('#dialog-input-val');
        const cerrar = (val: string | null) => {
            backdrop.remove();
            resolve(val);
        };

        backdrop.querySelectorAll('[data-dialog-cancel]').forEach((b) =>
            b.addEventListener('click', () => cerrar(null))
        );
        backdrop.querySelector('[data-dialog-accept]')?.addEventListener('click', () => {
            cerrar(input?.value ?? '');
        });
        input?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') cerrar(input.value);
            if (e.key === 'Escape') cerrar(null);
        });

        document.body.appendChild(backdrop);
        input?.focus();
        input?.select();
    });
}
