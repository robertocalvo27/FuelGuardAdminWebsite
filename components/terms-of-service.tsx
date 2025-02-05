"use client"

import { Shield, AlertTriangle, Mail, Phone, FileText, Lock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TermsOfService() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Términos de Uso</h1>
          <p className="text-muted-foreground">
            Condiciones de uso de la plataforma FuelGuard
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <CardTitle>Introducción</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>
            Bienvenido a FuelGuard, la plataforma de gestión y control de combustible. Este sistema está diseñado para optimizar el control de consumo de combustible y prevenir pérdidas. Al utilizar FuelGuard, los usuarios aceptan cumplir con los siguientes términos y condiciones.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-primary" />
            <CardTitle>Acceso al Sistema</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>El acceso se otorga según el tipo de suscripción contratada (Corporativa o Individual).</li>
            <li>Cada usuario recibe credenciales únicas que no deben compartirse bajo ninguna circunstancia.</li>
            <li>Las empresas con suscripción corporativa son responsables de gestionar los accesos de sus empleados.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Continuar con el resto de secciones... */}

      <Card className="bg-destructive/10">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <CardTitle>Consecuencias por Incumplimiento</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>El uso fraudulento resultará en la suspensión inmediata del servicio.</li>
            <li>FuelGuard se reserva el derecho de reportar actividades sospechosas a las autoridades.</li>
            <li>La manipulación de datos puede resultar en acciones legales.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-primary/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <CardTitle>Soporte Técnico</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Para asistencia técnica o reportar problemas, contacte a nuestro equipo de soporte:
          </p>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:soporte@fuelguard.com" className="text-primary hover:underline">
              soporte@fuelguard.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">(+123) 456-7890</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 