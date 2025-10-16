'use client'

import { actionRegister } from '@/core/actions/auth'
import { Button } from '@/core/components/ui/button'
import { Checkbox } from '@/core/components/ui/checkbox'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/core/components/ui/input-group'
import { Label } from '@/core/components/ui/label'
import { Spinner } from '@/core/components/ui/spinner'
import useToastState from '@/core/hooks/use-toast-state'
import { ArrowRightIcon, LockIcon, MailIcon, UserIcon } from 'lucide-react'

import Form from 'next/form'
import Link from 'next/link'
import { useActionState } from 'react'

export default function RegisterForm () {
  const [state, formAction, isPending] = useActionState(actionRegister, null)

  useToastState(state)

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Crear Cuenta</h1>
        <p className="text-muted-foreground">
          Comienza tu camino hacia la libertad financiera
        </p>
      </div>

      <Form action={formAction} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium mb-2">
              Nombre completo
            </Label>
            <InputGroup>
              <InputGroupInput required type="text" name="name" placeholder="Tu nombre completo" />
              <InputGroupAddon>
                <UserIcon />
              </InputGroupAddon>
            </InputGroup>
          </div>

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

          <div>
            <Label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirmar contraseña
            </Label>
            <div className="relative">
              <InputGroup>
                <InputGroupInput required type="password" name="confirmPassword" placeholder="Tu contraseña" />
                <InputGroupAddon>
                  <LockIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <Checkbox
              name="terms"
              required
              className="w-4 h-4 text-primary border-border rounded focus:ring-ring mt-1"
            />
            <span className="text-sm text-muted-foreground">
              Acepto los{' '}
              <Link href="/terminos" target="_blank" className="text-primary hover:underline">
                Términos de Servicio
              </Link>{' '}
              y la{' '}
              <Link href="/privacidad" target="_blank" className="text-primary hover:underline">
                Política de Privacidad
              </Link>
            </span>
          </label>

          <label className="flex items-center gap-2">
            <Checkbox
              name="newsletter"
              className="w-4 h-4 text-primary border-border rounded focus:ring-ring mt-1"
            />
            <span className="text-sm text-muted-foreground">
              Quiero recibir consejos financieros y actualizaciones por email
            </span>
          </label>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? 'Creando cuenta...' : 'Crear Cuenta'}
          {isPending ? <Spinner /> : <ArrowRightIcon className="w-5 h-5" />}
        </Button>
      </Form>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  )
}
