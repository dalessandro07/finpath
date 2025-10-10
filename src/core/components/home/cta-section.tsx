import { Button } from '@/core/components/ui/button'
import { CTA_CONTENT } from '@/core/lib/constants'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function CTASection () {
  return (
    <section id="cta" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-6 text-balance">
        {CTA_CONTENT.title}
      </h2>

      <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        {CTA_CONTENT.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href="/registro">
            {CTA_CONTENT.primaryButton}
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
          <Link href="/demo">
            {CTA_CONTENT.secondaryButton}
          </Link>
        </Button>
      </div>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="underline hover:text-foreground transition-colors">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </section>
  )
}
