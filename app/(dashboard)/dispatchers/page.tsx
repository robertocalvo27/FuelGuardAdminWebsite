"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Plus, Clock, BarChart2 } from "lucide-react"
import { NewDispatcherForm } from "@/components/dispatchers/new-dispatcher-form"
import { DispatcherDetails } from "@/components/dispatchers/dispatcher-details"
import { dispatchers } from "@/lib/data/dispatchers"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DispatchersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewDispatcherForm, setShowNewDispatcherForm] = useState(false)
  const [selectedDispatcher, setSelectedDispatcher] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("activos")

  const filteredDispatchers = dispatchers.filter(dispatcher => {
    const matchesSearch = 
      dispatcher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dispatcher.document.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (activeTab === "activos") return matchesSearch && dispatcher.status === "Activo"
    if (activeTab === "inactivos") return matchesSearch && dispatcher.status === "Inactivo"
    return matchesSearch
  })

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Despachadores</h2>
        <Button onClick={() => setShowNewDispatcherForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nuevo Despachador
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Despachadores
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dispatchers.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 nuevos este mes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Turno Actual
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Despachadores activos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Eficiencia Promedio
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              +2% respecto al mes anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          placeholder="Buscar despachador..."
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
          <TabsTrigger value="inactivos">Inactivos</TabsTrigger>
          <TabsTrigger value="todos">Todos</TabsTrigger>
        </TabsList>
        <TabsContent value="activos" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Turno</TableHead>
                <TableHead>Proyecto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Eficiencia</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDispatchers.map((dispatcher) => (
                <TableRow key={dispatcher.id}>
                  <TableCell>{dispatcher.name}</TableCell>
                  <TableCell>{dispatcher.document}</TableCell>
                  <TableCell>{dispatcher.shift}</TableCell>
                  <TableCell>{dispatcher.project}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      dispatcher.status === "Activo" 
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {dispatcher.status}
                    </span>
                  </TableCell>
                  <TableCell>{dispatcher.efficiency}</TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedDispatcher(dispatcher)}
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

      <NewDispatcherForm 
        open={showNewDispatcherForm} 
        onOpenChange={setShowNewDispatcherForm}
      />

      {selectedDispatcher && (
        <DispatcherDetails
          open={!!selectedDispatcher}
          onOpenChange={(open) => !open && setSelectedDispatcher(null)}
          dispatcher={selectedDispatcher}
        />
      )}
    </div>
  )
}