import { BENEFITS } from '@/core/lib/constants'
import { GraduationCap, Shield, Target, TrendingUp } from 'lucide-react'

const iconMap = {
  GraduationCap,
  Target,
  Shield,
  TrendingUp
}

export default function BenefitsSection () {
  return (
    <section id="beneficios" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-balance">
          ¿Por qué elegir FinPath?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubre las ventajas que nos hacen la mejor opción para tu educación financiera
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]

          return (
            <div key={index} className="text-center p-6 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary">
                <IconComponent className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
