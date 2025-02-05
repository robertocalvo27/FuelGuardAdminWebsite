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
  TrendingUp,
  Users,
  Car
} from "lucide-react"

export default function ControlPage() {
  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header con Acciones Rápidas */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Centro de Control</h2>
          <p className="text-muted-foreground">
            Gestión de combustible y flota
          </p>
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

      {/* Resto del código del Centro de Control... */}
    </div>
  )
} 