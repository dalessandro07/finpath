import { Card, CardContent } from '@/core/components/ui/card'
import type { SelectTransaction } from '@/core/db/schema'
import { formatAmount } from '@/core/lib/currency'
import { formatDate, formatTime } from '@/core/lib/dates'

export default function TransactionsList ({ transactions }: { transactions: SelectTransaction[] }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {transactions.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No hay transacciones registradas</p>
          </CardContent>
        </Card>
      ) : (
        transactions.map((transaction) => (
          <Card key={transaction.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                  <div>
                    <p className="font-medium">
                      {formatAmount(transaction.amount)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    {transaction.createdAt ? formatDate(transaction.createdAt) : 'N/A'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.createdAt ? formatTime(transaction.createdAt) : 'N/A'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
