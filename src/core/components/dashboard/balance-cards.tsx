'use client'

import type { SelectTransaction } from '@/core/db/schema'
import { formatAmount } from '@/core/lib/currency'

export default function BalanceCards ({ transactions }: { transactions: SelectTransaction[] }) {
  //* TOTAL DE INGRESOS
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  //* TOTAL DE GASTOS
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  //* BALANCE TOTAL
  const balance = totalIncome - totalExpenses

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-lg border">
        <p className="text-sm text-muted-foreground">Balance Total</p>
        <p className="text-2xl font-bold">
          {formatAmount(balance)}
        </p>
      </div>

      <div className="p-4 rounded-lg border">
        <p className="text-sm text-muted-foreground">Ingresos</p>
        <p className="text-2xl font-bold">
          {formatAmount(totalIncome)}
        </p>
      </div>

      <div className="p-4 rounded-lg border">
        <p className="text-sm text-muted-foreground">Gastos</p>
        <p className="text-2xl font-bold">
          {formatAmount(totalExpenses)}
        </p>
      </div>
    </div>
  )
}
