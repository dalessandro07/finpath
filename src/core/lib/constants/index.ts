import cursosImage from '@/public/cursos-personalizados.webp'
import diagnosticoImage from '@/public/diagnostico.webp'
import historialImage from '@/public/historial-crediticio.webp'
import seguimientoImage from '@/public/seguimiento.webp'

//* APP INFO
export const APP_NAME = 'FinPath'
export const APP_SHORT_DESCRIPTION = 'FinPath es una plataforma digital de educación financiera que te ayuda a entender, organizar y mejorar tus finanzas personales.'
export const APP_DESCRIPTION = 'FinPath es una plataforma digital de educación financiera que te ayuda a entender, organizar y mejorar tus finanzas personales. A través de herramientas interactivas, cursos personalizados y un diagnóstico financiero inteligente, te guiamos paso a paso para construir hábitos sólidos, mejorar tu historial crediticio y alcanzar tus metas económicas.'
export const APP_SLOGAN = 'Tu camino hacia la libertad financiera'

export const APP_URL = 'http://finpath-efsrtv.vercel.app'

//* LANDING PAGE CONTENT
export const INTRO_CONTENT = {
  title: '¿Qué es la educación financiera?',
  description: 'La educación financiera es la capacidad de entender y aplicar conceptos financieros para tomar decisiones informadas sobre el dinero. Es fundamental para tu bienestar económico y la base de una vida financiera exitosa.',
  stats: [
    { number: '73%', label: 'de latinoamericanos no tienen educación financiera formal' },
    { number: '85%', label: 'mejora en la gestión de finanzas con educación adecuada' },
    { number: '3x', label: 'más probabilidades de alcanzar metas financieras' }
  ]
}

export const BENEFITS = [
  {
    icon: 'GraduationCap',
    title: 'Aprende a tu ritmo',
    description: 'Cursos diseñados para todos los niveles, desde principiantes hasta avanzados, con contenido actualizado y relevante.'
  },
  {
    icon: 'Target',
    title: 'Metas personalizadas',
    description: 'Define tus objetivos financieros y recibe un plan personalizado para alcanzarlos paso a paso.'
  },
  {
    icon: 'Shield',
    title: 'Seguridad garantizada',
    description: 'Tus datos están protegidos con los más altos estándares de seguridad y privacidad.'
  },
  {
    icon: 'TrendingUp',
    title: 'Resultados medibles',
    description: 'Ve tu progreso en tiempo real con métricas claras y reportes detallados de tu evolución financiera.'
  }
]

export const FEATURES = [
  {
    title: 'Diagnóstico financiero inteligente',
    description: 'Evalúa tu situación financiera actual con nuestro análisis personalizado que identifica fortalezas y áreas de mejora.',
    image: diagnosticoImage
  },
  {
    title: 'Cursos personalizados',
    description: 'Accede a contenido educativo adaptado a tu nivel y objetivos, con lecciones interactivas y ejercicios prácticos.',
    image: cursosImage
  },
  {
    title: 'Seguimiento de progreso',
    description: 'Monitorea tu evolución con dashboards intuitivos que muestran tu crecimiento financiero mes a mes.',
    image: seguimientoImage
  },
  {
    title: 'Mejora tu historial crediticio',
    description: 'Aprende estrategias efectivas para construir y mejorar tu puntaje crediticio de manera sostenible.',
    image: historialImage
  }
]

export const TESTIMONIALS = [
  {
    name: 'María González',
    role: 'Emprendedora',
    content: 'FinPath me ayudó a organizar mis finanzas y ahorrar para mi negocio. En 6 meses logré aumentar mis ahorros en un 40%.',
    rating: 5,
    avatar: 'MG'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Profesional',
    content: 'Los cursos son excelentes y fáciles de entender. Ahora tengo un plan claro para mi jubilación y me siento más seguro.',
    rating: 5,
    avatar: 'CR'
  },
  {
    name: 'Ana Martínez',
    role: 'Estudiante',
    content: 'Como estudiante, no sabía nada de finanzas. FinPath me enseñó desde lo básico y ahora manejo mi dinero con confianza.',
    rating: 5,
    avatar: 'AM'
  }
]

export const CTA_CONTENT = {
  title: 'Comienza tu camino hacia la libertad financiera hoy',
  subtitle: 'Únete a miles de personas que ya están transformando su vida financiera',
  primaryButton: 'Comenzar Gratis',
  secondaryButton: 'Habla con un experto'
}
