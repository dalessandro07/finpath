import { auth } from '@/core/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import 'server-only'

export const verifySession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session?.user) {
    redirect('/login')
  }

  return {
    isAuthenticated: true,
    user: session.user
  }
})
