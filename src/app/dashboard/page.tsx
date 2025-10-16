import AddTransactionDialog from '@/core/components/dashboard/add-transaction-dialog'
import BalanceCards from '@/core/components/dashboard/balance-cards'
import TransactionsList from '@/core/components/dashboard/transactions-list'
import { db } from '@/core/db'
import { transaction } from '@/core/db/schema'
import { verifySession } from '@/core/lib/dal'
import { desc, eq } from 'drizzle-orm'

export default async function DashboardPage () {
  const { user } = await verifySession()

  const firstName = user.name?.split(' ')[0]

  const transactions = await db
    .select()
    .from(transaction)
    .where(eq(transaction.userId, user.id))
    .orderBy(desc(transaction.createdAt))

  return (
    <div className="w-full flex flex-col gap-5">
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Bienvenido, {firstName}
        </p>
      </header>

      <BalanceCards transactions={transactions} />

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Transacciones</h2>
        <AddTransactionDialog />
        <TransactionsList transactions={transactions} />
      </section>
    </div>
  )
}
