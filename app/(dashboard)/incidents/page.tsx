"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  AlertTriangle, 
  Camera, 
  Download, 
  Filter, 
  Search,
  ShieldAlert,
  Truck,
  User
} from "lucide-react"
import { LineChart, BarChart, PieChart } from "@/components/ui/chart"

export default function IncidentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIncident, setSelectedIncident] = useState(null)
  const [incidentType, setIncidentType] = useState("all")

  const incidentTypes = [
    { value: "spill", label: "Derrame" },
    { value: "technical", label: "Problema Técnico" },
    { value: "delay", label: "Retraso" },
    { value: "other", label: "Otro" },
  ]

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Incidentes</h2>
        <Button onClick={() => {}}>
          <Download className="mr-2 h-4 w-4" /> Exportar Datos
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Incidentes
            </CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +3 en las últimas 24 horas
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vehículo Crítico
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ABC-123</div>
            <p className="text-xs text-muted-foreground">
              5 incidentes este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conductor Crítico
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Juan Pérez</div>
            <p className="text-xs text-muted-foreground">
              3 incidentes este mes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tendencia de Incidentes</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Distribución por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart />
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Buscar por conductor o vehículo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="secondary">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Select value={incidentType} onValueChange={setIncidentType}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Tipo de Incidente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {incidentTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Incidentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Conductor</TableHead>
                <TableHead>Vehículo</TableHead>
                <TableHead>Lecturas</TableHead>
                <TableHead>Combustible</TableHead>
                <TableHead>Evidencias</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2024-03-20 08:30</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Derrame
                  </span>
                </TableCell>
                <TableCell>Derrame durante el despacho</TableCell>
                <TableCell>Juan Pérez (ID: 1234)</TableCell>
                <TableCell>ABC-123 (Volquete)</TableCell>
                <TableCell>Inicial: 100 | Final: 150</TableCell>
                <TableCell>50L</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Camera className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-03-19 15:45</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Técnico
                  </span>
                </TableCell>
                <TableCell>Falla en manómetro</TableCell>
                <TableCell>Carlos López (ID: 1235)</TableCell>
                <TableCell>DEF-456 (Cisterna)</TableCell>
                <TableCell>Inicial: 200 | Final: 300</TableCell>
                <TableCell>100L</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Camera className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selectedIncident} onOpenChange={() => setSelectedIncident(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Detalles del Incidente</DialogTitle>
          </DialogHeader>
          {selectedIncident && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Fecha y Hora</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedIncident.date}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Tipo de Incidente</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedIncident.type}
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Descripción</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedIncident.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}