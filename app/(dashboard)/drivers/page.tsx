"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Search, Plus, Fuel, AlertTriangle } from "lucide-react"
import { NewDriverForm } from "@/components/drivers/new-driver-form"
import { DriverDetails } from "@/components/drivers/driver-details"
import { drivers } from "@/lib/data/drivers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DriversPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewDriverForm, setShowNewDriverForm] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("activos")

  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = 
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.plate.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (activeTab === "activos") return matchesSearch && driver.status === "Activo"
    if (activeTab === "suspendidos") return matchesSearch && driver.status === "Inactivo"
    return matchesSearch
  })

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Conductores</h2>
        <Button onClick={() => setShowNewDriverForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Conductor
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Conductores
            </CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{drivers.length}</div>
            <p className="text-xs text-muted-foreground">
              +5 nuevos este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consumo Promedio
            </CardTitle>
            <Fuel className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2 L</div>
            <p className="text-xs text-muted-foreground">
              Por despacho
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Alertas Activas
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Consumos irregulares
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="Buscar por nombre o placa..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" variant="secondary">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="activos" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="activos">Activos</TabsTrigger>
          <TabsTrigger value="suspendidos">Suspendidos</TabsTrigger>
          <TabsTrigger value="todos">Todos</TabsTrigger>
        </TabsList>
        <TabsContent value="activos" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Vehículo</TableHead>
                <TableHead>Placa</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Último Despacho</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDrivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell>DNI: {driver.document}</TableCell>
                  <TableCell>{driver.vehicle}</TableCell>
                  <TableCell>{driver.plate}</TableCell>
                  <TableCell>{driver.company}</TableCell>
                  <TableCell>{driver.lastDispatch}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      driver.status === "Activo" 
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {driver.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedDriver(driver)}
                    >
                      Ver detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <NewDriverForm 
        open={showNewDriverForm} 
        onOpenChange={setShowNewDriverForm}
      />

      {selectedDriver && (
        <DriverDetails
          open={!!selectedDriver}
          onOpenChange={(open) => !open && setSelectedDriver(null)}
          driver={selectedDriver}
        />
      )}
    </div>
  )
}