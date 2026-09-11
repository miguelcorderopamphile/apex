import { describe, it, expect } from 'vitest';
import { parseNum } from '../src/negocio/api';
import type {
    Ticket,
    CuentaAbierta,
    ConsumoCuenta,
    LineaTicket,
    PagoTicket,
    ResolucionVuelto,
    ProductoInfo,
} from '../src/negocio/api';

describe('Contrato de Datos Frontend <-> Backend Tauri', () => {
    it('formato de Ticket debe soportar tanto campos numericos como strings en totales', () => {
        const ticketDesdeBackend = {
            ventaId: 'TRX-1001',
            lineas: [
                {
                    sku: 'PROD-01',
                    nombre: 'Harina PAN',
                    cantidad: '2',
                    precioUsd: '1.20',
                    tasaBloqueada: '807.39',
                    subtotalUsd: '2.40',
                    subtotalBs: '1937.74',
                },
            ],
            totalUsd: '2.40',
            totalBs: '1937.74',
            montoRecibidoBs: '2000.00',
            vueltoBs: '62.26',
            tasaDelDia: '807.39',
            fechaUnix: 1726000000,
        };

        expect(parseNum(ticketDesdeBackend.totalUsd)).toBe(2.4);
        expect(parseNum(ticketDesdeBackend.totalBs)).toBe(1937.74);
        expect(parseNum(ticketDesdeBackend.vueltoBs)).toBe(62.26);
    });

    it('identificador de consumo para eliminar_consumo debe seguir el patron consumo-{indice}', () => {
        const consumoIdValido = 'consumo-0';
        const consumoIdValido2 = 'consumo-3';
        const consumoIdInvalido = 'con-m4-1';

        const regex = /^consumo-\d+$/;
        expect(regex.test(consumoIdValido)).toBe(true);
        expect(regex.test(consumoIdValido2)).toBe(true);
        expect(regex.test(consumoIdInvalido)).toBe(false);
    });

    it('contrato de apertura de cuenta (abrir_cuenta)', () => {
        const payloadApertura = {
            etiqueta: 'Mesa 4',
            tipo: 'activa',
            cliente: 'Carlos',
            nota: 'Sin cebolla',
        };

        expect(payloadApertura.etiqueta.trim().length).toBeGreaterThan(0);
        expect(['activa', 'deuda']).toContain(payloadApertura.tipo);
    });

    it('contrato de cobro y liquidacion (cerrar_cuenta)', () => {
        const payloadCierre = {
            ventaId: 'CTA-88211',
            montoRecibidoBs: '2000.00',
            pagos: [
                {
                    metodo: 'TRANSF.BS.',
                    moneda: 'BS' as const,
                    montoUsd: '2.48',
                    montoBs: '2000.00',
                },
            ],
            resolucionVuelto: {
                estado: 'PAGADO' as const,
                metodo: 'BS.EFEC.',
                montoBs: '0.00',
            },
        };

        expect(parseNum(payloadCierre.montoRecibidoBs)).toBe(2000);
        expect(payloadCierre.pagos.length).toBeGreaterThan(0);
        expect(payloadCierre.resolucionVuelto.estado).toBe('PAGADO');
    });
});
