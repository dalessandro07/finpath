import type { SelectTransaction } from '@/core/db/schema'
import TransactionItem from './transaction-item'

export default function TransactionsList ({ transactions }: { transactions: SelectTransaction[] }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {transactions.length === 0 ? (
        <p className="text-center text-muted-foreground">No hay transacciones registradas</p>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  )
}
