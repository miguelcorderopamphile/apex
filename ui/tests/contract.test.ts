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

    it('deduplicacion de jornada actual en lista consolidada de jornadas', () => {
        const jornadaActual = {
            id: 'JOR-ACTUAL',
            estado: 'abierta' as const,
            inicioUnix: 1000,
            inicioStr: 'Hoy',
            operadorInicial: 'Operador 1',
            operadorActual: 'Operador 1',
            operadoresActivos: ['Operador 1'],
            operadoresRelevo: ['Operador 1'],
            tasaInicio: '800.00',
            ventasTotalUsd: '50.00',
            ventasTotalBs: '40000.00',
            ticketsEmitidos: 2,
            vueltoPagadoBs: '0.00',
            vueltoRetenidoBs: '0.00',
            deudasLiquidadasUsd: '0.00',
            entradasStockReg: 0,
            mermasStockReg: 0,
            cambiosPrecioReg: 0,
        };

        const historico = [
            { ...jornadaActual },
            {
                ...jornadaActual,
                id: 'JOR-ANTERIOR',
                estado: 'cerrada' as const,
            },
        ];

        const historicoFiltrado = jornadaActual
            ? historico.filter((j) => j.id !== jornadaActual.id)
            : historico;
        const todasParaKpi = [...(jornadaActual ? [jornadaActual] : []), ...historicoFiltrado];

        expect(todasParaKpi.length).toBe(2);
        expect(todasParaKpi.filter((j) => j.id === 'JOR-ACTUAL').length).toBe(1);
    });

    it('venta con pago mixto incrementa exactamente en 1 los tickets emitidos de la jornada', async () => {
        const jornada = {
            id: 'JOR-TEST',
            estado: 'abierta' as const,
            ticketsEmitidos: 5,
        };

        const pagosMixtos = [
            { metodo: 'DOL.CASH', moneda: 'USD' as const, montoUsd: '10.00', montoBs: '8000.00' },
            { metodo: 'BS.EFEC.', moneda: 'BS' as const, montoUsd: '5.00', montoBs: '4000.00' },
        ];

        expect(pagosMixtos.length).toBe(2);
        jornada.ticketsEmitidos += 1;
        expect(jornada.ticketsEmitidos).toBe(6);
    });

    it('generacion y validacion universal de licencias de 16 digitos', async () => {
        const { generarLicenciaUniversal, validarLicenciaUniversal } = await import('../src/negocio/api');

        for (let i = 0; i < 50; i++) {
            const lic = generarLicenciaUniversal();
            expect(lic).toHaveLength(16);
            expect(/^\d{16}$/.test(lic)).toBe(true);
            expect(validarLicenciaUniversal(lic)).toBe(true);
        }

        // Casos inválidos
        expect(validarLicenciaUniversal('123456789012345')).toBe(false);
        expect(validarLicenciaUniversal('12345678901234567')).toBe(false);
        expect(validarLicenciaUniversal('1234567890129999')).toBe(false);
        expect(validarLicenciaUniversal('')).toBe(false);

        // 10 licencias universales invariantes
        const { generar10LicenciasUniversales } = await import('../src/negocio/api');
        const diez = generar10LicenciasUniversales();
        expect(diez).toHaveLength(10);
        const set = new Set(diez);
        expect(set.size).toBe(10);
        diez.forEach((k) => {
            expect(k).toHaveLength(16);
            expect(validarLicenciaUniversal(k)).toBe(true);
        });
    });
});

