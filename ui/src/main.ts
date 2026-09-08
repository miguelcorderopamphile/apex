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

    private readonly STUN_SERVERS: RTCConfiguration = {
        iceServers: [
            { urls: 'stun:stun.cloudflare.com:3478' },
            { urls: 'stun:stun.l.google.com:19302' },
        ],
    };

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
            new WizardView(this.root, this.modelo, () => void this.arrancarCaja()).render();
            return;
        }
        this.pintarBotonesRol(cfg);
        document.getElementById('btn-conectar-movil')?.addEventListener('click', () => this.abrirModalQrMovil());
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

    private async arrancarInventario(): Promise<void> {
        this.marcarActivo('inventario');
        const vista = new InventarioView(this.root, this.modelo);
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

        const url = qrData?.url || 'http://127.0.0.1:4000/panel';
        const qrBase64 = qrData?.qrBase64 || '';
        const roomId = qrData?.roomId || '';

        this.modalRoot.innerHTML = `
        <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4">
            <div class="bg-white border-2 border-brand-black rounded-lg shadow-brutal p-6 w-full max-w-lg">
                <div class="flex justify-between items-center border-b-2 border-brand-black pb-3 mb-4">
                    <div>
                        <h3 class="font-heading font-black text-2xl">CONEXION MOVIL P2P</h3>
                        <p class="font-body text-xs text-gray-600">WebRTC DataChannel - Funciona dentro y fuera de LAN</p>
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
                            WebRTC P2P: Funciona dentro y fuera de LAN con STUN publico.
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
                            <div class="bg-amber-100 border border-brand-black rounded p-2 text-[10px] font-bold text-amber-900">
                                La conexion solicitará obligatoriamente la Clave del Dueño definida al instalar.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center pt-3 border-t-2 border-brand-black text-xs text-gray-500 font-bold">
                    <span>STUN: stun.cloudflare.com | stun.l.google.com</span>
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
            this.conectarSignaling(roomId);
        }
    }

    private conectarSignaling(roomId: string): void {
        const host = window.location.hostname || '127.0.0.1';
        const wsUrl = `ws://${host}:4000/ws/signaling?room=${roomId}`;

        try {
            this.wsSignaling = new WebSocket(wsUrl);
            this.wsSignaling.onopen = () => {
                this.actualizarEstadoP2P('connected', 'Conectado al servidor de senalizacion. Creando conexion P2P...');
                this.crearPeerConnection(roomId);
            };
            this.wsSignaling.onmessage = async (event) => {
                const msg = JSON.parse(event.data);
                if (msg.type === 'answer' && this.peerConnection) {
                    await this.peerConnection.setRemoteDescription(new RTCSessionDescription(msg.sdp));
                    this.actualizarEstadoP2P('connected', 'Conexion P2P establecida');
                } else if (msg.type === 'ice-candidate' && this.peerConnection) {
                    try {
                        await this.peerConnection.addIceCandidate(new RTCIceCandidate(msg.candidate));
                    } catch (e) {
                        console.warn('[P2P] ICE candidate error:', e);
                    }
                }
            };
            this.wsSignaling.onclose = () => {
                this.actualizarEstadoP2P('disconnected', 'Desconectado del servidor de senalizacion');
            };
            this.wsSignaling.onerror = () => {
                this.actualizarEstadoP2P('error', 'Error de conexion al servidor de senalizacion');
            };
        } catch (e) {
            this.actualizarEstadoP2P('error', 'Error al conectar con el servidor');
        }
    }

    private async crearPeerConnection(_roomId: string): Promise<void> {
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
                this.actualizarEstadoP2P('connected', 'P2P Conectado - Dispositivo movil vinculado');
            } else if (state === 'disconnected' || state === 'failed') {
                this.actualizarEstadoP2P('disconnected', 'Conexion P2P perdida');
            }
        };

        this.dataChannel = this.peerConnection.createDataChannel('api', { ordered: true });
        this.dataChannel.onopen = () => {
            this.actualizarEstadoP2P('connected', 'DataChannel abierto - Listo para recibir solicitudes');
        };
        this.dataChannel.onclose = () => {
            this.actualizarEstadoP2P('disconnected', 'DataChannel cerrado');
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
    }

    private async handleDataChannelMessage(data: string): Promise<void> {
        try {
            const msg = JSON.parse(data);
            const { id, method, path, body } = msg;

            let statusCode = 200;
            let responseBody: unknown = null;

            try {
                const opts: RequestInit = { method: method || 'GET' };
                if (body) opts.body = body;
                const res = await fetch(`/api${path}`, {
                    ...opts,
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
                statusCode = res.status;
                if (res.status === 401) {
                    responseBody = { error: 'Unauthorized' };
                } else {
                    responseBody = await res.json();
                }
            } catch (e) {
                statusCode = 500;
                responseBody = { error: String(e) };
            }

            if (this.dataChannel && this.dataChannel.readyState === 'open') {
                this.dataChannel.send(JSON.stringify({
                    id,
                    status: statusCode,
                    body: responseBody,
                }));
            }
        } catch (e) {
            console.error('[P2P] Error handling message:', e);
        }
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
        if (this.dataChannel) { this.dataChannel.close(); this.dataChannel = null; }
        if (this.peerConnection) { this.peerConnection.close(); this.peerConnection = null; }
        if (this.wsSignaling) { this.wsSignaling.close(); this.wsSignaling = null; }
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
    new AppController().arrancar().catch((e) => console.error(e));
});
