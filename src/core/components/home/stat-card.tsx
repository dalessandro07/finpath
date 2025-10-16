import { Card } from '@/core/components/ui/card'

interface StatCardProps {
  title: string
  value: number | string
  icon: React.ComponentType<{ className?: string }>
  description: string
}

export const StatCard = ({
  title,
  value,
  icon: Icon,
  description
}: StatCardProps) => (
  <Card className="p-8 text-center bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
    <div className="flex justify-center mb-6">
      <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg">
        <Icon className="h-8 w-8 text-white" />
      </div>
    </div>
    <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{value}</h3>
    <p className="text-lg font-semibold text-white/90 mb-2">{title}</p>
    <p className="text-sm text-white/70">{description}</p>
  </Card>
)
