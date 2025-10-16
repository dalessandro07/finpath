import { actionGetStatistics } from '@/core/actions/transaction'
import { StatCard } from '@/core/components/home/stat-card'
import { StatsSkeleton } from '@/core/components/home/stats-skeleton'
import { formatAmount } from '@/core/lib/currency'
import { DollarSign, TrendingUp, Users } from 'lucide-react'

export default async function StatsSection () {
  const statsResult = await actionGetStatistics()

  if (!statsResult.success) {
    return (
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
  }

  const { totalUsers, totalTransactions, totalMoney } = statsResult.data

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <StatCard
            title="Usuarios Activos"
            value={totalUsers.toLocaleString()}
            icon={Users}
            description="Personas confiando en nuestra plataforma"
          />
          <StatCard
            title="Transacciones Registradas"
            value={totalTransactions.toLocaleString()}
            icon={TrendingUp}
            description="Operaciones financieras procesadas"
          />
          <StatCard
            title="Dinero Total Registrado"
            value={formatAmount(totalMoney)}
            icon={DollarSign}
            description="Capital gestionado en la plataforma"
          />
        </div>
      </div>
    </section>
  )
}
