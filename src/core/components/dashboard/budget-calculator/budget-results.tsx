import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import { Separator } from '@/core/components/ui/separator'
import BudgetCategories from './budget-categories'
import BudgetRecommendations from './budget-recommendations'
import BudgetSummary from './budget-summary'

interface BudgetCategory {
  id: string
  name: string
  amount: number
  percentage: number
}

interface BudgetResultsProps {
  totalIncome: number
  totalExpenses: number
  categories: BudgetCategory[]
  recommendations: string[]
}

export default function BudgetResults ({
  totalIncome,
  totalExpenses,
  categories,
  recommendations
}: BudgetResultsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resultados del Presupuesto</CardTitle>
        <CardDescription>
          Análisis de tu situación financiera
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 max-h-[65vh] overflow-y-auto">
        <BudgetSummary
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />

        <Separator />

        <BudgetCategories
          categories={categories}
          totalIncome={totalIncome}
        />

        <Separator />

        <BudgetRecommendations recommendations={recommendations} />
      </CardContent>
    </Card>
  )
}
