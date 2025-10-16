'use client'

import { actionLogout } from '@/core/actions/auth'
import { Button } from '@/core/components/ui/button'
import { Spinner } from '@/core/components/ui/spinner'
import { LogOut } from 'lucide-react'
import Form from 'next/form'
import { useActionState } from 'react'

export default function BtnLogout () {
  const [, formAction, isPending] = useActionState(actionLogout, null)

  return (
    <Form action={formAction}>
      <Button variant="destructive" type="submit" disabled={isPending}>
        {isPending ? 'Cerrando sesión...' : 'Cerrar sesión'}
        {isPending ? <Spinner /> : <LogOut className="w-5 h-5 ml-2" />}
      </Button>
    </Form>
  )
}
