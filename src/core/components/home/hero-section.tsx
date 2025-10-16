import { Button } from '@/core/components/ui/button'
import { APP_SHORT_DESCRIPTION, APP_SLOGAN } from '@/core/lib/constants'
import heroWebp from '@/public/hero.webp'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection () {
  return (
    <section className="py-10 lg:py-5 px-5 lg:px-0 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-7xl font-bold text-balance leading-tight">
            {APP_SLOGAN}
          </h1>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            {APP_SHORT_DESCRIPTION}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/registro">
                Comienza Gratis
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/contacto">
                Habla con un experto
              </Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              ¿Ya tienes cuenta?{' '}
              <Link href="/login" className="underline hover:text-foreground transition-colors">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
            <Image
              src={heroWebp}
              alt="FinPath - Educación Financiera"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
