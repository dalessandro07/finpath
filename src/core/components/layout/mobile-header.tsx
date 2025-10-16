'use client'

import { Button } from '@/core/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/core/components/ui/sheet'
import { authClient } from '@/core/lib/auth-client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface MobileHeaderProps {
  navigationItems: Array<{
    href: string
    label: string
  }>
}

export default function MobileHeader ({ navigationItems }: MobileHeaderProps) {
  const { data: session } = authClient.useSession()
  const { user } = session ?? {}

  const firstName = user?.name?.split(' ')[0]

  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <MenuIcon className='h-5 w-5' />
          <span className='sr-only'>Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right' className="w-full sm:w-full">
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col gap-2 mt-6'>
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant='ghost'
              className='justify-start h-14 px-6 rounded-none text-lg font-normal'
              onClick={handleLinkClick}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}

          {user ? (
            <Button
              asChild
              className='mt-4 h-14 px-6 rounded-none text-lg font-normal'
              onClick={handleLinkClick}
            >
              <Link href='/dashboard'>Dashboard de {firstName}</Link>
            </Button>
          ) : (
            <Button
              asChild
              className='mt-4 h-14 px-6 rounded-none text-lg font-normal'
              onClick={handleLinkClick}
            >
              <Link href='/registro'>Comenzar Gratis</Link>
            </Button>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
