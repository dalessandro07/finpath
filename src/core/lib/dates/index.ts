//* DATE UTILS

export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' }) => {
  return new Date(date).toLocaleDateString('es-PE', options)
}

export const formatTime = (date: Date, options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }) => {
  return new Date(date).toLocaleTimeString('es-PE', options)
}
