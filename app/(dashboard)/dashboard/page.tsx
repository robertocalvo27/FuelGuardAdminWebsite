"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"
import { 
  Fuel, 
  AlertTriangle, 
  Truck, 
  Users, 
  Calendar,
  Download,
  FileText,
  BarChart2,
  Plus,
  UserPlus,
  Clock,
  TrendingUp,
  Car
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DashboardPage() {
  const { toast } = useToast()
  const [dateRange, setDateRange] = useState("month")

  const handleDownloadReport = (reportName: string) => {
    toast({
      title: "Reporte descargado",
      description: `El reporte ${reportName} se ha descargado correctamente.`
    })
  }

  return (
    <div className="flex-1 space-y-4 p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Consumo del Día</CardTitle>
                <Fuel className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,542 L</div>
                <p className="text-xs text-green-500">+4.5% vs. ayer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conductores Activos</CardTitle>
                <Users className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">de 35 registrados</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vehículos en Ruta</CardTitle>
                <Car className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15</div>
                <p className="text-xs text-muted-foreground">4 en mantenimiento</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eficiencia</CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-green-500">+2.1% vs. mes anterior</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Consumo de Combustible</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Eficiencia por Vehículo</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Distribución de Incidentes</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
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
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Consumo Promedio Diario</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comparativo entre Vehículos</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Incidencias por Tipo</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eficiencia de Conductores</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Resumen Mensual de Consumo",
                description: "Detalle completo del consumo de combustible mensual por vehículo y conductor",
                icon: Fuel
              },
              {
                title: "Incidencias Críticas",
                description: "Reporte detallado de incidentes críticos y sus resoluciones",
                icon: AlertTriangle
              },
              {
                title: "Análisis de Eficiencia",
                description: "Métricas de eficiencia por conductor y vehículo",
                icon: BarChart2
              },
              {
                title: "Resumen de Despachos",
                description: "Detalle de todos los despachos realizados en el periodo",
                icon: FileText
              }
            ].map((report) => (
              <Card key={report.title}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <report.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {report.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleDownloadReport(report.title)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      PDF
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleDownloadReport(report.title)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Excel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}