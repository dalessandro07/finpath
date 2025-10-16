import TransactionsList from '@/core/components/dashboard/transactions-list'
import { db } from '@/core/db'
import { transaction } from '@/core/db/schema'
import { verifySession } from '@/core/lib/dal'
import { desc, eq } from 'drizzle-orm'

export default async function TransaccionesPage () {
  const { user } = await verifySession()

  const transactions = await db
    .select()
    .from(transaction)
    .where(eq(transaction.userId, user.id))
    .orderBy(desc(transaction.createdAt))

  return (
    <div className="w-full flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-semibold">Tu lista de transacciones</h1>
      </header>

      <TransactionsList transactions={transactions} />
    </div>
  )
}
