//* DATE UTILS

export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' }) => {
  return new Date(date).toLocaleDateString('es-PE', options)
}
