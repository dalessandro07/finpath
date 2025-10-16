'use client'

import { Button } from '@/core/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import type { SelectTransaction } from '@/core/db/schema'
import { useMediaQuery } from '@/core/hooks/use-media-query'
import { EditIcon } from 'lucide-react'
import * as React from 'react'
import EditTransactionForm from './edit-transaction-form'

interface EditTransactionDialogProps {
  transaction: SelectTransaction
}

export default function EditTransactionDialog ({ transaction }: EditTransactionDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Evitar error de hidratación renderizando solo después del montaje
  if (!mounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        <EditIcon className="w-4 h-4" />
      </Button>
    )
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-600 hover:bg-blue-600/10 transition-colors">
            <EditIcon className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar transacción</DialogTitle>
            <DialogDescription>
              Modifica los datos de tu transacción.
            </DialogDescription>
          </DialogHeader>
          <EditTransactionForm
            transaction={transaction}
            onSuccess={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-blue-600 hover:bg-blue-600/10 transition-colors">
          <EditIcon className="w-4 h-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Editar transacción</DrawerTitle>
          <DrawerDescription>
            Modifica los datos de tu transacción.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <EditTransactionForm
            transaction={transaction}
            onSuccess={() => setOpen(false)}
          />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
