'use client'

import { Button } from '@/core/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import Logo from '@/core/components/ui/logo'
import { APP_DESCRIPTION, APP_NAME } from '@/core/lib/constants'
import { AlertTriangle, Bug, Home, RefreshCw } from 'lucide-react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}


export default function GlobalError ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [isRetrying, setIsRetrying] = useState(false)

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      reset()
    } finally {
      setIsRetrying(false)
    }
  }

  return (
    <html lang="es">
      <head>
        <title>Error - {APP_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`min-h-screen bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 ${inter.className}`}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="text-center mb-8">
              <Logo
                size="lg"
                color="primary"
                href="/"
                className="justify-center"
              />
            </div>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-xl text-red-900 dark:text-red-100">
                  ¡Oops! Algo salió mal
                </CardTitle>
                <CardDescription className="text-red-700 dark:text-red-300">
                  Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y está trabajando para solucionarlo.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Información del error (solo en desarrollo) */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="rounded-lg bg-red-50 dark:bg-red-950/50 p-4 border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Bug className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <span className="text-sm font-medium text-red-800 dark:text-red-200">
                        Información del error:
                      </span>
                    </div>
                    <p className="text-xs text-red-700 dark:text-red-300 font-mono break-all">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                        ID: {error.digest}
                      </p>
                    )}
                  </div>
                )}

                {/* Botones de acción */}
                <div className="space-y-3">
                  <Button
                    onClick={handleRetry}
                    disabled={isRetrying}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {isRetrying ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Reintentando...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Intentar nuevamente
                      </>
                    )}
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-950/30"
                  >
                    <Link href="/">
                      <Home className="h-4 w-4 mr-2" />
                      Ir al inicio
                    </Link>
                  </Button>
                </div>

                {/* Información adicional */}
                <div className="text-center pt-4 border-t border-red-100 dark:border-red-800">
                  <p className="text-xs text-red-600 dark:text-red-400">
                    Si el problema persiste, por favor{' '}
                    <Link
                      href="/contacto"
                      className="underline hover:no-underline font-medium"
                    >
                      contáctanos
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-xs text-red-500 dark:text-red-400">
                FinPath - Tu camino hacia la libertad financiera
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
