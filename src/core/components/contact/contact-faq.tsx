import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/core/components/ui/accordion'

const faqData = [
  {
    question: '¿Qué es FinPath y cómo puede ayudarme?',
    answer: 'FinPath es una plataforma digital de educación financiera diseñada para ayudarte a entender, organizar y mejorar tus finanzas personales. Te ofrecemos herramientas interactivas, cursos personalizados y un diagnóstico financiero inteligente para construir hábitos sólidos y alcanzar tus metas económicas.'
  },
  {
    question: '¿Es gratis usar FinPath?',
    answer: 'Sí, FinPath ofrece contenido gratuito para comenzar tu educación financiera. También tenemos planes premium con funcionalidades avanzadas y cursos especializados para aquellos que quieren profundizar más en su educación financiera.'
  },
  {
    question: '¿Cómo funciona el diagnóstico financiero?',
    answer: 'Nuestro diagnóstico financiero inteligente evalúa tu situación financiera actual a través de una serie de preguntas personalizadas. Identifica tus fortalezas y áreas de mejora, y te proporciona un plan personalizado para alcanzar tus objetivos financieros.'
  },
  {
    question: '¿Mis datos están seguros en FinPath?',
    answer: 'Absolutamente. Utilizamos los más altos estándares de seguridad y privacidad para proteger tu información. Todos los datos están encriptados y cumplimos con las regulaciones de protección de datos más estrictas.'
  },
  {
    question: '¿Puedo acceder a FinPath desde mi móvil?',
    answer: 'Sí, FinPath es completamente responsive y funciona perfectamente en dispositivos móviles, tablets y computadoras. Puedes acceder a tu cuenta y continuar tu educación financiera desde cualquier lugar.'
  },
  {
    question: '¿Qué tipo de cursos ofrecen?',
    answer: 'Ofrecemos cursos desde nivel principiante hasta avanzado, cubriendo temas como presupuesto personal, ahorro, inversiones, manejo de deudas, planificación para la jubilación y mejora del historial crediticio. Todos los cursos están diseñados para ser prácticos y aplicables a la vida real.'
  },
  {
    question: '¿Cómo puedo mejorar mi historial crediticio?',
    answer: 'FinPath te enseña estrategias efectivas para construir y mejorar tu puntaje crediticio de manera sostenible. Incluye consejos sobre pagos puntuales, manejo de deudas, diversificación crediticia y mejores prácticas para mantener un historial saludable.'
  },
  {
    question: '¿Ofrecen soporte personalizado?',
    answer: 'Sí, además de nuestro contenido educativo, ofrecemos consultas personalizadas con expertos financieros. Puedes contactarnos a través de WhatsApp o correo electrónico para recibir asesoramiento específico sobre tu situación financiera.'
  }
]

export default function ContactFAQ () {
  return (
    <div className="bg-card rounded-lg border p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
        <p className="text-muted-foreground">
          Encuentra respuestas a las preguntas más comunes sobre FinPath
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-2 px-4">
            <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
