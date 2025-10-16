import { Button } from '@/core/components/ui/button'
import { APP_NAME } from '@/core/lib/constants'
import Link from 'next/link'

export default function Header () {
  return (
    <header className='flex items-center justify-between border-b-2 max-w-6xl mx-auto py-2 px-5 lg:px-0'>
      <p className='lowercase text-lg font-black text-center text-balance'>
        {APP_NAME}
      </p>

      <nav>
        <ul className='flex items-center gap-5'>
          <li>
            <Button asChild variant='link'>
              <Link href='#beneficios'>Beneficios</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant='link'>
              <Link href='#herramientas'>Herramientas</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant='link'>
              <Link href='#testimonios'>Testimonios</Link>
            </Button>
          </li>
        </ul>
      </nav>

      <Button asChild>
        <Link href='#cta'>Comenzar Gratis</Link>
      </Button>
    </header>
  )
}
