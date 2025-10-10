import { FEATURES } from '@/core/lib/constants'
import Image from 'next/image'

export default function FeaturesSection () {
  return (
    <section id="herramientas" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-balance">
          Herramientas que te ayudan a crecer
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Todo lo que necesitas para transformar tu vida financiera en un solo lugar
        </p>
      </div>

      <div className="space-y-24">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
          >
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <h3 className="text-3xl font-bold mb-4 text-balance">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={feature.image}
                  alt={feature.title}
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
