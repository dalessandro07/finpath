interface BudgetSummaryProps {
  totalIncome: number
  totalExpenses: number
}

export default function BudgetSummary ({
  totalIncome,
  totalExpenses
}: BudgetSummaryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center p-3 bg-green-50 rounded-lg">
        <div className="text-2xl font-bold text-green-600">
          S/ {totalIncome.toLocaleString()}
        </div>
        <div className="text-sm text-green-700">Ingresos</div>
      </div>
      <div className="text-center p-3 bg-red-50 rounded-lg">
        <div className="text-2xl font-bold text-red-600">
          S/ {totalExpenses.toLocaleString()}
        </div>
        <div className="text-sm text-red-700">Gastos</div>
      </div>
    </div>
  )
}
