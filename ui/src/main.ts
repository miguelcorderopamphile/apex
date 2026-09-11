import './styles.css';
import { BcvWidget } from './tasa/BcvWidget';
import { api, ConfigInfo, RUBRO_ABASTO, RUBRO_LICORERIA, RUBRO_PANADERIA } from './negocio/api';
import { NegocioModel } from './negocio/NegocioModel';
import { WizardView } from './negocio/WizardView';

import { CajaViewModel } from './negocio/CajaViewModel';
import { CajaView } from './negocio/CajaView';
import { PanelDuenoView, PanelViewModel } from './negocio/PanelDuenoView';
import { CuentasView } from './negocio/CuentasView';
import { InventarioView } from './negocio/InventarioView';
import { VentasView } from './negocio/VentasView';
import { GuiaView } from './negocio/GuiaView';

export { RUBRO_ABASTO, RUBRO_PANADERIA, RUBRO_LICORERIA };

const INTERVALO_TASA_MS = 300_000;

class AppController {
    private modelo = new NegocioModel();
    private cajaVm: CajaViewModel | null = null;
    private panelVm = new PanelViewModel();
    private widget = new BcvWidget();
    private root!: HTMLElement;
    private modalRoot!: HTMLElement;

    async arrancar(): Promise<void> {
        const root = document.getElementById('app-root');
        if (!root) return;
        this.root = root;
        this.modalRoot = this.crearModalRoot();
        this.widget.iniciar();

        window.addEventListener('tasa_actualizada', (e: Event) => {
            const custom = e as CustomEvent<number>;
            if (custom.detail) this.modelo.setTasa(custom.detail);
        });

        await this.refrescarTasa();

        let cfg: ConfigInfo | null = null;
        try {
            cfg = await this.modelo.cargarConfig();
        } catch (_) {
            cfg = await this.modelo.cargarConfig();
        }
        window.setInterval(() => void this.refrescarTasa(), INTERVALO_TASA_MS);

        if (!cfg) {
            new WizardView(this.root, this.modelo, () => void this.arrancar()).render();
            return;
        }
        this.pintarBotonesRol(cfg);

        // Auto-backup on startup (non-blocking)
        this.ejecutarBackupAutomatico();

        await this.arrancarCaja();
    }

    private crearModalRoot(): HTMLElement {
        let el = document.getElementById('modal-root');
        if (!el) {
            el = document.createElement('div');
            el.id = 'modal-root';
            document.body.appendChild(el);
        }
        return el;
    }

    private async refrescarTasa(): Promise<void> {
        try {
            const tasa = await api.tasa();
            if (tasa) this.modelo.setTasa(Number(tasa.valor));
        } catch (_) {
            /* la caja conserva la ultima tasa conocida */
        }
    }

    private async ejecutarBackupAutomatico(): Promise<void> {
        try {
            const dir = await api.getBackupDir();
            if (dir) {
                const result = await api.autoBackup(dir, 5);
                if (result) {
                    console.log(`[Backup] Auto-backup generado: ${result.totalRegistros} registros`);
                }
            }
        } catch (e) {
            console.warn('[Backup] Auto-backup falló:', e);
        }
    }

    private pintarBotonesRol(cfg: ConfigInfo): void {
        const contenedores = [
            document.getElementById('nav-actions-desktop'),
            document.getElementById('nav-actions-mobile'),
        ].filter(Boolean) as HTMLElement[];

        if (contenedores.length === 0 || document.querySelector('[data-nav-btn="caja"]')) return;

        contenedores.forEach((nav) => {
            nav.innerHTML = '';

            const crearBtn = (id: string, text: string, dataNav: string): HTMLButtonElement => {
                const b = document.createElement('button');
                b.id = `${id}-${nav.id.includes('mobile') ? 'mob' : 'dsk'}`;
                b.dataset.navBtn = dataNav;
                b.className =
                    'font-heading font-black text-xs sm:text-sm bg-white border-2 border-brand-black px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded shadow-brutal-sm hover:-translate-y-0.5 transition-transform shrink-0';
                b.textContent = text;
                return b;
            };

            const btnCaja = crearBtn('btn-ir-caja', 'CAJA', 'caja');
            const btnVentas = crearBtn('btn-ir-ventas', 'VENTAS', 'ventas');
            const btnInventario = crearBtn('btn-ir-inventario', 'INVENTARIO', 'inventario');
            const btnPanel = crearBtn('btn-ir-panel', 'PANEL', 'panel');
            const btnGuia = crearBtn('btn-ir-guia', 'GUIA', 'guia');

            const tieneCuentas = cfg.rubros !== 0;
            let btnCuentas: HTMLButtonElement | null = null;
            if (tieneCuentas) {
                btnCuentas = crearBtn('btn-ir-cuentas', 'CUENTAS', 'cuentas');
                btnCuentas.addEventListener('click', () => void this.arrancarCuentas());
            }

            nav.appendChild(btnCaja);
            if (btnCuentas) nav.appendChild(btnCuentas);
            nav.appendChild(btnVentas);
            nav.appendChild(btnInventario);
            nav.appendChild(btnPanel);
            nav.appendChild(btnGuia);

            btnCaja.addEventListener('click', () => void this.arrancarCaja());
            btnVentas.addEventListener('click', () => void this.arrancarVentas());
            btnInventario.addEventListener('click', () => void this.arrancarInventario());
            btnPanel.addEventListener('click', () => this.solicitarAccesoPanel());
            btnGuia.addEventListener('click', () => this.arrancarGuia());
        });
    }

    private arrancarGuia(): void {
        this.marcarActivo('guia');
        const vista = new GuiaView(this.root);
        vista.render();
    }

    private async arrancarCaja(): Promise<void> {
        this.marcarActivo('caja');
        this.cajaVm = new CajaViewModel(this.modelo);
        const vista = new CajaView(this.root, this.modalRoot, this.cajaVm, this.modelo);
        vista.render();
        try {
            await this.cajaVm.cargar();
        } catch (e) {
            this.toastError(e instanceof Error ? e.message : String(e));
        }
    }

    private async arrancarCuentas(): Promise<void> {
        this.marcarActivo('cuentas');
        const vista = new CuentasView(this.root, this.modalRoot, this.modelo);
        try {
            await vista.render();
        } catch (e) {
            this.toastError(e instanceof Error ? e.message : String(e));
        }
    }

    private arrancarVentas(): void {
        const cfg = this.modelo.getConfig();
        if (!cfg?.tienePin) {
            void this.abrirVentas();
            return;
        }
        this.modalRoot.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO RESTRINGIDO</h3>
                <p class="font-body text-brand-text mb-4">El historial de jornadas requiere la clave administrativa.</p>
                <input id="pin-ventas-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-ventas-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3">
                    <button id="pin-ventas-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-ventas-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
            </div>
        </div>`;
        const cerrar = (): void => { this.modalRoot.innerHTML = ''; };
        document.getElementById('pin-ventas-cancelar')?.addEventListener('click', cerrar);
        const intentar = (): void =>
            void (async () => {
                const pin = (document.getElementById('pin-ventas-input') as HTMLInputElement).value;
                const ok = await api.validarPin(pin).catch(() => false);
                if (ok) {
                    cerrar();
                    await this.abrirVentas();
                } else {
                    document.getElementById('pin-ventas-error')?.classList.remove('hidden');
                }
            })();
        document.getElementById('pin-ventas-ok')?.addEventListener('click', intentar);
        document.getElementById('pin-ventas-input')?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') intentar();
        });
    }

    private async abrirVentas(): Promise<void> {
        this.marcarActivo('ventas');
        const vista = new VentasView(this.root, this.modalRoot, this.modelo);
        try {
            await vista.render();
        } catch (e) {
            this.toastError(e instanceof Error ? e.message : String(e));
        }
    }

    private arrancarInventario(): void {
        const cfg = this.modelo.getConfig();
        if (!cfg?.tienePin || !cfg?.privacidadInventario) {
            void this.abrirInventario();
            return;
        }
        this.modalRoot.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO RESTRINGIDO</h3>
                <p class="font-body text-brand-text mb-4">El inventario requiere la clave administrativa.</p>
                <input id="pin-inv-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-inv-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <button id="pin-inv-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-inv-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
                <button id="pin-inv-sin-clave" class="w-full bg-gray-100 border-2 border-brand-black font-heading font-black py-2 rounded text-xs">VER CATÁLOGO (sin precios ni stock)</button>
            </div>
        </div>`;
        const cerrar = (): void => { this.modalRoot.innerHTML = ''; };
        document.getElementById('pin-inv-cancelar')?.addEventListener('click', cerrar);
        const intentar = (): void =>
            void (async () => {
                const pin = (document.getElementById('pin-inv-input') as HTMLInputElement).value;
                const ok = await api.validarPin(pin).catch(() => false);
                if (ok) {
                    cerrar();
                    await this.abrirInventario(true);
                } else {
                    document.getElementById('pin-inv-error')?.classList.remove('hidden');
                }
            })();
        document.getElementById('pin-inv-ok')?.addEventListener('click', intentar);
        document.getElementById('pin-inv-sin-clave')?.addEventListener('click', () => {
            cerrar();
            void this.abrirInventario(false);
        });
        document.getElementById('pin-inv-input')?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') intentar();
        });
    }

    private async abrirInventario(duenoAutenticado: boolean = true): Promise<void> {
        this.marcarActivo('inventario');
        const vista = new InventarioView(this.root, this.modelo, duenoAutenticado);
        try {
            await vista.render();
        } catch (e) {
            this.toastError(e instanceof Error ? e.message : String(e));
        }
    }

    private marcarActivo(modulo: string): void {
        document.querySelectorAll<HTMLButtonElement>('[data-nav-btn]').forEach((el) => {
            if (el.dataset.navBtn === modulo) {
                el.classList.remove('bg-white');
                el.classList.add('bg-brand-yellow');
            } else {
                el.classList.remove('bg-brand-yellow', 'bg-brand-cyan');
                el.classList.add('bg-white');
            }
        });
    }

    private solicitarAccesoPanel(): void {
        const cfg = this.modelo.getConfig();
        if (!cfg?.tienePin) {
            void this.abrirPanel();
            return;
        }
        this.modalRoot.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-8 w-full max-w-sm">
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO DUEÑO(A)</h3>
                <p class="font-body text-brand-text mb-4">Ingresa la clave de administración.</p>
                <input id="pin-input" type="password" inputmode="numeric" maxlength="16" autofocus
                    class="w-full border-2 border-brand-black rounded px-4 py-3 text-2xl tracking-[0.5em] text-center mb-3" />
                <p id="pin-error" class="hidden text-red-700 font-bold mb-2">Clave incorrecta.</p>
                <div class="grid grid-cols-2 gap-3">
                    <button id="pin-cancelar" class="bg-white border-2 border-brand-black font-heading font-black py-3 rounded">CANCELAR</button>
                    <button id="pin-ok" class="bg-brand-black text-white font-heading font-black py-3 rounded">ENTRAR</button>
                </div>
            </div>
        </div>`;
        const cerrar = (): void => {
            this.modalRoot.innerHTML = '';
        };
        document.getElementById('pin-cancelar')?.addEventListener('click', cerrar);
        const intentar = (): void =>
            void (async () => {
                const pin = (document.getElementById('pin-input') as HTMLInputElement).value;
                const ok = await api.validarPin(pin).catch(() => false);
                if (ok) {
                    cerrar();
                    await this.abrirPanel();
                } else {
                    document.getElementById('pin-error')?.classList.remove('hidden');
                }
            })();
        document.getElementById('pin-ok')?.addEventListener('click', intentar);
        document.getElementById('pin-input')?.addEventListener('keydown', (e) => {
            if ((e as KeyboardEvent).key === 'Enter') intentar();
        });
    }

    private async abrirPanel(): Promise<void> {
        this.marcarActivo('panel');
        const vista = new PanelDuenoView(
            this.root,
            this.modalRoot,
            this.panelVm,
            this.modelo,
        );
        try {
            await vista.render();
        } catch (e) {
            this.toastError(e instanceof Error ? e.message : String(e));
        }
    }

    private toastError(mensaje: string): void {
        this.modalRoot.innerHTML = `
        <div class="fixed bottom-6 right-6 bg-red-600 text-white border-2 border-brand-black rounded shadow-brutal px-5 py-4 font-heading font-bold max-w-md z-[110]">
            ${mensaje.replace(/"/g, '')}
            <button id="toast-close" class="ml-3 underline font-black">cerrar</button>
        </div>`;
        document.getElementById('toast-close')?.addEventListener('click', () => {
            this.modalRoot.innerHTML = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    new AppController().arrancar().catch((e) => console.error(e));
});
