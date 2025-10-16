'use server'

import { auth } from '@/core/lib/auth'
import { redirect } from 'next/navigation'

//* LOGIN
export async function actionLogin (initialState: unknown, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return {
      error: 400,
      message: 'Correo electrónico y contraseña son requeridos'
    }
  }

  let isSuccess = false
  let result

  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password
      },
      asResponse: true
    })

    const data = await response.json()

    if (!response.ok) {
      result = {
        error: response.status,
        message: data.message
      }
    } else {
      isSuccess = true
    }
  } catch (error) {
    console.error(error)

    result = {
      error: 500,
      message: 'Error al iniciar sesión'
    }
  }

  if (isSuccess) {
    redirect('/dashboard')
  }

  return result
}

//* REGISTER
export async function actionRegister (initialState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  const terms = formData.get('terms') === 'on'

  if (!name || !email || !password || !confirmPassword || !terms) {
    return {
      error: 400,
      message: 'Nombre, correo electrónico, contraseña y términos son requeridos'
    }
  }

  if (password !== confirmPassword) {
    return {
      error: 400,
      message: 'Las contraseñas no coinciden'
    }
  }

  if (!terms) {
    return {
      error: 400,
      message: 'Acepta los términos y condiciones'
    }
  }

  let isSuccess = false
  let result

  try {
    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password
      },
      asResponse: true
    })

    const data = await response.json()

    if (!response.ok) {
      result = {
        error: response.status,
        message: data.message
      }
    } else {
      isSuccess = true
    }
  } catch (error) {
    console.error(error)

    result = {
      error: 500,
      message: 'Error al registrar usuario'
    }
  }

  if (isSuccess) {
    redirect('/dashboard')
  }

  return result
}
