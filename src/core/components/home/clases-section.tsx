import { CLASES } from '@/core/lib/constants'
import Image from 'next/image'

export default function ClasesSection () {
  return (
    <section id="clases" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-balance">
          Clases útiles para mejorar tus finanzas
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Aprende a manejar tu dinero y a construir el futuro que deseas, paso a paso.
        </p>
      </div>

      <div className="space-y-24">
        {CLASES.map((clase, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
          >
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <h3 className="text-3xl font-bold mb-4 text-balance">
                {clase.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {clase.description}
              </p>
            </div>

            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={clase.image}
                  alt={clase.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
