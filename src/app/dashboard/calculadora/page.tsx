'use client'

import { BudgetForm, BudgetResults } from '@/core/components/dashboard/budget-calculator'
import { Calculator } from 'lucide-react'
import { useState } from 'react'

interface BudgetCategory {
  id: string
  name: string
  amount: number
  percentage: number
}

interface BudgetResult {
  totalIncome: number
  totalExpenses: number
  balance: number
  categories: BudgetCategory[]
  recommendations: string[]
}

const defaultCategories = [
  { id: 'housing', name: 'Vivienda', amount: 0, percentage: 30 },
  { id: 'food', name: 'Alimentación', amount: 0, percentage: 15 },
  { id: 'transport', name: 'Transporte', amount: 0, percentage: 10 },
  { id: 'utilities', name: 'Servicios', amount: 0, percentage: 8 },
  { id: 'health', name: 'Salud', amount: 0, percentage: 5 },
  { id: 'entertainment', name: 'Entretenimiento', amount: 0, percentage: 5 },
  { id: 'savings', name: 'Ahorros', amount: 0, percentage: 20 },
  { id: 'other', name: 'Otros', amount: 0, percentage: 7 }
]

export default function CalculadoraPage () {
  const [income, setIncome] = useState<number>(0)
  const [categories, setCategories] = useState<BudgetCategory[]>(defaultCategories)
  const [result, setResult] = useState<BudgetResult | null>(null)

  const handleIncomeChange = (value: string) => {
    const numValue = parseFloat(value) || 0
    setIncome(numValue)

    // Actualizar montos basados en porcentajes recomendados
    const updatedCategories = categories.map(cat => ({
      ...cat,
      amount: Math.round((numValue * cat.percentage) / 100)
    }))
    setCategories(updatedCategories)
  }

  const handleCategoryChange = (id: string, amount: number) => {
    const updatedCategories = categories.map(cat =>
      cat.id === id ? { ...cat, amount } : cat
    )
    setCategories(updatedCategories)
  }

  const calculateBudget = () => {
    const totalExpenses = categories.reduce((sum, cat) => sum + cat.amount, 0)
    const balance = income - totalExpenses

    const recommendations: string[] = []

    // Validación básica
    if (income <= 0) {
      recommendations.push('⚠️ Por favor ingresa un monto de ingresos válido.')
      setResult({
        totalIncome: income,
        totalExpenses,
        balance,
        categories,
        recommendations
      })
      return
    }

    // Análisis de balance con más detalle
    const balancePercentage = (balance / income) * 100

    if (balance < 0) {
      const deficitAmount = Math.abs(balance)
      recommendations.push(`🚨 DÉFICIT: Tienes un déficit de S/ ${deficitAmount.toLocaleString()}. Necesitas reducir gastos o aumentar ingresos.`)
      recommendations.push('💡 Sugerencia: Revisa tus gastos en entretenimiento y otros gastos no esenciales.')
    } else if (balancePercentage > 20) {
      recommendations.push('🎉 EXCELENTE: Tienes un superávit del ' + balancePercentage.toFixed(1) + '%. ¡Sigue así!')
      recommendations.push('💡 Sugerencia: Considera invertir el exceso en fondos de emergencia o inversiones.')
    } else if (balancePercentage > 10) {
      recommendations.push('✅ BUENO: Tienes un superávit del ' + balancePercentage.toFixed(1) + '%. Mantén este nivel.')
    } else if (balancePercentage > 0) {
      recommendations.push('⚠️ JUSTO: Tienes un pequeño superávit del ' + balancePercentage.toFixed(1) + '%. Considera aumentar tus ahorros.')
    } else {
      recommendations.push('⚖️ EQUILIBRADO: Tus ingresos y gastos están balanceados.')
    }

    // Análisis detallado por categorías
    categories.forEach(cat => {
      if (cat.amount > 0) {
        const actualPercentage = (cat.amount / income) * 100
        const difference = actualPercentage - cat.percentage
        const recommendedAmount = (income * cat.percentage) / 100

        if (difference > 10) {
          const excess = cat.amount - recommendedAmount
          recommendations.push(`📈 ${cat.name}: Estás gastando S/ ${excess.toLocaleString()} más de lo recomendado (${difference.toFixed(1)}% extra).`)

          // Recomendaciones específicas por categoría
          if (cat.id === 'housing') {
            recommendations.push('🏠 Considera buscar opciones de vivienda más económicas o compartir gastos.')
          } else if (cat.id === 'food') {
            recommendations.push('🍽️ Revisa tus gastos en restaurantes y considera cocinar más en casa.')
          } else if (cat.id === 'transport') {
            recommendations.push('🚗 Evalúa usar transporte público o compartir viajes para reducir costos.')
          } else if (cat.id === 'entertainment') {
            recommendations.push('🎬 Busca opciones de entretenimiento más económicas o gratuitas.')
          }
        } else if (difference < -10) {
          const savings = recommendedAmount - cat.amount
          recommendations.push(`📉 ${cat.name}: Estás gastando S/ ${savings.toLocaleString()} menos de lo recomendado.`)

          if (cat.id === 'savings') {
            recommendations.push('💰 Excelente oportunidad para aumentar tus ahorros e inversiones.')
          } else if (cat.id === 'health') {
            recommendations.push('🏥 Considera invertir más en tu salud y bienestar.')
          }
        } else if (Math.abs(difference) <= 5) {
          recommendations.push(`✅ ${cat.name}: Tu gasto está dentro del rango recomendado.`)
        }
      }
    })

    // Recomendaciones específicas por situación financiera
    const housingAmount = categories.find(c => c.id === 'housing')?.amount || 0
    const savingsAmount = categories.find(c => c.id === 'savings')?.amount || 0
    const foodAmount = categories.find(c => c.id === 'food')?.amount || 0
    const entertainmentAmount = categories.find(c => c.id === 'entertainment')?.amount || 0

    // Análisis de vivienda
    if (housingAmount > income * 0.4) {
      recommendations.push('🏠 ALERTA: Tu vivienda representa más del 40% de tus ingresos. Considera opciones más económicas.')
    }

    // Análisis de ahorros
    if (savingsAmount < income * 0.1) {
      recommendations.push('💰 AHORROS: Intenta ahorrar al menos el 10% de tus ingresos para emergencias.')
    } else if (savingsAmount > income * 0.3) {
      recommendations.push('💎 EXCELENTE: Tienes una excelente tasa de ahorro. Considera inversiones.')
    }

    // Análisis de alimentación
    if (foodAmount > income * 0.2) {
      recommendations.push('🍽️ ALIMENTACIÓN: Considera planificar comidas y comprar en ofertas para reducir gastos.')
    }

    // Análisis de entretenimiento
    if (entertainmentAmount > income * 0.1) {
      recommendations.push('🎬 ENTRETENIMIENTO: Busca actividades gratuitas o de bajo costo para reducir gastos.')
    }

    // Recomendaciones generales basadas en el balance
    if (balance > income * 0.15) {
      recommendations.push('🎯 META: Considera establecer objetivos financieros a largo plazo.')
    } else if (balance < 0) {
      recommendations.push('📊 PRIORIDAD: Crea un plan de reducción de gastos paso a paso.')
    }

    // Si no hay recomendaciones específicas, dar consejos generales
    if (recommendations.length <= 2) {
      recommendations.push('💡 CONSEJO: Revisa regularmente tus gastos y ajusta tu presupuesto según tus necesidades.')
      recommendations.push('📈 SUGERENCIA: Considera crear un fondo de emergencia equivalente a 3-6 meses de gastos.')
    }

    setResult({
      totalIncome: income,
      totalExpenses,
      balance,
      categories,
      recommendations
    })
  }

  const resetBudget = () => {
    setIncome(0)
    setCategories(defaultCategories)
    setResult(null)
  }


  return (
    <div className="w-full flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          Calculadora de Presupuesto
        </h1>
        <p className="text-sm text-muted-foreground">
          Planifica y gestiona tus finanzas personales
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetForm
          income={income}
          categories={categories}
          onIncomeChange={handleIncomeChange}
          onCategoryChange={handleCategoryChange}
          onCalculate={calculateBudget}
          onReset={resetBudget}
        />

        {result && (
          <BudgetResults
            totalIncome={result.totalIncome}
            totalExpenses={result.totalExpenses}
            categories={result.categories}
            recommendations={result.recommendations}
          />
        )}
      </div>
    </div>
  )
}
