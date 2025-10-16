'use client'

import { Button } from '@/core/components/ui/button'
import GoogleIcon from '@/core/components/ui/icons/google-icon'
import { authClient } from '@/core/lib/auth-client'
import { useState } from 'react'
import { toast } from 'sonner'

export default function GoogleLoginButton () {

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const response = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/dashboard',
        errorCallbackURL: '/error',
      })

      if (response.error) {
        toast.error(response.error.message)
      }
    } catch (error) {
      console.error(error)
      toast.error('Error al iniciar sesión con Google')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      onClick={handleClick}
      disabled={isLoading}
      aria-label="Iniciar sesión con Google"
    >
      <GoogleIcon />
      <span>{isLoading ? 'Iniciando sesión...' : 'Continuar con Google'}</span>
    </Button>
  )
}
