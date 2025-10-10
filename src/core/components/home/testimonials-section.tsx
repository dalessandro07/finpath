import { TESTIMONIALS } from '@/core/lib/constants'
import { Star } from 'lucide-react'

export default function TestimonialsSection () {
  return (
    <section id="testimonios" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-balance">
          Lo que dicen nuestros usuarios
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Historias reales de personas que han transformado su vida financiera
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="p-8 rounded-lg border border-border/50 bg-card">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-muted-foreground mb-6 leading-relaxed">
              &quot;{testimonial.content}&quot;
            </blockquote>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mr-4">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
