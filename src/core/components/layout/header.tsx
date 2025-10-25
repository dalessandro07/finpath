'use client'

import { Button } from '@/core/components/ui/button'
import Logo from '@/core/components/ui/logo'
import { useIsMobile } from '@/core/hooks/use-mobile'
import { authClient } from '@/core/lib/auth-client'
import Link from 'next/link'
import MobileHeader from './mobile-header'

export default function Header () {
  const isMobile = useIsMobile()

  const { data: session } = authClient.useSession()
  const { user } = session ?? {}
  const firstName = user?.name?.split(' ')[0]

  const navigationItems = [
    { href: '/#beneficios', label: 'Beneficios' },
    { href: '/#herramientas', label: 'Herramientas' },
    { href: '/#clases', label: 'Clases' },
    { href: '/#testimonios', label: 'Testimonios' },
    { href: '/#clases', label: 'Clases' },
    { href: '/contacto', label: 'Contacto' }
  ]

  return (
    <header className='sticky top-0 z-50 bg-background flex items-center justify-between border-b-2 py-2 px-5 lg:px-7'>
      <Logo href='/' />

      {isMobile ? (
        <MobileHeader navigationItems={navigationItems} />
      ) : (
        <>
          <nav>
            <ul className='flex items-center gap-5'>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Button asChild variant='link'>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {!user ? (
            <Button asChild>
              <Link href='/registro'>Comenzar Gratis</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href='/dashboard'>Dashboard de {firstName}</Link>
            </Button>
          )}
        </>
      )}
    </header>
  )
}