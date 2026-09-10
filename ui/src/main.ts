import './styles.css';
import { BcvWidget } from './tasa/BcvWidget';
import { api, ConfigInfo, RUBRO_ABASTO, RUBRO_LICORERIA, RUBRO_PANADERIA } from './negocio/api';
import { NegocioModel } from './negocio/NegocioModel';
import { WizardView } from './negocio/WizardView';

// Debe coincidir con SERVIDOR_PORT en lib.rs
const SERVER_PORT = 4000;
import { CajaViewModel } from './negocio/CajaViewModel';
import { CajaView } from './negocio/CajaView';
import { PanelDuenoView, PanelViewModel } from './negocio/PanelDuenoView';
import { CuentasView } from './negocio/CuentasView';
import { InventarioView } from './negocio/InventarioView';
import { VentasView } from './negocio/VentasView';
import { GuiaView } from './negocio/GuiaView';

export { RUBRO_ABASTO, RUBRO_PANADERIA, RUBRO_LICORERIA };

const INTERVALO_TASA_MS = 300_000;

interface QrResult {
    url: string;
    qrBase64: string;
    roomId: string;
}

class AppController {
    private modelo = new NegocioModel();
    private cajaVm: CajaViewModel | null = null;
    private panelVm = new PanelViewModel();
    private widget = new BcvWidget();
    private root!: HTMLElement;
    private modalRoot!: HTMLElement;
    private peerConnection: RTCPeerConnection | null = null;
    private dataChannel: RTCDataChannel | null = null;
    private wsSignaling: WebSocket | null = null;
    private offerResendTimer: ReturnType<typeof setInterval> | null = null;
    private p2pPin: string = '';
    private signalingRetries = 0;
    private p2pConnected = false;
    private roomId = '';
    private reconectando = false;

    private readonly STUN_SERVERS: RTCConfiguration = {
        iceServers: [
            { urls: 'stun:stun.cloudflare.com:3478' },
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'turn:openrelay.metered.ca:80', username: 'openrelayproject', credential: 'openrelayproject' },
            { urls: 'turn:openrelay.metered.ca:443', username: 'openrelayproject', credential: 'openrelayproject' },
            { urls: 'turn:openrelay.metered.ca:443?transport=tcp', username: 'openrelayproject', credential: 'openrelayproject' },
        ],
    };

    async arrancar(): Promise<void> {
        const root = document.getElementById('app-root');
        if (!root) return;
        this.root = root;
        this.modalRoot = this.crearModalRoot();
        this.widget.iniciar();

        const urlParams = new URLSearchParams(window.location.search);
        const roomParam = urlParams.get('room');
        if (roomParam && !(window as any).__DATACHANNEL__) {
            await this.arrancarMovil(root, roomParam);
            return;
        }

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
        document.getElementById('btn-conectar-movil')?.addEventListener('click', () => this.abrirModalQrMovil());

        // Auto-backup on startup (non-blocking)
        this.ejecutarBackupAutomatico();

        await this.arrancarCaja();
    }

    private async arrancarMovil(root: HTMLElement, roomId: string): Promise<void> {
        root.innerHTML = `
        <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
            <div class="text-center">
                <div class="w-12 h-12 border-4 border-brand-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 class="font-heading font-black text-xl">CONECTANDO...</h2>
                <p class="text-sm text-gray-500 mt-2">Estableciendo conexion P2P con el equipo principal</p>
                <p id="movil-status" class="text-xs text-gray-400 mt-1">Conectando al servidor de senalizacion...</p>
            </div>
        </div>`;

        const signalingBase = (window.location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + window.location.host;
        const wsUrl = `${signalingBase}/ws/signaling?room=${roomId}`;

        try {
            const ws = new WebSocket(wsUrl);

            ws.onopen = () => {
                const s = document.getElementById('movil-status');
                if (s) s.textContent = 'Senalizacion conectada. Esperando offer P2P...';
            };

            ws.onmessage = async (event) => {
                const msg = JSON.parse(event.data);
                if (msg.type === 'offer') {
                    const s = document.getElementById('movil-status');
                    if (s) s.textContent = 'Offer recibido. Estableciendo conexion...';

                    const pc = new RTCPeerConnection(this.STUN_SERVERS);

                    pc.onicecandidate = (e) => {
                        if (e.candidate && ws.readyState === WebSocket.OPEN) {
                            ws.send(JSON.stringify({ type: 'ice-candidate', candidate: e.candidate }));
                        }
                    };

                    pc.ondatachannel = (event) => {
                        const dc = event.channel;

                        dc.onopen = () => {
                            (window as any).__DATACHANNEL__ = dc;
                            (window as any).__DATACHANNEL_WS__ = ws;
                            const ss = document.getElementById('movil-status');
                            if (ss) ss.textContent = 'Conexion P2P lista!';
                            try {
                                this.root.innerHTML = `
                                <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                                    <div class="text-center">
                                        <div class="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <h2 class="font-heading font-black text-xl text-green-700">CONECTADO</h2>
                                        <p class="text-sm text-gray-500 mt-2">Cargando datos del negocio...</p>
                                    </div>
                                </div>`;
                                void this.cargarConfigMovil();
                            } catch (_) {}
                        };

                        dc.onclose = () => {
                            delete (window as any).__DATACHANNEL__;
                            this.root.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                                <div class="text-center">
                                    <div class="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                                    <h2 class="font-heading font-black text-xl text-red-700">DESCONECTADO</h2>
                                    <p class="text-sm text-gray-500 mt-2">La conexion P2P se ha perdido. Recargue la pagina.</p>
                                    <button onclick="location.reload()" class="mt-4 bg-brand-black text-white px-4 py-2 rounded font-heading font-black text-sm">RECONECTAR</button>
                                </div>
                            </div>`;
                        };

                        dc.onmessage = (e) => {
                            try {
                                const resp = JSON.parse(e.data);
                                if (resp.type === 'ping') {
                                    try { dc.send(JSON.stringify({ type: 'pong', ts: resp.ts })); } catch (_) {}
                                    return;
                                }
                                const pending = (window as any).__P2P_PENDING__;
                                if (pending && resp.id && pending.has(resp.id)) {
                                    const p = pending.get(resp.id);
                                    pending.delete(resp.id);
                                    if (resp.error) { p.reject(new Error(resp.error)); }
                                    else { p.resolve(resp.body); }
                                }
                            } catch (_) {}
                        };
                    };

                    await pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
                    const answer = await pc.createAnswer();
                    await pc.setLocalDescription(answer);

                    if (ws.readyState === WebSocket.OPEN) {
                        ws.send(JSON.stringify({ type: 'answer', sdp: pc.localDescription }));
                    }
                } else if (msg.type === 'error') {
                    this.root.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                        <div class="text-center">
                            <h2 class="font-heading font-black text-xl text-red-700">ERROR</h2>
                            <p class="text-sm text-gray-500 mt-2">${msg.message || 'Error de conexion'}</p>
                        </div>
                    </div>`;
                }
            };

            ws.onerror = () => {
                const s = document.getElementById('movil-status');
                if (s) s.textContent = 'Error de conexion con el servidor de senalizacion';
            };

            ws.onclose = () => {
                if (!(window as any).__DATACHANNEL__) {
                    const s = document.getElementById('movil-status');
                    if (s) s.textContent = 'Conexion perdida. Reconectando...';
                    setTimeout(() => this.arrancarMovil(root, roomId), 3000);
                }
            };
        } catch (e) {
            root.innerHTML = `
            <div class="flex flex-col items-center justify-center h-screen bg-gray-50">
                <div class="text-center">
                    <h2 class="font-heading font-black text-xl text-red-700">ERROR</h2>
                    <p class="text-sm text-gray-500 mt-2">No se pudo conectar al servidor de senalizacion</p>
                </div>
            </div>`;
        }
    }

    private async cargarConfigMovil(): Promise<void> {
        try {
            await this.modelo.cargarConfig();
        } catch (_) {}
        this.pintarBotonesRol(this.modelo.getConfig()!);
        document.getElementById('btn-conectar-movil')?.remove();
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
                <h3 class="font-heading font-black text-2xl mb-1">ACCESO DEL DUENO</h3>
                <p class="font-body text-brand-text mb-4">Ingresa la clave administrativa.</p>
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

    private async abrirModalQrMovil(): Promise<void> {
        let qrData: QrResult | null = null;
        try {
            qrData = await api.generarQr() as unknown as QrResult;
        } catch (_) {
            qrData = null;
        }

        const url = qrData?.url || `http://127.0.0.1:${SERVER_PORT}/panel`;
        const qrBase64 = qrData?.qrBase64 || '';
        const roomId = qrData?.roomId || '';

        this.modalRoot.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-lg">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                    <div>
                        <h3 class="font-heading font-black text-2xl">CONEXION MOVIL P2P</h3>
                        <p class="font-body text-xs text-gray-600">WebRTC DataChannel + TURN Relay - Funciona dentro y fuera de LAN</p>
                    </div>
                    <button id="qr-cerrar" class="w-8 h-8 rounded border-2 border-brand-black flex items-center justify-center font-black text-lg hover:bg-gray-100">&times;</button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="bg-gray-50 border-2 border-brand-black rounded-lg p-4 text-center flex flex-col items-center justify-between">
                        <div class="w-full">
                            <span class="text-[10px] font-black uppercase tracking-wider text-gray-500 block mb-1">Escanear para Conectar P2P</span>
                            <div class="w-36 h-36 mx-auto bg-white border-2 border-brand-black rounded p-2 flex items-center justify-center mb-2">
                                ${qrBase64
                                    ? `<img src="data:image/png;base64,${qrBase64}" class="w-full h-full" alt="QR P2P" />`
                                    : `<svg class="w-32 h-32 text-brand-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                                    </svg>`
                                }
                            </div>
                            <p class="text-[11px] font-bold text-gray-600 mb-1">URL de conexion:</p>
                            <p class="font-mono text-[10px] bg-white border border-gray-300 rounded p-1 truncate text-brand-black">${url}</p>
                            ${roomId ? `<p class="text-[10px] text-gray-400 mt-1 font-mono">Room: ${roomId}</p>` : ''}
                        </div>
                        <div class="bg-green-100 border border-brand-black rounded p-2 text-[10px] font-bold text-green-900 mt-2">
                            WebRTC P2P: Funciona dentro y fuera de LAN. TURN relay para NAT simetrico.
                        </div>
                    </div>

                    <div class="flex flex-col justify-between">
                        <div>
                            <h4 class="font-heading font-black text-sm uppercase mb-2">Estado de Conexion</h4>
                            <div id="p2p-status" class="border border-brand-black rounded p-3 bg-white mb-3">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="w-3 h-3 rounded-full bg-yellow-400 border border-brand-black" id="p2p-status-dot"></span>
                                    <span class="text-xs font-bold" id="p2p-status-text">Esperando conexion del dispositivo movil...</span>
                                </div>
                                <p class="text-[10px] text-gray-500">El dispositivo movil escanea el QR y se conecta via WebRTC DataChannel.</p>
                            </div>
                            <div class="bg-amber-100 border border-brand-black rounded p-2 text-[10px] font-bold text-amber-900 mb-3">
                                La conexion solicitará obligatoriamente la Clave del Dueño definida al instalar.
                            </div>
                            <div class="space-y-2">
                                <label class="block text-[11px] font-bold uppercase text-gray-700">Clave P2P (Opcional)</label>
                                <input id="p2p-pin-input" type="password" maxlength="16" placeholder="Dejar vacio para clave por defecto" class="w-full border-2 border-brand-black rounded px-3 py-1.5 font-bold bg-white text-xs" />
                                <p class="text-[10px] text-gray-500">Si se define, el dispositivo movil debera ingresar esta clave para conectarse.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center pt-3 border-t-2 border-brand-black text-xs text-gray-500 font-bold">
                    <span>STUN/TURN: Cloudflare | Google | OpenRelay</span>
                    <button id="qr-cerrar-btn" class="bg-brand-black text-white px-4 py-2 rounded font-black font-heading text-xs">CERRAR</button>
                </div>
            </div>
        </div>`;

        const cerrar = () => {
            this.modalRoot.innerHTML = '';
            this.desconectarP2P();
        };
        document.getElementById('qr-cerrar')?.addEventListener('click', cerrar);
        document.getElementById('qr-cerrar-btn')?.addEventListener('click', cerrar);

        if (roomId) {
            const pinInput = document.getElementById('p2p-pin-input') as HTMLInputElement | null;
            const pin = pinInput?.value?.trim() || '';
            this.conectarSignaling(roomId, pin);
        }
    }

    private conectarSignaling(roomId: string, pin: string = ''): void {
        this.roomId = roomId;
        this.p2pPin = pin;
        const signalingBase = (window.location.protocol === 'https:' ? 'wss:' : 'ws:') + '//' + window.location.host;
        const wsUrl = `${signalingBase}/ws/signaling?room=${roomId}`;

        try {
            this.wsSignaling = new WebSocket(wsUrl);
            this.wsSignaling.onopen = () => {
                this.signalingRetries = 0;
                if (this.dataChannel?.readyState === 'open' && this.peerConnection?.connectionState === 'connected') {
                    this.actualizarEstadoP2P('connected', 'Senalizacion reconectada - P2P activo');
                } else {
                    this.actualizarEstadoP2P('connected', 'Conectado al servidor de senalizacion...');
                    this.crearPeerConnection(roomId);
                }
            };
            this.wsSignaling.onmessage = async (event) => {
                const msg = JSON.parse(event.data);
                if (msg.type === 'answer' && this.peerConnection) {
                    if (this.offerResendTimer) { clearInterval(this.offerResendTimer); this.offerResendTimer = null; }
                    await this.peerConnection.setRemoteDescription(new RTCSessionDescription(msg.sdp));
                    this.actualizarEstadoP2P('connected', 'Conexion P2P establecida');
                } else if (msg.type === 'ice-candidate' && this.peerConnection) {
                    try {
                        await this.peerConnection.addIceCandidate(new RTCIceCandidate(msg.candidate));
                    } catch (e) {
                        console.warn('[P2P] ICE candidate error:', e);
                    }
                } else if (msg.type === 'error') {
                    this.actualizarEstadoP2P('error', msg.message || 'Error del servidor de senalizacion');
                }
            };
            this.wsSignaling.onclose = () => {
                if (this.dataChannel?.readyState === 'open') {
                    this.actualizarEstadoP2P('connected', 'Senalizacion caida - P2P sigue activo');
                } else {
                    this.actualizarEstadoP2P('disconnected', 'Senalizacion desconectada. Reconectando...');
                }
                const delay = Math.min(1000 * Math.pow(2, this.signalingRetries), 30000);
                this.signalingRetries++;
                setTimeout(() => {
                    this.conectarSignaling(roomId, this.p2pPin);
                }, delay);
            };
            this.wsSignaling.onerror = () => {};
        } catch (e) {
            this.actualizarEstadoP2P('error', 'Error al conectar con el servidor');
            const delay = Math.min(1000 * Math.pow(2, this.signalingRetries), 30000);
            this.signalingRetries++;
            setTimeout(() => {
                this.conectarSignaling(roomId, this.p2pPin);
            }, delay);
        }
    }

    private async crearPeerConnection(_roomId: string): Promise<void> {
        if (this.reconectando) return;

        if (this.peerConnection) { try { this.peerConnection.close(); } catch (_) {} this.peerConnection = null; }
        if (this.dataChannel) { this.dataChannel = null; }

        this.peerConnection = new RTCPeerConnection(this.STUN_SERVERS);

        this.peerConnection.onicecandidate = (event) => {
            if (event.candidate && this.wsSignaling && this.wsSignaling.readyState === WebSocket.OPEN) {
                this.wsSignaling.send(JSON.stringify({
                    type: 'ice-candidate',
                    candidate: event.candidate,
                }));
            }
        };

        this.peerConnection.onconnectionstatechange = () => {
            const state = this.peerConnection?.connectionState;
            if (state === 'connected') {
                this.p2pConnected = true;
                this.actualizarEstadoP2P('connected', 'P2P Conectado - Dispositivo movil vinculado');
            } else if (state === 'disconnected') {
                this.actualizarEstadoP2P('connecting', 'Conexion P2P inestable, intentando recuperar...');
                setTimeout(() => {
                    if (this.peerConnection?.connectionState === 'disconnected' && this.peerConnection?.iceConnectionState !== 'failed') {
                        this.intentarIceRestart();
                    }
                }, 5000);
            } else if (state === 'failed') {
                this.p2pConnected = false;
                this.actualizarEstadoP2P('disconnected', 'Conexion P2P perdida. Reconectando...');
                this.reconectarP2P();
            }
        };

        this.peerConnection.oniceconnectionstatechange = () => {
            const iceState = this.peerConnection?.iceConnectionState;
            if (iceState === 'failed') {
                this.p2pConnected = false;
                this.reconectarP2P();
            }
        };

        this.dataChannel = this.peerConnection.createDataChannel('api', { ordered: true });
        this.dataChannel.onopen = async () => {
            if (this.offerResendTimer) { clearInterval(this.offerResendTimer); this.offerResendTimer = null; }
            this.p2pConnected = true;
            (window as any).__DATACHANNEL__ = this.dataChannel;
            this.actualizarEstadoP2P('connected', 'DataChannel abierto - Dispositivo movil vinculado');
            this.iniciarKeepalive();
        };
        this.dataChannel.onclose = () => {
            this.p2pConnected = false;
            this.detenerKeepalive();
            delete (window as any).__DATACHANNEL__;
            this.actualizarEstadoP2P('disconnected', 'DataChannel cerrado');
            setTimeout(() => {
                if (!this.p2pConnected && this.peerConnection && this.peerConnection.connectionState !== 'closed' && this.peerConnection.connectionState !== 'failed') {
                    this.reconectarP2P();
                }
            }, 2000);
        };
        this.dataChannel.onmessage = (event) => {
            this.handleDataChannelMessage(event.data);
        };

        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);

        if (this.wsSignaling && this.wsSignaling.readyState === WebSocket.OPEN) {
            this.wsSignaling.send(JSON.stringify({
                type: 'offer',
                sdp: this.peerConnection.localDescription,
            }));
        }
        this.actualizarEstadoP2P('connecting', 'Oferta P2P enviada, esperando respuesta...');

        if (this.offerResendTimer) clearInterval(this.offerResendTimer);
        let offerAttempts = 0;
        const MAX_OFFER_ATTEMPTS = 60;
        this.offerResendTimer = setInterval(() => {
            offerAttempts++;
            if (offerAttempts >= MAX_OFFER_ATTEMPTS) {
                clearInterval(this.offerResendTimer!);
                this.offerResendTimer = null;
                this.actualizarEstadoP2P('error', 'Tiempo de espera agotado. Verifique que el dispositivo movil este en la misma red.');
                return;
            }
            if (this.peerConnection && this.wsSignaling && this.wsSignaling.readyState === WebSocket.OPEN) {
                this.wsSignaling.send(JSON.stringify({
                    type: 'offer',
                    sdp: this.peerConnection.localDescription,
                }));
            }
        }, 5000);
    }

    private async handleDataChannelMessage(data: string): Promise<void> {
        try {
            const msg = JSON.parse(data);

            if (msg.type === 'ping') {
                if (this.dataChannel?.readyState === 'open') {
                    try { this.dataChannel.send(JSON.stringify({ type: 'pong', ts: msg.ts })); } catch (_) {}
                }
                return;
            }
            if (msg.type === 'pong') {
                this.keepalivePending = false;
                return;
            }

            const { id, method, path, body, comando, args: cmdArgs } = msg;

            let httpMethod = method || 'GET';
            let httpPath = path;
            let httpBody = body;

            if (comando && !httpPath) {
                const cmdRoutes: Record<string, { method: string; path: string | ((a: any) => string) }> = {
                    'obtener_config':            { method: 'GET',  path: '/api/config' },
                    'listar_productos':          { method: 'GET',  path: '/api/productos' },
                    'listar_categorias':         { method: 'GET',  path: '/api/categorias' },
                    'panel':                     { method: 'GET',  path: '/api/panel' },
                    'listar_ventas':             { method: 'GET',  path: '/api/ventas' },
                    'listar_cuentas':            { method: 'GET',  path: '/api/cuentas' },
                    'obtener_jornada_actual':    { method: 'GET',  path: '/api/jornadas/actual' },
                    'listar_historico_jornadas': { method: 'GET',  path: '/api/jornadas' },
                    'listar_dispositivos':       { method: 'GET',  path: '/api/dispositivos' },
                    'listar_metodos_pago':       { method: 'GET',  path: '/api/metodos-pago' },
                    'listar_operadores':         { method: 'GET',  path: '/api/operadores' },
                    'obtener_semaforo_stock':    { method: 'GET',  path: '/api/semaforo' },
                    'listar_historico_tasas':    { method: 'GET',  path: '/api/historico-tasas' },
                    'obtener_tasa_bcv':          { method: 'GET',  path: '/api/tasa' },
                    'listar_respaldos':          { method: 'GET',  path: '/api/respaldos' },
                    'obtener_spa':               { method: 'GET',  path: '/api/spa' },
                    'registrar_venta':           { method: 'POST', path: '/api/ventas' },
                    'agregar_consumo':           { method: 'POST', path: (a: any) => `/api/cuentas/${a?.ventaId || a?.cuentaId || ''}/consumo` },
                    'abrir_cuenta':              { method: 'POST', path: '/api/cuentas' },
                    'abrir_jornada':             { method: 'POST', path: '/api/jornadas/abrir' },
                    'cerrar_jornada':            { method: 'POST', path: '/api/jornadas/cerrar' },
                    'crear_producto':            { method: 'POST', path: '/api/productos' },
                    'editar_producto':           { method: 'PUT',  path: (a: any) => `/api/productos/${a?.sku || ''}` },
                    'eliminar_producto':         { method: 'DELETE', path: (a: any) => `/api/productos/${a?.sku || ''}` },
                    'comprar_producto':          { method: 'POST', path: (a: any) => `/api/productos/${a?.sku || ''}/compra` },
                    'reducir_producto':          { method: 'POST', path: (a: any) => `/api/productos/${a?.sku || ''}/reducir` },
                    'crear_categoria':           { method: 'POST', path: '/api/categorias' },
                    'eliminar_categoria':        { method: 'DELETE', path: (a: any) => `/api/categorias/${a?.id || ''}` },
                    'crear_metodo_pago':         { method: 'POST', path: '/api/metodos-pago' },
                    'eliminar_metodo_pago':      { method: 'DELETE', path: (a: any) => `/api/metodos-pago/${a?.nombre || ''}` },
                    'crear_operador':            { method: 'POST', path: '/api/operadores' },
                    'editar_operador':           { method: 'PUT',  path: (a: any) => `/api/operadores/${a?.id || ''}` },
                    'eliminar_operador':         { method: 'DELETE', path: (a: any) => `/api/operadores/${a?.id || ''}` },
                    'crear_respaldo':            { method: 'POST', path: '/api/respaldos' },
                    'cerrar_cuenta':             { method: 'POST', path: (a: any) => `/api/cuentas/${a?.ventaId || ''}/cerrar` },
                    'abonar_cuenta':             { method: 'POST', path: (a: any) => `/api/cuentas/${a?.ventaId || ''}/abonar` },
                    'eliminar_consumo':          { method: 'DELETE', path: (a: any) => `/api/cuentas/${a?.ventaId || ''}/consumo/${a?.consumoIdx || ''}` },
                };
                const r = cmdRoutes[comando];
                if (r) {
                    httpMethod = r.method;
                    httpPath = typeof r.path === 'function' ? r.path(cmdArgs) : r.path;
                    httpBody = cmdArgs;
                } else {
                    if (this.dataChannel?.readyState === 'open') {
                        this.dataChannel.send(JSON.stringify({ id, error: `Unknown command: ${comando}` }));
                    }
                    return;
                }
            }

            try {
                const opts: RequestInit = { method: httpMethod, credentials: 'include' };
                if (httpBody) opts.body = typeof httpBody === 'string' ? httpBody : JSON.stringify(httpBody);
                const headers: Record<string, string> = { 'Content-Type': 'application/json' };
                const origin = window.location.origin;
                const res = await fetch(`${origin}${httpPath}`, {
                    ...opts,
                    headers,
                });
                if (res.status === 401) {
                    if (this.dataChannel && this.dataChannel.readyState === 'open') {
                        this.dataChannel.send(JSON.stringify({ id, error: 'Unauthorized' }));
                    }
                    return;
                }
                const responseBody = await res.json();
                if (this.dataChannel && this.dataChannel.readyState === 'open') {
                    this.dataChannel.send(JSON.stringify({ id, body: responseBody }));
                }
            } catch (e) {
                if (this.dataChannel && this.dataChannel.readyState === 'open') {
                    this.dataChannel.send(JSON.stringify({ id, error: String(e) }));
                }
            }
        } catch (e) {
            console.error('[P2P] Error handling message:', e);
        }
    }

    private keepaliveTimer: ReturnType<typeof setInterval> | null = null;
    private keepalivePending = false;

    private iniciarKeepalive(): void {
        this.detenerKeepalive();
        this.keepalivePending = false;
        this.keepaliveTimer = setInterval(() => {
            if (this.keepalivePending) {
                this.detenerKeepalive();
                this.reconectarP2P();
                return;
            }
            if (this.dataChannel?.readyState === 'open') {
                this.keepalivePending = true;
                try {
                    this.dataChannel.send(JSON.stringify({ type: 'ping', ts: Date.now() }));
                } catch (_) {
                    this.detenerKeepalive();
                    this.reconectarP2P();
                }
            }
        }, 20000);
    }

    private detenerKeepalive(): void {
        if (this.keepaliveTimer) { clearInterval(this.keepaliveTimer); this.keepaliveTimer = null; }
        this.keepalivePending = false;
    }

    private intentarIceRestart(): void {
        if (!this.peerConnection || this.peerConnection.connectionState === 'closed') return;
        try {
            this.peerConnection.restartIce();
            this.peerConnection.createOffer({ iceRestart: true }).then(offer => {
                return this.peerConnection!.setLocalDescription(offer);
            }).then(() => {
                if (this.wsSignaling && this.wsSignaling.readyState === WebSocket.OPEN && this.peerConnection) {
                    this.wsSignaling.send(JSON.stringify({
                        type: 'offer',
                        sdp: this.peerConnection.localDescription,
                    }));
                }
            }).catch(e => {
                console.warn('[P2P] ICE restart failed:', e);
                this.reconectarP2P();
            });
        } catch (e) {
            console.warn('[P2P] ICE restart error:', e);
            this.reconectarP2P();
        }
    }

    private async reconectarP2P(): Promise<void> {
        if (this.reconectando) return;
        this.reconectando = true;
        this.detenerKeepalive();
        this.limpiarPeerConnection();
        await new Promise(r => setTimeout(r, 1500));
        this.reconectando = false;
        if (this.wsSignaling && this.wsSignaling.readyState === WebSocket.OPEN) {
            this.crearPeerConnection(this.roomId);
        }
    }

    private limpiarPeerConnection(): void {
        if (this.offerResendTimer) { clearInterval(this.offerResendTimer); this.offerResendTimer = null; }
        if (this.dataChannel) { try { this.dataChannel.close(); } catch (_) {} this.dataChannel = null; }
        if (this.peerConnection) { try { this.peerConnection.close(); } catch (_) {} this.peerConnection = null; }
    }

    private actualizarEstadoP2P(estado: string, texto: string): void {
        const dot = document.getElementById('p2p-status-dot');
        const text = document.getElementById('p2p-status-text');
        if (dot) {
            dot.className = `w-3 h-3 rounded-full border border-brand-black ${
                estado === 'connected' ? 'bg-green-500' :
                estado === 'connecting' ? 'bg-yellow-400' :
                'bg-red-500'
            }`;
        }
        if (text) text.textContent = texto;
    }

    private desconectarP2P(): void {
        this.detenerKeepalive();
        this.limpiarPeerConnection();
        if (this.wsSignaling) { this.wsSignaling.close(); this.wsSignaling = null; }
        this.p2pConnected = false;
        this.signalingRetries = 0;
        this.reconectando = false;
        delete (window as any).__DATACHANNEL__;
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
