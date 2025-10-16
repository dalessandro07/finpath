'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

type ToastState = {
  error?: string | number | null
  message: string
} | null | undefined

export default function useToastState (toastState: ToastState) {
  useEffect(() => {
    if (toastState) {
      toast[toastState.error ? 'error' : 'success'](toastState.message, {
        id: toastState.message,
      })
    }
  }, [toastState])
}
