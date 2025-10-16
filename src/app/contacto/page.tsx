import ContactFAQ from '@/core/components/contact/contact-faq'
import ContactForm from '@/core/components/contact/contact-form'
import Footer from '@/core/components/layout/footer'
import Header from '@/core/components/layout/header'

export default function ContactPage () {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre FinPath? Estamos aquí para ayudarte.
            Elige la forma que prefieras para contactarnos.
          </p>
        </div>

        <ContactForm />

        <div className="mt-16">
          <ContactFAQ />
        </div>
      </div>

      <Footer />
    </main>
  )
}
