"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
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
  Camera
} from "lucide-react"
import { useState } from "react"

export function CompanySettings() {
  const [successMessage, setSuccessMessage] = useState('')
  const [companyData, setCompanyData] = useState({
    name: 'Mi Empresa',
    legalName: 'Mi Empresa S.A.',
    taxId: '12345678901',
    email: 'contacto@miempresa.com',
    phone: '+1234567890',
    address: 'Calle Principal 123',
    city: 'Ciudad',
    country: 'País',
    logo: null as File | null,
    favicon: null as File | null,
    colors: {
      primary: '#3B82F6',
      secondary: '#10B981'
    },
    welcomeMessage: '¡Bienvenido al sistema de gestión de KPIs!',
    backupFrequency: 'daily',
    securitySettings: {
      twoFactor: true,
      passwordPolicy: true,
      locationAlerts: true
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage('¡Configuración guardada exitosamente!')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'favicon') => {
    if (e.target.files && e.target.files[0]) {
      setCompanyData(prev => ({
        ...prev,
        [field]: e.target.files![0]
      }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Configuración de la Empresa</h1>
          <p className="text-muted-foreground">
            Administra la información y configuración de tu empresa
          </p>
        </div>
      </div>

      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-700">{successMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Información Básica</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center overflow-hidden">
                  {companyData.logo ? (
                    <img
                      src={URL.createObjectURL(companyData.logo)}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="h-8 w-8 text-gray-400" />
                  )}
                </div>
                <label
                  htmlFor="logo-upload"
                  className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-lg cursor-pointer hover:bg-gray-50"
                >
                  <Camera className="w-4 h-4 text-gray-600" />
                  <input
                    id="logo-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'logo')}
                  />
                </label>
              </div>
              <div>
                <h3 className="text-lg font-medium">Logo de la Empresa</h3>
                <p className="text-sm text-muted-foreground">
                  JPG o PNG. Máximo 1MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la Empresa</Label>
                <Input
                  id="name"
                  value={companyData.name}
                  onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalName">Razón Social</Label>
                <Input
                  id="legalName"
                  value={companyData.legalName}
                  onChange={(e) => setCompanyData({ ...companyData, legalName: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="taxId">RUT/NIT</Label>
                <Input
                  id="taxId"
                  value={companyData.taxId}
                  onChange={(e) => setCompanyData({ ...companyData, taxId: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={companyData.email}
                  onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={companyData.phone}
                  onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={companyData.address}
                  onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Apariencia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Color Primario</Label>
                <Input
                  id="primaryColor"
                  type="color"
                  value={companyData.colors.primary}
                  onChange={(e) => setCompanyData({
                    ...companyData,
                    colors: { ...companyData.colors, primary: e.target.value }
                  })}
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Color Secundario</Label>
                <Input
                  id="secondaryColor"
                  type="color"
                  value={companyData.colors.secondary}
                  onChange={(e) => setCompanyData({
                    ...companyData,
                    colors: { ...companyData.colors, secondary: e.target.value }
                  })}
                  className="h-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="welcomeMessage">Mensaje de Bienvenida</Label>
              <Input
                id="welcomeMessage"
                value={companyData.welcomeMessage}
                onChange={(e) => setCompanyData({ ...companyData, welcomeMessage: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" className="flex items-center">
            <Save className="w-4 h-4 mr-2" />
            Guardar Cambios
          </Button>
        </div>
      </form>
    </div>
  )
} 