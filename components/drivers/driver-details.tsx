"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart } from "@/components/ui/chart"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  User, 
  Truck, 
  Building2, 
  Clock, 
  BarChart2, 
  FileText,
  Download,
  Settings,
  AlertTriangle,
  Calendar
} from "lucide-react"

interface DriverDetailsProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  driver: any
}

export function DriverDetails({ open, onOpenChange, driver }: DriverDetailsProps) {
  const [activeTab, setActiveTab] = useState("general")
  const [dispatchDateRange, setDispatchDateRange] = useState("week")
  const [incidentDateRange, setIncidentDateRange] = useState("month")

  // Mock data for demonstration
  const dispatchHistory = [
    { date: "2024-03-20 10:30", amount: "45L", location: "Estación Norte", receipt: "REC-001" },
    { date: "2024-03-19 15:45", amount: "50L", location: "Estación Sur", receipt: "REC-002" },
    { date: "2024-03-18 08:15", amount: "40L", location: "Estación Central", receipt: "REC-003" },
  ]

  const incidents = [
    { date: "2024-03-15", type: "Derrame", description: "Derrame menor durante despacho" },
    { date: "2024-03-10", type: "Técnico", description: "Falla en medidor de combustible" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Detalles del Conductor</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{driver.name}</h2>
              <p className="text-sm text-muted-foreground">ID: {driver.id}</p>
            </div>
          </div>
          <Badge variant={driver.status === "Activo" ? "default" : "secondary"}>
            {driver.status}
          </Badge>
        </div>

        <Tabs defaultValue="general" className="flex-1 overflow-hidden">
          <TabsList>
            <TabsTrigger value="general">Vista General</TabsTrigger>
            <TabsTrigger value="dispatches">Despachos</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="docs">Documentos</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1 h-[calc(90vh-12rem)]">
            <TabsContent value="general" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Truck className="h-4 w-4 mr-2" />
                      Información del Vehículo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Tipo:</span>
                      <span className="font-medium">{driver.vehicle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Placa:</span>
                      <span className="font-medium">{driver.plate}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Building2 className="h-4 w-4 mr-2" />
                      Información de la Empresa
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Empresa:</span>
                      <span className="font-medium">{driver.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Eficiencia:</span>
                      <span className="font-medium">{driver.efficiency}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Incidentes Recientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descripción</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {incidents.map((incident, index) => (
                        <TableRow key={index}>
                          <TableCell>{incident.date}</TableCell>
                          <TableCell>{incident.type}</TableCell>
                          <TableCell>{incident.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dispatches" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Historial de Despachos</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Select value={dispatchDateRange} onValueChange={setDispatchDateRange}>
                      <SelectTrigger className="w-[180px]">
                        <Calendar className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Periodo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Hoy</SelectItem>
                        <SelectItem value="week">Esta Semana</SelectItem>
                        <SelectItem value="month">Este Mes</SelectItem>
                        <SelectItem value="quarter">Este Trimestre</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fecha y Hora</TableHead>
                        <TableHead>Cantidad</TableHead>
                        <TableHead>Ubicación</TableHead>
                        <TableHead>Recibo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dispatchHistory.map((dispatch, index) => (
                        <TableRow key={index}>
                          <TableCell>{dispatch.date}</TableCell>
                          <TableCell>{dispatch.amount}</TableCell>
                          <TableCell>{dispatch.location}</TableCell>
                          <TableCell>{dispatch.receipt}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Consumo Mensual</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Eficiencia por Ruta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="docs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Licencia de Conducir</p>
                          <p className="text-sm text-muted-foreground">Actualizado: 2024-01-15</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Ver</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificaciones</p>
                        <p className="text-sm text-muted-foreground">
                          Configurar alertas y notificaciones
                        </p>
                      </div>
                      <Button variant="outline">Configurar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}