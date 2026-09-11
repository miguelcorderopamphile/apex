/**
 * DatioLabs Enterprise - Módulo de Normalización Cronológica (VET / America/Caracas).
 * Garantiza cero desfasaje horario (+4h) en tickets, comprobantes, auditorías y turnos.
 */

const VET_TIMEZONE = 'America/Caracas';

/**
 * Formatea un timestamp Unix (en segundos) a fecha y hora con zona horaria de Venezuela.
 * Ejemplo: "11/09/2026 10:30"
 */
export function formatFechaHoraVet(unixSeconds: number | null | undefined): string {
    if (!unixSeconds || unixSeconds <= 0) return '-';
    const date = new Date(unixSeconds * 1000);
    return new Intl.DateTimeFormat('es-VE', {
        timeZone: VET_TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).format(date);
}

/**
 * Formatea un objeto Date a cadena con zona horaria de Venezuela.
 */
export function formatDateVet(date: Date, includeSeconds: boolean = false): string {
    return new Intl.DateTimeFormat('es-VE', {
        timeZone: VET_TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        ...(includeSeconds ? { second: '2-digit' } : {}),
        hour12: false,
    }).format(date);
}

/**
 * Calcula la antigüedad relativa respecto a la hora actual.
 */
export function calcularAntiguedadVet(fechaUnix?: number | null): string {
    if (!fechaUnix || fechaUnix <= 0) return 'Hoy';
    const ahora = Math.floor(Date.now() / 1000);
    const diff = Math.max(0, ahora - fechaUnix);
    if (diff < 3600) return 'Hoy (reciente)';
    const horas = Math.floor(diff / 3600);
    if (horas < 24) return `Hoy (hace ${horas}h)`;
    const dias = Math.floor(horas / 24);
    if (dias === 1) return 'Hace 1 día';
    return `Hace ${dias} días`;
}
