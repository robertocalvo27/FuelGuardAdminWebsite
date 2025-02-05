"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { 
  Bell,
  AlertTriangle,
  History,
  Database,
  Save,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Trash2,
  Upload,
  FileUp,
  Lock,
  Settings
} from "lucide-react"
import { useState } from "react"

export function SystemSettings() {
  const [activeTab, setActiveTab] = useState('notifications')
  const [successMessage, setSuccessMessage] = useState('')
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      inApp: true,
      desktop: false,
      slack: false,
      productionAlerts: true,
      qualityAlerts: true,
      systemAlerts: true,
      maintenanceAlerts: false
    },
    dataManagement: {
      retentionPeriod: '365',
      autoDelete: false,
      archiveData: true,
      backupFrequency: 'daily',
      allowModifications: false,
      modificationWindow: '24',
      requireApproval: true,
      auditChanges: true
    },
    historicalData: {
      importFormat: 'excel',
      validateData: true,
      overwriteExisting: false,
      requireApproval: true,
      notifyStakeholders: true
    }
  })

  const handleSave = () => {
    setSuccessMessage('Configuración guardada exitosamente')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const tabs = [
    { id: 'notifications', label: 'Notificaciones y Alertas', icon: Bell },
    { id: 'dataManagement', label: 'Gestión de Datos', icon: Database },
    { id: 'historicalData', label: 'Datos Históricos', icon: History }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Configuración del Sistema</h1>
          <p className="text-muted-foreground">
            Administra las notificaciones, políticas de datos y configuraciones generales
          </p>
        </div>
        <Button
          onClick={handleSave}
          className="flex items-center"
        >
          <Save className="w-4 h-4 mr-2" />
          Guardar Cambios
        </Button>
      </div>

      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-700">{successMessage}</p>
          </div>
        </div>
      )}

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

      {activeTab === 'notifications' && (
        <Card>
          <CardHeader>
            <CardTitle>Canales de Notificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'email', label: 'Correo Electrónico', icon: Mail, description: 'Recibe notificaciones por email' },
                { id: 'inApp', label: 'Notificaciones en App', icon: Bell, description: 'Notificaciones dentro del sistema' },
                { id: 'desktop', label: 'Notificaciones de Escritorio', icon: MessageSquare, description: 'Notificaciones en el escritorio' },
                { id: 'slack', label: 'Slack', icon: MessageSquare, description: 'Notificaciones en Slack' }
              ].map(channel => (
                <div key={channel.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <channel.icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{channel.label}</p>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notifications[channel.id as keyof typeof settings.notifications]}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        [channel.id]: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'dataManagement' && (
        <Card>
          <CardHeader>
            <CardTitle>Políticas de Retención de Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="retentionPeriod">Período de Retención (días)</Label>
                <Input
                  id="retentionPeriod"
                  type="number"
                  value={settings.dataManagement.retentionPeriod}
                  onChange={(e) => setSettings({
                    ...settings,
                    dataManagement: {
                      ...settings.dataManagement,
                      retentionPeriod: e.target.value
                    }
                  })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="backupFrequency">Frecuencia de Respaldo</Label>
                <Select
                  value={settings.dataManagement.backupFrequency}
                  onValueChange={(value) => setSettings({
                    ...settings,
                    dataManagement: {
                      ...settings.dataManagement,
                      backupFrequency: value
                    }
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona frecuencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diario</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { id: 'autoDelete', label: 'Eliminación Automática', description: 'Eliminar datos antiguos automáticamente' },
                { id: 'archiveData', label: 'Archivar Datos', description: 'Archivar datos antiguos antes de eliminar' },
                { id: 'requireApproval', label: 'Requerir Aprobación', description: 'Requerir aprobación para modificaciones' },
                { id: 'auditChanges', label: 'Auditar Cambios', description: 'Registrar todos los cambios en datos' }
              ].map(setting => (
                <div key={setting.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{setting.label}</p>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.dataManagement[setting.id as keyof typeof settings.dataManagement] as boolean}
                    onChange={(e) => setSettings({
                      ...settings,
                      dataManagement: {
                        ...settings.dataManagement,
                        [setting.id]: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'historicalData' && (
        <Card>
          <CardHeader>
            <CardTitle>Importación de Datos Históricos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="importFormat">Formato de Importación</Label>
                <Select
                  value={settings.historicalData.importFormat}
                  onValueChange={(value) => setSettings({
                    ...settings,
                    historicalData: {
                      ...settings.historicalData,
                      importFormat: value
                    }
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona formato" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excel">Excel</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {[
                { id: 'validateData', label: 'Validar Datos', description: 'Validar integridad y formato de datos' },
                { id: 'overwriteExisting', label: 'Sobrescribir Existentes', description: 'Sobrescribir datos existentes' },
                { id: 'requireApproval', label: 'Requerir Aprobación', description: 'Aprobación para importación' },
                { id: 'notifyStakeholders', label: 'Notificar Interesados', description: 'Notificar sobre importaciones' }
              ].map(setting => (
                <div key={setting.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{setting.label}</p>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.historicalData[setting.id as keyof typeof settings.historicalData] as boolean}
                    onChange={(e) => setSettings({
                      ...settings,
                      historicalData: {
                        ...settings.historicalData,
                        [setting.id]: e.target.checked
                      }
                    })}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 