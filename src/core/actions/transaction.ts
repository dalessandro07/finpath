'use server'

import { db } from '@/core/db'
import { transaction, TRANSACTION_STATUS, TRANSACTION_TYPES } from '@/core/db/schema'
import { verifySession } from '@/core/lib/dal'
import { desc, eq } from 'drizzle-orm'
import { nanoid } from 'nanoid'
import { revalidatePath } from 'next/cache'

export type TransactionType = typeof TRANSACTION_TYPES[keyof typeof TRANSACTION_TYPES]
export type TransactionStatus = typeof TRANSACTION_STATUS[keyof typeof TRANSACTION_STATUS]

//* CREATE TRANSACTION
export async function actionCreateTransaction (initialState: unknown, formData: FormData) {
  const { user } = await verifySession()

  const amount = formData.get('amount') as string
  const type = formData.get('type') as TransactionType
  const description = formData.get('description') as string

  // Validaciones
  if (!amount || !type || !description) {
    return {
      error: 400,
      message: 'Todos los campos son requeridos'
    }
  }

  const amountNumber = parseFloat(amount)
  if (isNaN(amountNumber) || amountNumber <= 0) {
    return {
      error: 400,
      message: 'El monto debe ser un número válido mayor a 0'
    }
  }

  if (!Object.values(TRANSACTION_TYPES).includes(type)) {
    return {
      error: 400,
      message: 'Tipo de transacción inválido'
    }
  }

  let result

  try {
    // Convertir el monto a centavos para almacenamiento
    const amountInCents = Math.round(amountNumber * 100)

    const newTransaction = await db.insert(transaction).values({
      id: nanoid(),
      userId: user.id,
      amount: amountInCents,
      type,
      status: TRANSACTION_STATUS.COMPLETED,
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning()

    result = {
      success: true,
      message: 'Transacción creada exitosamente',
      data: newTransaction[0]
    }
  } catch (error) {
    console.error('Error creating transaction:', error)
    result = {
      error: 500,
      message: 'Error al crear la transacción'
    }
  } finally {
    revalidatePath('/dashboard')
  }

  return result
}

//* GET USER TRANSACTIONS
export async function actionGetUserTransactions () {
  const { user } = await verifySession()

  try {
    const transactions = await db
      .select()
      .from(transaction)
      .where(eq(transaction.userId, user.id))
      .orderBy(desc(transaction.createdAt))

    return {
      success: true,
      data: transactions
    }
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return {
      error: 500,
      message: 'Error al obtener las transacciones'
    }
  }
}
