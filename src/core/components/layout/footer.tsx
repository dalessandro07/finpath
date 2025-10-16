import { APP_NAME } from '@/core/lib/constants'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6 lowercase">
            {APP_NAME}
          </h3>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Tu camino hacia la libertad financiera comienza aquí
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Producto</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#beneficios" className="text-sm">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/#herramientas" className="text-sm">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Comunidad</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#testimonios" className="text-sm">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ayuda" className="text-sm">
                  Ayuda
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-sm">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos" className="text-sm">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-sm">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-muted pt-8 text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} {APP_NAME}. Transformando vidas financieras.
          </p>
          <p className="text-xs text-muted-foreground">
            Esta plataforma inició como proyecto final para el curso de EFSRT V en Cibertec.
          </p>
        </div>
      </div>
    </footer>
  )
}
