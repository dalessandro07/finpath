import { Card, CardContent } from '@/core/components/ui/card'
import type { SelectTransaction } from '@/core/db/schema'
import { formatAmount } from '@/core/lib/currency'
import { formatDate, formatTime } from '@/core/lib/dates'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import DeleteTransactionDialog from './delete-transaction-dialog'
import EditTransactionDialog from './edit-transaction-dialog'

interface TransactionItemProps {
  transaction: SelectTransaction
}

export default function TransactionItem ({ transaction }: TransactionItemProps) {
  const isIncome = transaction.type === 'income'
  const Icon = isIncome ? ArrowUpCircle : ArrowDownCircle
  const iconColor = isIncome ? 'text-green-500' : 'text-red-500'

  // Verificar si la transacción ha sido actualizada
  const hasBeenUpdated = transaction.updatedAt && transaction.createdAt &&
    new Date(transaction.updatedAt).getTime() > new Date(transaction.createdAt).getTime()

  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center w-full">
          {/* Icono */}
          <div className="flex-shrink-0">
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

          {/* Descripción y fecha */}
          <div className="flex-1 mx-4 min-w-0">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">
                  {transaction.description}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {transaction.type === 'income' ? 'Ingreso' : 'Gasto'}
                </p>
              </div>

              <div className="flex-shrink-0 ml-4 text-center">
                {hasBeenUpdated ? (
                  <>
                    <p className="text-xs text-muted-foreground uppercase">
                      {transaction.updatedAt ? formatDate(transaction.updatedAt, {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      }) : 'N/A'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Editado: {transaction.updatedAt ? formatTime(transaction.updatedAt) : 'N/A'}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs text-muted-foreground uppercase">
                      {transaction.createdAt ? formatDate(transaction.createdAt, {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      }) : 'N/A'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      A las: {transaction.createdAt ? formatTime(transaction.createdAt) : 'N/A'}
                    </p>
                  </>
                )}
              </div>

              <p className={`font-semibold text-sm ${isIncome ? 'text-green-600' : 'text-red-600'}`}>
                {isIncome ? '+' : '-'}{formatAmount(transaction.amount)}
              </p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <EditTransactionDialog transaction={transaction} />
            <DeleteTransactionDialog
              transactionId={transaction.id}
              transactionDescription={transaction.description}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
