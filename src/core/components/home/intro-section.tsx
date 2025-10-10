import { INTRO_CONTENT } from '@/core/lib/constants'

export default function IntroSection () {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-5xl font-bold mb-8 text-balance">
        {INTRO_CONTENT.title}
      </h2>

      <p className="text-xl text-muted-foreground mb-16 leading-relaxed max-w-3xl mx-auto">
        {INTRO_CONTENT.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {INTRO_CONTENT.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">
              {stat.number}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
