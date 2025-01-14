"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Download,
  Calendar,
  Filter,
  Droplet,
  TrendingUp,
  AlertTriangle,
  Truck,
  MapPin
} from "lucide-react"
import { LineChart, BarChart, PieChart } from "@/components/ui/chart"

export default function FuelReportsPage() {
  const [dateRange, setDateRange] = useState("month")
  const [project, setProject] = useState("all")

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reportes de Combustible</h2>
          <p className="text-muted-foreground">
            Análisis detallado del consumo y eficiencia de combustible
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Exportar Datos
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consumo Total
            </CardTitle>
            <Droplet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,231 L</div>
            <div className="flex items-center text-sm text-green-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +15.3% vs. mes anterior
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pérdidas Detectadas
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">123 L</div>
            <div className="flex items-center text-sm text-red-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +2.1% vs. mes anterior
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Eficiencia
            </CardTitle>
            <Truck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <div className="flex items-center text-sm text-green-500">
              <TrendingUp className="mr-1 h-4 w-4" />
              +0.5% vs. mes anterior
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <Select defaultValue={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Hoy</SelectItem>
            <SelectItem value="week">Esta Semana</SelectItem>
            <SelectItem value="month">Este Mes</SelectItem>
            <SelectItem value="quarter">Este Trimestre</SelectItem>
            <SelectItem value="year">Este Año</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue={project} onValueChange={setProject}>
          <SelectTrigger className="w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Proyecto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los Proyectos</SelectItem>
            <SelectItem value="sur">Proyecto Minero Sur</SelectItem>
            <SelectItem value="norte">Proyecto Minero Norte</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="consumo" className="space-y-4">
        <TabsList>
          <TabsTrigger value="consumo">Consumo</TabsTrigger>
          <TabsTrigger value="vehiculos">Vehículos</TabsTrigger>
          <TabsTrigger value="eficiencia">Eficiencia</TabsTrigger>
          <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
        </TabsList>

        <TabsContent value="consumo" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Consumo Total Mensual</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Vehículos por Consumo</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Tipo</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vehiculos">
          {/* Similar structure for vehicles tab */}
        </TabsContent>

        <TabsContent value="eficiencia">
          {/* Similar structure for efficiency tab */}
        </TabsContent>

        <TabsContent value="ubicacion">
          {/* Similar structure for location tab */}
        </TabsContent>
      </Tabs>
    </div>
  )
}