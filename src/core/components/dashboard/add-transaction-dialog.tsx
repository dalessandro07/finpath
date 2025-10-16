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
import { useMediaQuery } from '@/core/hooks/use-media-query'
import { PlusIcon } from 'lucide-react'
import * as React from 'react'
import AddTransactionForm from './add-transaction-form'

export default function AddTransactionDialog () {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Evitar error de hidratación renderizando solo después del montaje
  if (!mounted) {
    return (
      <Button className="w-full sm:w-auto" disabled>
        <PlusIcon className="w-4 h-4 mr-2" />
        Agregar transacción
      </Button>
    )
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full sm:w-auto">
            <PlusIcon className="w-4 h-4 mr-2" />
            Agregar transacción
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Agregar transacción</DialogTitle>
            <DialogDescription>
              Registra una nueva transacción de ingreso o gasto en tu cuenta.
            </DialogDescription>
          </DialogHeader>
          <AddTransactionForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="w-full sm:w-auto">
          <PlusIcon className="w-4 h-4 mr-2" />
          Agregar transacción
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Agregar transacción</DrawerTitle>
          <DrawerDescription>
            Registra una nueva transacción de ingreso o gasto en tu cuenta.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <AddTransactionForm onSuccess={() => setOpen(false)} />
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
