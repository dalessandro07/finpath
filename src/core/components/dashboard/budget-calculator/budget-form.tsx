'use client'

import { Badge } from '@/core/components/ui/badge'
import { Button } from '@/core/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/core/components/ui/card'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { Separator } from '@/core/components/ui/separator'
import { Calculator } from 'lucide-react'

interface BudgetCategory {
  id: string
  name: string
  amount: number
  percentage: number
}

interface BudgetFormProps {
  income: number
  categories: BudgetCategory[]
  onIncomeChange: (value: string) => void
  onCategoryChange: (id: string, amount: number) => void
  onCalculate: () => void
  onReset: () => void
}

export default function BudgetForm ({
  income,
  categories,
  onIncomeChange,
  onCategoryChange,
  onCalculate,
  onReset
}: BudgetFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuración del Presupuesto</CardTitle>
        <CardDescription>
          Ingresa tus ingresos mensuales y ajusta las categorías según tus necesidades
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="income">Ingresos Mensuales (S/)</Label>
          <Input
            id="income"
            type="number"
            placeholder="0"
            value={income || ''}
            onChange={(e) => onIncomeChange(e.target.value)}
          />
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Categorías de Gastos</h3>
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor={category.id} className="text-sm">
                  {category.name}
                </Label>
                <Badge variant="outline" className="text-xs">
                  {category.percentage}% recomendado
                </Badge>
              </div>
              <Input
                id={category.id}
                type="number"
                placeholder="0"
                value={category.amount || ''}
                onChange={(e) => onCategoryChange(category.id, parseFloat(e.target.value) || 0)}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button onClick={onCalculate} className="flex-1">
            <Calculator className="h-4 w-4 mr-2" />
            Calcular Presupuesto
          </Button>
          <Button variant="outline" onClick={onReset}>
            Limpiar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
