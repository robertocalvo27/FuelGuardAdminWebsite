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
  Settings,
  Plus,
  Filter,
  Users,
  Shield,
  KeyRound,
  MapPin,
  Webhook,
  FileSpreadsheet,
  Server,
  Network
} from "lucide-react"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemplateBuilder } from "./template-builder"
import { Badge } from "@/components/ui/badge"

export function SystemSettings() {
  const [activeTab, setActiveTab] = useState('general')
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

  const notificationTypes = [
    {
      id: 'consumo_excesivo',
      title: 'Consumo Excesivo',
      description: 'Alertas cuando un vehículo supera el límite establecido',
      channels: ['email', 'app'],
      frequency: 'instant',
      threshold: 100,
      groups: ['supervisores', 'gerentes']
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Preventivo',
      description: 'Recordatorios de mantenimiento programado',
      channels: ['email'],
      frequency: 'daily',
      groups: ['mantenimiento']
    }
  ]

  const handleSave = () => {
    setSuccessMessage('Configuración guardada exitosamente')
    setTimeout(() => setSuccessMessage(''), 3000)
  }

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'notifications', label: 'Notificaciones y Alertas', icon: Bell },
    { id: 'security', label: 'Seguridad', icon: Shield },
    { id: 'integrations', label: 'Integraciones', icon: Network },
    { id: 'dataManagement', label: 'Gestión de Datos', icon: Database },
    { id: 'templates', label: 'Plantillas', icon: Mail }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Configuración del Sistema</h2>
        <p className="text-muted-foreground">
          Administra la configuración general, notificaciones y gestión de datos
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

      {activeTab === 'general' && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Reglas de Notificación</h2>
              <p className="text-muted-foreground">Configura las reglas para las notificaciones automáticas</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nueva Regla
            </Button>
          </div>

          <div className="grid gap-6">
            {notificationTypes.map((type) => (
              <Card key={type.id}>
                <CardHeader className="flex-row items-center justify-between space-y-0">
                  <div>
                    <CardTitle className="text-base font-semibold">{type.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <Switch defaultChecked />
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-4">
                  <div>
                    <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Canales
                    </Label>
                    <div className="flex gap-2 mt-1">
                      {type.channels.map(channel => (
                        <Badge key={channel} variant="outline" className="flex items-center">
                          {channel === 'email' ? <Mail className="h-3 w-3 mr-1" /> : <Bell className="h-3 w-3 mr-1" />}
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Frecuencia
                    </Label>
                    <Select defaultValue={type.frequency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instant">Inmediata</SelectItem>
                        <SelectItem value="hourly">Cada hora</SelectItem>
                        <SelectItem value="daily">Diaria</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Destinatarios
                    </Label>
                    <Select defaultValue={type.groups[0]}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supervisores">Supervisores</SelectItem>
                        <SelectItem value="gerentes">Gerentes</SelectItem>
                        <SelectItem value="mantenimiento">Equipo Mantenimiento</SelectItem>
                        <SelectItem value="custom">Grupo Personalizado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      Condiciones
                    </Label>
                    <div className="flex gap-2">
                      <Input 
                        type="number" 
                        placeholder="Umbral" 
                        defaultValue={type.threshold} 
                        className="w-24"
                      />
                      <Select defaultValue="greater">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="greater">Mayor que</SelectItem>
                          <SelectItem value="less">Menor que</SelectItem>
                          <SelectItem value="equal">Igual a</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Preferencias Generales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications">Notificaciones Globales</Label>
                <Switch id="notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="emails">Correos de Alerta</Label>
                <Switch id="emails" />
              </div>
            </CardContent>
          </Card>
        </>
      )}

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
                  <Switch
                    checked={settings.notifications[channel.id as keyof typeof settings.notifications]}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        [channel.id]: checked
                      }
                    })}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'security' && (
        <Card>
          <CardHeader>
            <CardTitle>Configuración de Seguridad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <KeyRound className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Autenticación de Dos Factores</p>
                    <p className="text-sm text-muted-foreground">
                      Requiere verificación adicional al iniciar sesión
                    </p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Política de Contraseñas</p>
                    <p className="text-sm text-muted-foreground">
                      Requiere contraseñas seguras y cambios periódicos
                    </p>
                  </div>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Alertas de Ubicación</p>
                    <p className="text-sm text-muted-foreground">
                      Notifica sobre inicios de sesión desde ubicaciones nuevas
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Webhook className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Webhooks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configura webhooks para recibir notificaciones en tiempo real
                </p>
                <Button variant="outline" className="w-full">Configurar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Exportación</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Configura la exportación automática de datos
                </p>
                <Button variant="outline" className="w-full">Configurar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>API</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Gestiona las credenciales y accesos a la API
                </p>
                <Button variant="outline" className="w-full">Configurar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Servicios Externos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Conecta con servicios de terceros
                </p>
                <Button variant="outline" className="w-full">Configurar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'dataManagement' && (
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Datos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="retentionPeriod">Período de Retención (días)</Label>
                <Input
                  id="retentionPeriod"
                  type="number"
                  defaultValue={settings.dataManagement.retentionPeriod}
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
                  defaultValue={settings.dataManagement.backupFrequency}
                  onValueChange={(value) => setSettings({
                    ...settings,
                    dataManagement: {
                      ...settings.dataManagement,
                      backupFrequency: value
                    }
                  })}
                >
                  <SelectTrigger id="backupFrequency">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  id: 'autoDelete', 
                  label: 'Eliminación Automática', 
                  description: 'Eliminar datos antiguos automáticamente',
                  icon: Trash2
                },
                { 
                  id: 'archiveData', 
                  label: 'Archivar Datos', 
                  description: 'Archivar datos antiguos antes de eliminar',
                  icon: Upload
                },
                { 
                  id: 'requireApproval', 
                  label: 'Requerir Aprobación', 
                  description: 'Requerir aprobación para modificaciones',
                  icon: Lock
                },
                { 
                  id: 'auditChanges', 
                  label: 'Auditar Cambios', 
                  description: 'Registrar todos los cambios en datos',
                  icon: FileUp
                }
              ].map(setting => (
                <div key={setting.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <setting.icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{setting.label}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.dataManagement[setting.id as keyof typeof settings.dataManagement] as boolean}
                    onCheckedChange={(checked) => setSettings({
                      ...settings,
                      dataManagement: {
                        ...settings.dataManagement,
                        [setting.id]: checked
                      }
                    })}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'templates' && <TemplateBuilder />}

      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-green-700">{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  )
} 