import { AlertCircle } from 'lucide-react'

interface BudgetRecommendationsProps {
  recommendations: string[]
}

export default function BudgetRecommendations ({
  recommendations
}: BudgetRecommendationsProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium flex items-center gap-2">
        <AlertCircle className="h-4 w-4" />
        Recomendaciones
      </h3>
      <div className="space-y-2">
        {recommendations.map((rec, index) => (
          <div key={index} className="text-sm p-2 bg-blue-50 rounded-md">
            {rec}
          </div>
        ))}
      </div>
    </div>
  )
}
