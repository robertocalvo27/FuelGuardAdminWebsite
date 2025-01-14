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
import { ReportModal } from "@/components/reports/report-modal"
import { 
  Download,
  Filter,
  Search,
  FileText,
  BarChart2,
  AlertTriangle,
  Droplet
} from "lucide-react"

export default function AllReportsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [selectedReport, setSelectedReport] = useState<any>(null)

  const reports = [
    {
      title: "Reporte Diario de Consumo",
      description: "Análisis detallado del consumo diario de combustible por unidad, incluyendo tendencias y comparativas.",
      category: "consumo",
      icon: Droplet,
      chart: true
    },
    {
      title: "Resumen Semanal de Incidencias",
      description: "Resumen completo de todas las incidencias reportadas durante la semana, clasificadas por tipo y gravedad.",
      category: "incidencias",
      icon: AlertTriangle,
      chart: true
    },
    {
      title: "Análisis Mensual de Rendimiento",
      description: "Evaluación mensual del rendimiento general del sistema, incluyendo métricas clave y KPIs.",
      category: "rendimiento",
      icon: BarChart2,
      chart: true
    }
  ]

  const filteredReports = reports.filter(report => 
    (category === "all" || report.category === category) &&
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Todos los Reportes</h2>
          <p className="text-muted-foreground">
            Accede a todos los reportes disponibles en el sistema
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Exportar Todo
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Buscar reportes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" variant="secondary">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="consumo">Consumo</SelectItem>
            <SelectItem value="incidencias">Incidencias</SelectItem>
            <SelectItem value="rendimiento">Rendimiento</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredReports.map((report) => (
          <Card 
            key={report.title}
            className="cursor-pointer hover:bg-muted/50"
            onClick={() => setSelectedReport(report)}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">
                {report.title}
              </CardTitle>
              <report.icon className="h-5 w-5" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {report.description}
              </p>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" /> Ver Reporte
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedReport && (
        <ReportModal
          open={!!selectedReport}
          onOpenChange={() => setSelectedReport(null)}
          report={selectedReport}
        />
      )}
    </div>
  )
}