"use client"

import { Mail, Phone, Shield, Lock, Database, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PrivacyPolicy() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Política de Privacidad</h1>
          <p className="text-muted-foreground">
            Protección y tratamiento de datos personales en FuelGuard
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
            En FuelGuard, nos comprometemos a proteger la privacidad y seguridad de los datos personales recopilados y procesados a través de nuestro sistema de gestión de combustible. Este documento describe cómo recopilamos, utilizamos y protegemos la información de nuestros usuarios corporativos e individuales.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-primary" />
            <CardTitle>Datos Recopilados</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Datos personales: nombre, cargo, identificación, correo electrónico, información del vehículo o equipo.</li>
            <li>Datos operativos: registros de despacho de combustible, consumos, ubicación de entregas, estadísticas de rendimiento.</li>
            <li>Información técnica: dirección IP, tipo de dispositivo, navegador utilizado, datos de geolocalización y registros de acceso.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Continuar con el resto de secciones... */}

      <Card className="bg-primary/5">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <CardTitle>Contacto</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Para consultas sobre privacidad o gestión de datos, contacte a nuestro equipo de protección de datos:
          </p>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:privacidad@fuelguard.com" className="text-primary hover:underline">
              privacidad@fuelguard.com
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