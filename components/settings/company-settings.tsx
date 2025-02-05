"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Save,
  Upload,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  Lock,
  Database,
  CheckCircle2,
  Link,
  Webhook,
  FileSpreadsheet,
  Settings,
  Server,
  Network,
  Camera,
  Plus,
  Palette,
  Image as ImageIcon
} from "lucide-react"
import { useState } from "react"

export function CompanySettings() {
  const [activeTab, setActiveTab] = useState('basic')
  const [projects, setProjects] = useState([
    { id: 1, name: 'Proyecto Principal', description: 'Sistema de gestión de combustible' },
    { id: 2, name: 'Proyecto Secundario', description: 'Monitoreo de flota' }
  ])

  const tabs = [
    { id: 'basic', label: 'Información Básica', icon: Building2 },
    { id: 'projects', label: 'Proyectos', icon: Plus },
    { id: 'appearance', label: 'Apariencia', icon: Palette }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Configuración de la Empresa</h2>
        <p className="text-muted-foreground">
          Administra la información y configuración de tu empresa
        </p>
      </div>

      <div className="flex space-x-4 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 border-b-2 ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent hover:border-muted'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'basic' && (
        <Card>
          <CardHeader>
            <CardTitle>Información Básica</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Logo de la Empresa</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline">Cambiar Logo</Button>
                </div>
                <p className="text-sm text-muted-foreground">JPG o PNG. Máximo 1MB</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nombre de la Empresa</Label>
                  <Input id="companyName" placeholder="Mi Empresa" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="legalName">Razón Social</Label>
                  <Input id="legalName" placeholder="Mi Empresa S.A." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rut">RUT/NIT</Label>
                  <Input id="rut" placeholder="12345678901" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="contacto@miempresa.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+1234567890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" placeholder="Calle Principal 123" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'projects' && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">Proyectos</h3>
              <p className="text-muted-foreground">Gestiona los proyectos de tu empresa</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Proyecto
            </Button>
          </div>

          <div className="grid gap-4">
            {projects.map(project => (
              <Card key={project.id}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Nombre del Proyecto</Label>
                      <Input 
                        defaultValue={project.name}
                        onChange={(e) => {
                          // Lógica para actualizar el nombre del proyecto
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Descripción</Label>
                      <Textarea 
                        defaultValue={project.description}
                        onChange={(e) => {
                          // Lógica para actualizar la descripción
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {activeTab === 'appearance' && (
        <Card>
          <CardHeader>
            <CardTitle>Apariencia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Color Primario</Label>
                <div className="h-10 w-full bg-blue-500 rounded-lg" />
                <Input type="color" defaultValue="#3B82F6" />
              </div>

              <div className="space-y-2">
                <Label>Color Secundario</Label>
                <div className="h-10 w-full bg-green-500 rounded-lg" />
                <Input type="color" defaultValue="#22C55E" />
              </div>

              <div className="space-y-2">
                <Label>Mensaje de Bienvenida</Label>
                <Textarea 
                  placeholder="¡Bienvenido al sistema de gestión de KPIs!"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 