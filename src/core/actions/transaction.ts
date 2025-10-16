'use server'

import { db } from '@/core/db'
import { transaction, TRANSACTION_STATUS, TRANSACTION_TYPES, user } from '@/core/db/schema'
import { verifySession } from '@/core/lib/dal'
import { desc, eq, sql } from 'drizzle-orm'
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
      description,
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

//* UPDATE TRANSACTION
export async function actionUpdateTransaction (initialState: unknown, formData: FormData) {
  const { user } = await verifySession()

  const id = formData.get('id') as string
  const amount = formData.get('amount') as string
  const type = formData.get('type') as TransactionType
  const description = formData.get('description') as string

  // Validaciones
  if (!id || !amount || !type || !description) {
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

  try {
    // Verificar que la transacción pertenece al usuario antes de actualizar
    const existingTransaction = await db
      .select()
      .from(transaction)
      .where(eq(transaction.id, id))
      .limit(1)

    if (existingTransaction.length === 0) {
      return {
        error: 404,
        message: 'Transacción no encontrada'
      }
    }

    if (existingTransaction[0].userId !== user.id) {
      return {
        error: 403,
        message: 'No tienes permisos para editar esta transacción'
      }
    }

    // Convertir el monto a centavos para almacenamiento
    const amountInCents = Math.round(amountNumber * 100)

    const updatedTransaction = await db
      .update(transaction)
      .set({
        amount: amountInCents,
        description,
        type,
        updatedAt: new Date()
      })
      .where(eq(transaction.id, id))
      .returning()

    revalidatePath('/dashboard')

    return {
      success: true,
      message: 'Transacción actualizada exitosamente',
      data: updatedTransaction[0]
    }
  } catch (error) {
    console.error('Error updating transaction:', error)
    return {
      error: 500,
      message: 'Error al actualizar la transacción'
    }
  }
}

//* DELETE TRANSACTION
export async function actionDeleteTransaction (initialState: unknown, formData: FormData) {
  const { user } = await verifySession()
  const id = formData.get('id') as string

  // Validaciones
  if (!id) {
    return {
      error: 400,
      message: 'ID de transacción requerido'
    }
  }

  try {
    // Verificar que la transacción pertenece al usuario antes de eliminar
    const existingTransaction = await db
      .select()
      .from(transaction)
      .where(eq(transaction.id, id))
      .limit(1)

    if (existingTransaction.length === 0) {
      return {
        error: 404,
        message: 'Transacción no encontrada'
      }
    }

    if (existingTransaction[0].userId !== user.id) {
      return {
        error: 403,
        message: 'No tienes permisos para eliminar esta transacción'
      }
    }

    // Eliminar la transacción
    await db.delete(transaction).where(eq(transaction.id, id))
    revalidatePath('/dashboard')

    return {
      success: true,
      message: 'Transacción eliminada exitosamente'
    }
  } catch (error) {
    console.error('Error deleting transaction:', error)
    return {
      error: 500,
      message: 'Error al eliminar la transacción'
    }
  }
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

//* GET STATISTICS
export async function actionGetStatistics () {
  try {
    const userCountResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(user)
      .where(eq(user.isActive, true))

    const transactionCountResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(transaction)

    // Calcular el total de dinero registrado (suma absoluta de todos los montos)
    const totalMoneyResult = await db
      .select({
        total: sql<number>`sum(amount)`
      })
      .from(transaction)

    const userCount = userCountResult[0]?.count || 0
    const transactionCount = transactionCountResult[0]?.count || 0
    const totalMoney = totalMoneyResult[0]?.total || 0

    return {
      success: true,
      data: {
        totalUsers: userCount,
        totalTransactions: transactionCount,
        totalMoney: totalMoney
      }
    }
  } catch (error) {
    console.error('Error fetching statistics:', error)
    return {
      error: 500,
      message: 'Error al obtener las estadísticas'
    }
  }
}
