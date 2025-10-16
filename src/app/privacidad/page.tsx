import Footer from '@/core/components/layout/footer'
import Header from '@/core/components/layout/header'
import { PRIVACY_POLICY } from '@/core/lib/constants'

export default function PrivacyPage () {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{PRIVACY_POLICY.title}</h1>
          <p className="text-muted-foreground">
            {PRIVACY_POLICY.lastUpdated}
          </p>
        </div>

        <div className="bg-card rounded-lg border p-8 space-y-8">
          {PRIVACY_POLICY.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de nuestra{' '}
            <a href="/contacto" className="text-primary hover:underline">
              página de contacto
            </a>
            {' '}o enviando un correo a{' '}
            <a href="mailto:privacidad@finpath.com" className="text-primary hover:underline">
              privacidad@finpath.com
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
