'use client'

import { Button } from '@/core/components/ui/button'
import { APP_NAME } from '@/core/lib/constants'
import { ArrowLeftIcon, HomeIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFound () {
  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold lowercase">
            {APP_NAME}
          </h1>
        </div>

        {/* Error Code */}
        <div className="mb-8">
          <h2 className="text-8xl font-bold text-muted-foreground/20 mb-4">
            404
          </h2>
          <h3 className="text-3xl font-bold mb-4">
            Página no encontrada
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/">
              <HomeIcon className="w-5 h-5 mr-2" />
              Ir al Inicio
            </Link>
          </Button>

          <Button onClick={goBack} variant="outline" size="lg" className="text-lg px-8 py-6">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Volver Atrás
          </Button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            ¿Necesitas ayuda?{' '}
            <Link href="/contacto" className="underline hover:text-foreground transition-colors">
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
