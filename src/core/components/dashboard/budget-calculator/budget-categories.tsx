import { TrendingDown, TrendingUp } from 'lucide-react'

interface BudgetCategory {
  id: string
  name: string
  amount: number
  percentage: number
}

interface BudgetCategoriesProps {
  categories: BudgetCategory[]
  totalIncome: number
}

export default function BudgetCategories ({
  categories,
  totalIncome
}: BudgetCategoriesProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">Distribución de Gastos</h3>
      {categories.map((category) => {
        const percentage = totalIncome > 0 ? (category.amount / totalIncome) * 100 : 0
        const isOverBudget = percentage > category.percentage + 5
        const isUnderBudget = percentage < category.percentage - 5

        return (
          <div key={category.id} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{category.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {percentage.toFixed(1)}%
                </span>
                {isOverBudget && <TrendingUp className="h-4 w-4 text-red-500" />}
                {isUnderBudget && <TrendingDown className="h-4 w-4 text-green-500" />}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${isOverBudget ? 'bg-red-500' : isUnderBudget ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              S/ {category.amount.toLocaleString()} / S/ {((totalIncome * category.percentage) / 100).toLocaleString()} recomendado
            </div>
          </div>
        )
      })}
    </div>
  )
}
