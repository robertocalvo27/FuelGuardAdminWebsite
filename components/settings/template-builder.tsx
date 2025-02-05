"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Mail, Bell, Tag, Trash, Save, Eye } from 'lucide-react'
import { useState } from 'react'

export function TemplateBuilder() {
  const [templates, setTemplates] = useState([
    { id: 1, name: 'Alerta de Consumo Excesivo', type: 'email', tags: ['alerta', 'consumo'] },
    { id: 2, name: 'Notificación de Mantenimiento', type: 'notification', tags: ['mantenimiento'] }
  ])

  const availableVariables = [
    { label: 'Nombre del Conductor', value: '{{conductor_nombre}}' },
    { label: 'Placa del Vehículo', value: '{{vehiculo_placa}}' },
    { label: 'Consumo Actual', value: '{{consumo_actual}}' },
    { label: 'Fecha', value: '{{fecha}}' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Plantillas de Notificación</h2>
          <p className="text-muted-foreground">Gestiona tus plantillas de correo y notificaciones</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nueva Plantilla
        </Button>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {/* Lista de Plantillas */}
        <div className="md:col-span-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Mis Plantillas</CardTitle>
                <Input 
                  placeholder="Buscar plantilla..." 
                  className="max-w-[200px]"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {templates.map(template => (
                <div
                  key={template.id}
                  className="p-4 rounded-lg border hover:bg-slate-50 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{template.name}</h3>
                      <div className="flex gap-2 mt-2">
                        {template.tags.map(tag => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    {template.type === 'email' ? 
                      <Mail className="h-4 w-4 text-blue-500" /> : 
                      <Bell className="h-4 w-4 text-purple-500" />
                    }
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Editor de Plantillas */}
        <div className="md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Editor de Plantilla</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* ... resto del contenido del editor ... */}
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium">Nombre de la Plantilla</label>
                    <Input placeholder="Ej: Alerta de Consumo Excesivo" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Tipo</label>
                      <Select defaultValue="email">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Correo Electrónico</SelectItem>
                          <SelectItem value="notification">Notificación</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium">Etiquetas</label>
                      <div className="flex gap-2">
                        <Input placeholder="Añadir etiqueta" />
                        <Button size="icon" variant="outline">
                          <Tag className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Variables Disponibles</label>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {availableVariables.map((variable, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="cursor-pointer hover:bg-slate-100"
                      >
                        {variable.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Contenido</label>
                  <Textarea 
                    className="min-h-[200px] font-mono"
                    placeholder="Escribe el contenido de tu plantilla aquí..."
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Vista Previa
                  </Button>
                  <div className="space-x-2">
                    <Button variant="outline" className="gap-2">
                      <Trash className="h-4 w-4" />
                      Eliminar
                    </Button>
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Guardar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 