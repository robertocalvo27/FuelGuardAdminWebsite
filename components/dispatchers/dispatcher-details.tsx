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
  Building2, 
  Clock, 
  BarChart2, 
  FileText,
  Download,
  Settings,
  AlertTriangle,
  Calendar,
  Camera,
  FileCheck,
  Bell
} from "lucide-react"

interface DispatcherDetailsProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dispatcher: any
}

export function DispatcherDetails({ open, onOpenChange, dispatcher }: DispatcherDetailsProps) {
  const [activeTab, setActiveTab] = useState("general")
  const [dateRange, setDateRange] = useState("week")

  // Mock data for demonstration
  const dispatchHistory = [
    { 
      date: "2024-03-20 10:30", 
      vehicle: "ABC-123",
      driver: "Juan Martínez",
      amount: "45L",
      incidents: "Ninguno",
      receipt: "REC-001"
    },
    { 
      date: "2024-03-19 15:45", 
      vehicle: "XYZ-789",
      driver: "Ana López",
      amount: "50L",
      incidents: "Derrame menor",
      receipt: "REC-002"
    }
  ]

  const auditHistory = [
    {
      date: "2024-03-15",
      type: "Discrepancia",
      description: "Diferencia de 2L entre lectura y registro",
      status: "Resuelto"
    },
    {
      date: "2024-03-10",
      type: "Alerta",
      description: "Consumo irregular detectado",
      status: "Pendiente"
    }
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Detalles del Despachador</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{dispatcher.name}</h2>
              <p className="text-sm text-muted-foreground">ID: {dispatcher.id}</p>
            </div>
          </div>
          <Badge variant={dispatcher.status === "Activo" ? "default" : "secondary"}>
            {dispatcher.status}
          </Badge>
        </div>

        <Tabs defaultValue="general" className="flex-1 overflow-hidden">
          <TabsList>
            <TabsTrigger value="general">Vista General</TabsTrigger>
            <TabsTrigger value="dispatches">Despachos</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="audit">Auditoría</TabsTrigger>
            <TabsTrigger value="docs">Documentos</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          <ScrollArea className="flex-1 h-[calc(90vh-12rem)]">
            <TabsContent value="general" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center">
                      <Building2 className="h-4 w-4 mr-2" />
                      Información Básica
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Documento:</span>
                      <span className="font-medium">{dispatcher.document}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Proyecto:</span>
                      <span className="font-medium">{dispatcher.project}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Turno:</span>
                      <span className="font-medium">{dispatcher.shift}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium flex items-center">
                      <BarChart2 className="h-4 w-4 mr-2" />
                      Rendimiento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Eficiencia:</span>
                      <span className="font-medium">{dispatcher.efficiency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Despachos Exitosos:</span>
                      <span className="font-medium">98%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Último Despacho
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fecha:</span>
                      <span className="font-medium">2024-03-20 10:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Cantidad:</span>
                      <span className="font-medium">45L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Vehículo:</span>
                      <span className="font-medium">ABC-123</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dispatches" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Historial de Despachos</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Select value={dateRange} onValueChange={setDateRange}>
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
                        <TableHead>Vehículo</TableHead>
                        <TableHead>Conductor</TableHead>
                        <TableHead>Cantidad</TableHead>
                        <TableHead>Incidencias</TableHead>
                        <TableHead>Recibo</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dispatchHistory.map((dispatch, index) => (
                        <TableRow key={index}>
                          <TableCell>{dispatch.date}</TableCell>
                          <TableCell>{dispatch.vehicle}</TableCell>
                          <TableCell>{dispatch.driver}</TableCell>
                          <TableCell>{dispatch.amount}</TableCell>
                          <TableCell>{dispatch.incidents}</TableCell>
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
                    <CardTitle>Comparativa de Lecturas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Incidencias por Tipo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="audit" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Reportes de Auditoría</CardTitle>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar Reporte
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Estado</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {auditHistory.map((audit, index) => (
                        <TableRow key={index}>
                          <TableCell>{audit.date}</TableCell>
                          <TableCell>{audit.type}</TableCell>
                          <TableCell>{audit.description}</TableCell>
                          <TableCell>{audit.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="docs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos y Evidencias</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <FileCheck className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Contrato Laboral</p>
                          <p className="text-sm text-muted-foreground">Actualizado: 2024-01-15</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Ver</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Camera className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Evidencias Fotográficas</p>
                          <p className="text-sm text-muted-foreground">15 imágenes</p>
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
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Configuración de Alertas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Alertas de Irregularidades</p>
                        <p className="text-sm text-muted-foreground">
                          Notificar cuando se detecten patrones inusuales
                        </p>
                      </div>
                      <Button variant="outline">Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Reportes Automáticos</p>
                        <p className="text-sm text-muted-foreground">
                          Enviar resumen diario de actividades
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