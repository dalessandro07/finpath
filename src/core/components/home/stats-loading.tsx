import { StatsSkeleton } from '@/core/components/home/stats-skeleton'

export const StatsLoading = () => (
  <section className="py-20 bg-gradient-to-br from-primary via-slate-800 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
    <div className="relative">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Estadísticas de la Plataforma
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Descubre el impacto de nuestra plataforma en la gestión financiera
        </p>
      </div>
      <StatsSkeleton />
    </div>
  </section>
)
