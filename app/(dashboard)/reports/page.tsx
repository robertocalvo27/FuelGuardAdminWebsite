"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Droplet, 
  ShieldAlert, 
  Users, 
  Truck, 
  BarChart2,
  Download,
  TrendingUp,
  Calendar,
  Filter
} from "lucide-react"
import { LineChart, PieChart } from "@/components/ui/chart"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("month")
  const [project, setProject] = useState("all")

  const categories = [
    {
      title: "Combustible",
      icon: Droplet,
      stats: "45,231 L",
      trend: "+20.1%",
      href: "/reports/fuel",
      description: "Consumo total de combustible"
    },
    {
      title: "Incidencias",
      icon: ShieldAlert,
      stats: "28",
      trend: "-4%",
      href: "/reports/incidents",
      description: "Total de incidencias reportadas"
    },
    {
      title: "Conductores",
      icon: Users,
      stats: "156",
      trend: "+5%",
      href: "/reports/drivers",
      description: "Conductores activos"
    },
    {
      title: "Despachos",
      icon: Calendar,
      stats: "1,234",
      trend: "+12%",
      href: "/reports/dispatches",
      description: "Total de despachos realizados"
    },
    {
      title: "Vehículos",
      icon: Truck,
      stats: "89",
      trend: "+2%",
      href: "/reports/vehicles",
      description: "Flota total activa"
    },
    {
      title: "Desempeño General",
      icon: BarChart2,
      stats: "94.5%",
      trend: "+1.5%",
      href: "/reports/performance",
      description: "Eficiencia general del sistema"
    }
  ]

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reportes</h2>
          <p className="text-muted-foreground">
            Visualiza y analiza los datos del sistema
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Exportar Todo
        </Button>
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href={category.href} key={category.title}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">
                    {category.title}
                  </CardTitle>
                  <category.icon className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">{category.stats}</div>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                    <span className={category.trend.startsWith("+") ? "text-green-500" : "text-red-500"}>
                      {category.trend} vs. mes anterior
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tendencia General</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <LineChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Categoría</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <PieChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}