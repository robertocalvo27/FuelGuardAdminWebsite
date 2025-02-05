"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Fuel,
  AlertTriangle,
  FileText,
  Plus,
  UserPlus,
  Clock,
  Settings,
  Download,
  TrendingUp
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-6 p-8">
      {/* Header con Acciones Rápidas */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Bienvenido al Centro de Control</h2>
          <p className="text-muted-foreground">Gestión de combustible y flota</p>
        </div>
        <div className="flex gap-3">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Despacho
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar Datos
          </Button>
        </div>
      </div>

      {/* Alertas y Notificaciones */}
      <div className="space-y-3">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            3 vehículos superaron el límite de consumo establecido
          </AlertDescription>
        </Alert>
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertDescription>
            5 mantenimientos programados para esta semana
          </AlertDescription>
        </Alert>
      </div>

      {/* KPIs Principales */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Consumo del Día</CardTitle>
            <Fuel className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,542 L</div>
            <p className="text-xs text-green-500">Normal</p>
          </CardContent>
        </Card>
        {/* Otros KPIs similares... */}
      </div>

      {/* Acciones Rápidas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3">
                <UserPlus className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Registrar Conductor</h3>
                <p className="text-sm text-muted-foreground">Añadir nuevo personal autorizado</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-green-100 p-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Generar Reporte</h3>
                <p className="text-sm text-muted-foreground">Informes y análisis rápidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-purple-100 p-3">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Configurar Alertas</h3>
                <p className="text-sm text-muted-foreground">Ajustar límites y notificaciones</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actividad Reciente */}
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                time: "Hace 10 min",
                action: "Despacho completado",
                details: "Vehículo ABC-123 - 50L",
                icon: Fuel
              },
              {
                time: "Hace 25 min",
                action: "Alerta de consumo",
                details: "Vehículo XYZ-789 superó límite",
                icon: AlertTriangle
              },
              {
                time: "Hace 1 hora",
                action: "Reporte generado",
                details: "Consumo semanal por conductor",
                icon: FileText
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="rounded-full bg-slate-100 p-2">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">{item.action}</p>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{item.time}</span>
                    <span>•</span>
                    <span>{item.details}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 