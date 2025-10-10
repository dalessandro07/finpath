import { Button } from '@/core/components/ui/button'
import { APP_DESCRIPTION, APP_NAME } from '@/core/lib/constants'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 lowercase">
              {APP_NAME}
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              {APP_DESCRIPTION}
            </p>
            <div className="text-sm text-primary-foreground/60">
              <p>© {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/nosotros">Nosotros</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/servicios">Servicios</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/contacto">Contacto</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/demo">Demo</Link>
                </Button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/terminos">Términos de Servicio</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/privacidad">Política de Privacidad</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="p-0 h-auto justify-start text-primary-foreground/80 hover:text-primary-foreground">
                  <Link href="/cookies">Política de Cookies</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
