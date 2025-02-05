"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Search, 
  Play, 
  FileText, 
  Book, 
  ChevronRight,
  ExternalLink,
  Clock,
  Truck,
  Shield,
  Users,
  Fuel
} from "lucide-react"
import { useState } from "react"

export function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('')

  const tutorials = [
    {
      id: 1,
      title: 'Registro de Despacho de Combustible',
      duration: '3:45',
      thumbnail: '/tutorials/fuel-dispatch.jpg',
      category: 'Despachos'
    },
    {
      id: 2,
      title: 'Gestión de Conductores',
      duration: '2:30',
      thumbnail: '/tutorials/drivers.jpg',
      category: 'Conductores'
    },
    {
      id: 3,
      title: 'Reporte de Incidentes',
      duration: '4:15',
      thumbnail: '/tutorials/incidents.jpg',
      category: 'Incidentes'
    }
  ]

  const faqs = [
    {
      id: 1,
      question: '¿Qué hacer en caso de derrame de combustible?',
      answer: 'En caso de derrame, siga el protocolo de seguridad: detenga el despacho, active la parada de emergencia, contenga el derrame y reporte inmediatamente el incidente en el sistema.'
    },
    {
      id: 2,
      question: '¿Cómo registrar un nuevo conductor?',
      answer: 'Para registrar un nuevo conductor, vaya a la sección "Conductores", haga clic en "Nuevo Conductor" y complete la información requerida incluyendo licencia y certificaciones.'
    }
  ]

  const articles = [
    {
      id: 1,
      title: 'Mejores prácticas en despacho de combustible',
      category: 'Operaciones',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Guía de seguridad en manejo de combustible',
      category: 'Seguridad',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Optimización de rutas de abastecimiento',
      category: 'Logística',
      readTime: '6 min'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Centro de Conocimiento</h1>
          <p className="text-muted-foreground">
            Guías y tutoriales para el uso de FuelGuard
          </p>
        </div>
      </div>

      {/* Header & Search */}
      <div>
        <div className="relative mt-4">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar guías y tutoriales..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      {/* Video Tutorials */}
      <Card>
        <CardHeader>
          <CardTitle>Tutoriales en Video</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="group relative">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded-md flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {tutorial.duration}
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-medium">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground">{tutorial.category}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Preguntas Frecuentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.id} className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg hover:bg-muted">
                  <h3 className="text-sm font-medium">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Articles */}
      <Card>
        <CardHeader>
          <CardTitle>Artículos Relevantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.map((article) => (
              <Button
                key={article.id}
                variant="ghost"
                className="w-full justify-between p-4 h-auto"
              >
                <div className="flex flex-col items-start">
                  <h3 className="text-sm font-medium">{article.title}</h3>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime} lectura
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 