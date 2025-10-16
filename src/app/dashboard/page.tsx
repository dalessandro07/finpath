
import { auth } from '@/core/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage () {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) redirect('/login')

  const { user } = session

  return (
    <main>
      <h1>Dashboard</h1>

      <header>
        <p>{user.name}</p>
      </header>
    </main>
  )
}
