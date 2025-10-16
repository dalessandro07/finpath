import { verifySession } from '@/core/lib/dal'

export default async function DashboardPage () {
  await verifySession()

  return (
    <div className="px-5 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold">Balance</h1>
    </div>
  )
}
