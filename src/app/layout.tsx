import { Toaster } from '@/core/components/ui/sonner'
import { APP_DESCRIPTION, APP_NAME } from '@/core/lib/constants'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <div>
          {children}
        </div>
        <Toaster richColors />
      </body>
    </html>
  )
}
