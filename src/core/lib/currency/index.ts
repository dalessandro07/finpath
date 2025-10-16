/**
 * Formatea un monto en centavos a formato de moneda PEN (Soles Peruanos)
 * @param amountInCents - Monto en centavos
 * @param options - Opciones adicionales para el formateo
 * @returns String formateado con la moneda PEN
 */
export const formatAmount = (
  amountInCents: number,
  options: {
    showCurrency?: boolean
    locale?: string
  } = {}
): string => {
  const { showCurrency = true, locale = 'es-PE' } = options

  // Convertir centavos a soles
  const amountInSoles = amountInCents / 100

  const formatOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...(showCurrency && {
      style: 'currency',
      currency: 'PEN'
    })
  }

  return new Intl.NumberFormat(locale, formatOptions).format(amountInSoles)
}

/**
 * Convierte un monto en soles a centavos para almacenamiento en la base de datos
 * @param amountInSoles - Monto en soles
 * @returns Monto en centavos
 */
export const convertToCents = (amountInSoles: number): number => {
  return Math.round(amountInSoles * 100)
}

/**
 * Convierte un monto en centavos a soles
 * @param amountInCents - Monto en centavos
 * @returns Monto en soles
 */
export const convertToSoles = (amountInCents: number): number => {
  return amountInCents / 100
}
