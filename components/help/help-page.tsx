"use client"

import { useState } from "react"
import { 
  MessageSquare, 
  TicketPlus, 
  Phone, 
  Mail, 
  Upload,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ExternalLink
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function HelpPage() {
  const [ticketForm, setTicketForm] = useState({
    title: "",
    description: "",
    category: "",
    screenshot: null as File | null
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTicketForm({ ...ticketForm, screenshot: e.target.files[0] })
    }
  }

  const systemStatus = {
    api: { status: "operational", label: "API" },
    database: { status: "operational", label: "Base de Datos" },
    auth: { status: "operational", label: "Autenticación" },
    notifications: { status: "degraded", label: "Notificaciones" }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Centro de Ayuda</h1>
          <p className="text-muted-foreground">
            Encuentra ayuda y soporte para FuelGuard
          </p>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-700">Tu ticket ha sido enviado correctamente</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Chat Support */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <CardTitle>Chat en Vivo</CardTitle>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                  En línea
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Nuestro equipo de soporte está disponible para ayudarte en tiempo real.
              </p>
              <Button className="w-full">
                Iniciar Chat
              </Button>
            </CardContent>
          </Card>

          {/* Ticket Form */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <TicketPlus className="w-5 h-5 text-primary" />
                <CardTitle>Crear Ticket de Soporte</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Título del Problema
                  </label>
                  <Input
                    value={ticketForm.title}
                    onChange={(e) => setTicketForm({ ...ticketForm, title: e.target.value })}
                    placeholder="Ej: Error al cargar dashboard"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Categoría
                  </label>
                  <Select
                    value={ticketForm.category}
                    onValueChange={(value) => setTicketForm({ ...ticketForm, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Problema técnico</SelectItem>
                      <SelectItem value="access">Acceso y permisos</SelectItem>
                      <SelectItem value="feature">Solicitud de mejora</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Descripción Detallada
                  </label>
                  <Textarea
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                    placeholder="Describe el problema con el mayor detalle posible..."
                    required
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Adjuntar Captura de Pantalla (opcional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg border-muted">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                      <div className="flex text-sm">
                        <label className="relative cursor-pointer text-primary hover:text-primary/80">
                          <span>Subir archivo</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1 text-muted-foreground">o arrastra y suelta</p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG hasta 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Enviar Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">soporte@fuelguard.com</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Horario de atención:<br />
                Lun-Vie: 9:00 - 18:00<br />
                Sáb: 9:00 - 13:00
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle>Estado del Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(systemStatus).map(([key, { status, label }]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      status === "operational"
                        ? "bg-green-100 text-green-800"
                        : status === "degraded"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {status === "operational" ? (
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                      ) : status === "degraded" ? (
                        <AlertTriangle className="w-3 h-3 mr-1" />
                      ) : (
                        <HelpCircle className="w-3 h-3 mr-1" />
                      )}
                      {status === "operational" ? "Operativo" : 
                       status === "degraded" ? "Degradado" : "Inactivo"}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Enlaces Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { label: "Guía de Usuario", href: "#" },
                  { label: "Preguntas Frecuentes", href: "#" },
                  { label: "Tutoriales en Video", href: "#" },
                  { label: "Notas de Versión", href: "#" }
                ].map((link) => (
                  <Button
                    key={link.label}
                    variant="ghost"
                    className="w-full justify-between"
                    asChild
                  >
                    <a href={link.href}>
                      {link.label}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 