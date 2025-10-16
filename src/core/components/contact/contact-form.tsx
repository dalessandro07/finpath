'use client'

import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { Label } from '@/core/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/ui/tabs'
import { Textarea } from '@/core/components/ui/textarea'
import { MailIcon, MessageCircleIcon } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message}`
    const phoneNumber = '51987654321' // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailSubmit = () => {
    const subject = `Consulta de ${formData.name}`
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    const emailUrl = `mailto:contacto@finpath.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(emailUrl)
  }

  return (
    <div className="bg-card rounded-lg border p-8">
      <Tabs defaultValue="whatsapp" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="whatsapp" className="flex items-center gap-2">
            <MessageCircleIcon className="h-4 w-4" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <MailIcon className="h-4 w-4" />
            Correo
          </TabsTrigger>
        </TabsList>

        <TabsContent value="whatsapp" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Contáctanos por WhatsApp</h3>
              <p className="text-muted-foreground">
                Envíanos un mensaje directo y te responderemos lo antes posible
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="whatsapp-name">Nombre completo</Label>
                <Input
                  id="whatsapp-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="whatsapp-phone">Teléfono (opcional)</Label>
                <Input
                  id="whatsapp-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+51 999 999 999"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="whatsapp-message">Mensaje</Label>
                <Textarea
                  id="whatsapp-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={4}
                  required
                />
              </div>
            </div>

            <Button onClick={handleWhatsAppSubmit} className="w-full" size="lg">
              <MessageCircleIcon className="h-4 w-4 mr-2" />
              Enviar por WhatsApp
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="email" className="mt-6">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Contáctanos por Correo</h3>
              <p className="text-muted-foreground">
                Envíanos un correo electrónico y te responderemos en 24 horas
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email-name">Nombre completo</Label>
                <Input
                  id="email-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email-email">Correo electrónico</Label>
                <Input
                  id="email-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email-phone">Teléfono (opcional)</Label>
                <Input
                  id="email-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+51 999 999 999"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email-message">Mensaje</Label>
                <Textarea
                  id="email-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={4}
                  required
                />
              </div>
            </div>

            <Button onClick={handleEmailSubmit} className="w-full" size="lg">
              <MailIcon className="h-4 w-4 mr-2" />
              Enviar por Correo
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
