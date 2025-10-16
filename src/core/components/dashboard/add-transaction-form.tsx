'use client'

import { actionCreateTransaction } from '@/core/actions/transaction'
import { Button } from '@/core/components/ui/button'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/core/components/ui/input-group'
import { Label } from '@/core/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/core/components/ui/select'
import { Spinner } from '@/core/components/ui/spinner'
import { TRANSACTION_TYPES } from '@/core/db/schema'
import useToastState from '@/core/hooks/use-toast-state'
import { BanknoteIcon, PlusIcon, ReceiptIcon } from 'lucide-react'
import Form from 'next/form'
import * as React from 'react'
import { useActionState } from 'react'

interface AddTransactionFormProps {
  onSuccess?: () => void
}

export default function AddTransactionForm ({ onSuccess }: AddTransactionFormProps) {
  const [state, formAction, isPending] = useActionState(actionCreateTransaction, null)

  useToastState(state)

  // Cerrar el dialog/drawer cuando la transacción se complete exitosamente
  React.useEffect(() => {
    if (state?.success && onSuccess) {
      onSuccess()
    }
  }, [state?.success, onSuccess])

  return (
    <Form action={formAction} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="type" className="block text-sm font-medium mb-2">
          Tipo de transacción
        </Label>

        <Select name="type" required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo de transacción" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value={TRANSACTION_TYPES.INCOME}>
              Ingreso
            </SelectItem>
            <SelectItem value={TRANSACTION_TYPES.EXPENSE}>
              Gasto
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="amount" className="block text-sm font-medium mb-2">
          Monto (S/.)
        </Label>
        <InputGroup>
          <InputGroupInput
            required
            type="number"
            name="amount"
            placeholder="0.00"
            step="0.01"
            min="0.01"
          />
          <InputGroupAddon>
            <BanknoteIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-2">
          Descripción
        </Label>
        <InputGroup>
          <InputGroupInput
            required
            type="text"
            name="description"
            placeholder="Descripción de la transacción"
          />
          <InputGroupAddon>
            <ReceiptIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
      >
        {isPending ? <Spinner /> : <PlusIcon className="w-4 h-4 mr-2" />}
        {isPending ? 'Agregando transacción...' : 'Agregar transacción'}
      </Button>
    </Form>
  )
}
