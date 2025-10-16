'use client'

import { actionLogin } from '@/core/actions/auth'
import { Button } from '@/core/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/core/components/ui/input-group'
import { Label } from '@/core/components/ui/label'
import { Spinner } from '@/core/components/ui/spinner'
import useToastState from '@/core/hooks/use-toast-state'
import { ArrowRightIcon, LockIcon, MailIcon } from 'lucide-react'
import Form from 'next/form'
import Link from 'next/link'
import { useActionState } from 'react'
import GoogleLoginButton from './google-login-button'

export default function LoginForm () {
  const [state, formAction, isPending] = useActionState(actionLogin, null)

  useToastState(state)

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Iniciar Sesión</h1>
        <p className="text-muted-foreground">
          Accede a tu cuenta de FinPath
        </p>
      </div>

      <div className="mb-6">
        <GoogleLoginButton />
      </div>

      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              O usa tu correo
            </span>
          </div>
        </div>
      </div>

      <Form action={formAction} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-2">
              Correo electrónico
            </Label>
            <div className="relative">
              <InputGroup>
                <InputGroupInput required type="email" name="email" placeholder="Tu correo electrónico" />
                <InputGroupAddon>
                  <MailIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="block text-sm font-medium mb-2">
              Contraseña
            </Label>
            <div className="relative">
              <InputGroup>
                <InputGroupInput required type="password" name="password" placeholder="Tu contraseña" />
                <InputGroupAddon>
                  <LockIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          {isPending ? <Spinner /> : <ArrowRightIcon className="w-5 h-5 ml-2" />}
        </Button>
      </Form>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          ¿No tienes cuenta?{' '}
          <Link href="/registro" className="text-primary hover:underline font-medium">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div >
  )
}
