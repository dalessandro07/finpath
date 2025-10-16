import cursosImage from '@/public/cursos-personalizados.webp'
import diagnosticoImage from '@/public/diagnostico.webp'
import historialImage from '@/public/historial-crediticio.webp'
import seguimientoImage from '@/public/seguimiento.webp'
import barGif from '@/public/BAR.gif'
import billGif from '@/public/BILL.gif'
import organizationGif from '@/public/ORGANIZATION.gif'
import posGif from '@/public/POS.gif'
import saveGif from '@/public/SAVE.gif'
import spendGif from '@/public/SPEND.gif'
import buyGif from '@/public/BUY.gif'
import { Save } from 'lucide-react'

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

export const CLASES = [
  {
    title: 'Construye tu Base: El Poder del Ahorro',
    description: 'Inicia aquí tu camino hacia la salud financiera. Descubre por qué el ahorro es el cimiento indispensable para tus metas y aprende las claves prácticas para construir un futuro seguro a partir de hoy.',
    image: saveGif
  },
  {
    title: 'Pon tu Dinero a Trabajar: Introducción a la Inversión',
    description: 'Es hora de que tus ahorros crezcan y trabajen para ti. Aprende a dar el siguiente paso hacia la inversión de forma segura e informada, convirtiendo tu capital en un motor para construir tu patrimonio.',
    image: spendGif
  },
  {
    title: 'Toma el Control: Organiza tus Ingresos y Gastos',
    description: 'El secreto de la riqueza está en cómo administras tu dinero, no solo en cuánto ganas. Te enseñaremos métodos sencillos para registrar tus finanzas y darte el control total para tomar decisiones inteligentes.',
    image: organizationGif
  },
  {
    title: 'Compra con Propósito: El Arte de las Decisiones Inteligentes',
    description: 'Cada sol que gastas puede acercarte o alejarte de tus metas. Aprende a diferenciar entre necesidades y deseos para evitar compras impulsivas y asegurar que cada decisión financiera te beneficie.',
    image: posGif
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

//* LEGAL CONTENT
export const TERMS_OF_SERVICE = {
  title: 'Términos de Servicio',
  lastUpdated: `Última actualización: ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`,
  sections: [
    {
      title: '1. Aceptación de los Términos',
      content: 'Al acceder y utilizar FinPath, usted acepta estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.'
    },
    {
      title: '2. Descripción del Servicio',
      content: 'FinPath es una plataforma digital de educación financiera que ofrece herramientas interactivas, cursos personalizados, diagnóstico financiero inteligente y recursos educativos para ayudar a los usuarios a mejorar su educación financiera y alcanzar sus metas económicas.'
    },
    {
      title: '3. Uso Aceptable',
      content: 'Usted se compromete a utilizar FinPath únicamente para fines legales y de acuerdo con estos términos. Está prohibido el uso de la plataforma para actividades ilegales, fraudulentas o que violen los derechos de terceros.'
    },
    {
      title: '4. Cuenta de Usuario',
      content: 'Para acceder a ciertas funcionalidades, debe crear una cuenta proporcionando información precisa y actualizada. Es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades que ocurran bajo su cuenta.'
    },
    {
      title: '5. Contenido y Propiedad Intelectual',
      content: 'Todo el contenido de FinPath, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de FinPath o sus licenciantes y está protegido por las leyes de propiedad intelectual. No puede reproducir, distribuir o crear obras derivadas sin autorización.'
    },
    {
      title: '6. Privacidad y Protección de Datos',
      content: 'Su privacidad es importante para nosotros. El uso de sus datos personales se rige por nuestra Política de Privacidad, que forma parte integral de estos términos.'
    },
    {
      title: '7. Limitación de Responsabilidad',
      content: 'FinPath se proporciona "tal como está" sin garantías de ningún tipo. No seremos responsables por daños directos, indirectos, incidentales o consecuenciales que puedan resultar del uso de nuestros servicios.'
    },
    {
      title: '8. Modificaciones',
      content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma. Su uso continuado constituye aceptación de los términos modificados.'
    },
    {
      title: '9. Terminación',
      content: 'Podemos suspender o terminar su acceso a FinPath en cualquier momento, con o sin causa, con o sin previo aviso, por cualquier motivo, incluyendo la violación de estos términos.'
    },
    {
      title: '10. Ley Aplicable',
      content: 'Estos términos se rigen por las leyes de Perú. Cualquier disputa será resuelta en los tribunales competentes de Lima, Perú.'
    }
  ]
}

export const PRIVACY_POLICY = {
  title: 'Política de Privacidad',
  lastUpdated: `Última actualización: ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`,
  sections: [
    {
      title: '1. Información que Recopilamos',
      content: 'Recopilamos información que usted nos proporciona directamente, como nombre, dirección de correo electrónico, información de contacto y datos financieros que decida compartir para personalizar su experiencia educativa.'
    },
    {
      title: '2. Cómo Utilizamos su Información',
      content: 'Utilizamos su información para proporcionar y mejorar nuestros servicios, personalizar su experiencia educativa, comunicarnos con usted, procesar transacciones y cumplir con obligaciones legales.'
    },
    {
      title: '3. Compartir Información',
      content: 'No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios, cumplir con la ley o proteger nuestros derechos.'
    },
    {
      title: '4. Seguridad de los Datos',
      content: 'Implementamos medidas de seguridad técnicas, administrativas y físicas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.'
    },
    {
      title: '5. Cookies y Tecnologías Similares',
      content: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso de nuestros servicios y personalizar el contenido. Puede controlar el uso de cookies a través de la configuración de su navegador.'
    },
    {
      title: '6. Retención de Datos',
      content: 'Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.'
    },
    {
      title: '7. Sus Derechos',
      content: 'Tiene derecho a acceder, corregir, actualizar o eliminar su información personal. También puede optar por no recibir comunicaciones de marketing y solicitar una copia de sus datos personales.'
    },
    {
      title: '8. Transferencias Internacionales',
      content: 'Sus datos pueden ser transferidos y procesados en países distintos al suyo. Nos aseguramos de que dichas transferencias cumplan con las leyes de protección de datos aplicables.'
    },
    {
      title: '9. Menores de Edad',
      content: 'Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información personal de menores de edad sin el consentimiento de sus padres o tutores.'
    },
    {
      title: '10. Cambios a esta Política',
      content: 'Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web con una fecha de "última actualización" actualizada.'
    },
    {
      title: '11. Contacto',
      content: 'Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de nuestra página de contacto o enviando un correo electrónico a privacidad@finpath.com.'
    }
  ]
}
