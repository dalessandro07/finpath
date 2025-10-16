'use client'

import { actionDeleteTransaction } from '@/core/actions/transaction'
import { Button } from '@/core/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/core/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/core/components/ui/drawer'
import { Spinner } from '@/core/components/ui/spinner'
import { useMediaQuery } from '@/core/hooks/use-media-query'
import useToastState from '@/core/hooks/use-toast-state'
import { Trash2 } from 'lucide-react'
import Form from 'next/form'
import * as React from 'react'
import { useActionState } from 'react'

interface DeleteTransactionDialogProps {
  transactionId: string
  transactionDescription?: string
}

export default function DeleteTransactionDialog ({
  transactionId,
  transactionDescription
}: DeleteTransactionDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [state, formAction, isPending] = useActionState(actionDeleteTransaction, null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useToastState(state)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Cerrar el dialog cuando la transacción se elimine exitosamente
  React.useEffect(() => {
    if (state?.success) {
      setOpen(false)
    }
  }, [state?.success])

  // Evitar error de hidratación renderizando solo después del montaje
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        disabled
        className="h-8 w-8 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    )
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Eliminar transacción</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que deseas eliminar esta transacción? Esta acción no se puede deshacer.
              {transactionDescription && (
                <span className="block mt-2 font-medium text-foreground">
                  &quot;{transactionDescription}&quot;
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isPending}
            >
              Cancelar
            </Button>
            <Form action={formAction}>
              <input type="hidden" name="id" value={transactionId} />
              <Button
                type="submit"
                variant="destructive"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Spinner className="h-4 w-4 mr-2" />
                    Eliminando...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Eliminar
                  </>
                )}
              </Button>
            </Form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Eliminar transacción</DrawerTitle>
          <DrawerDescription>
            ¿Estás seguro de que deseas eliminar esta transacción? Esta acción no se puede deshacer.
            {transactionDescription && (
              <span className="block mt-2 font-medium text-foreground">
                &quot;{transactionDescription}&quot;
              </span>
            )}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" disabled={isPending}>
              Cancelar
            </Button>
          </DrawerClose>
          <Form action={formAction}>
            <input type="hidden" name="id" value={transactionId} />
            <Button
              type="submit"
              variant="destructive"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? (
                <>
                  <Spinner className="h-4 w-4 mr-2" />
                  Eliminando...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Eliminar
                </>
              )}
            </Button>
          </Form>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
