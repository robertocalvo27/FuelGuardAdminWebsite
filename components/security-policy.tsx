"use client"

import { Shield, Lock, Server, AlertTriangle, KeyRound, Database, Eye, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SecurityPolicy() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Política de Privacidad</h1>
          <p className="text-muted-foreground">
            Medidas de seguridad y protección de datos en FuelGuard
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <CardTitle>Compromiso de Seguridad</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>FuelGuard implementa medidas de seguridad de nivel empresarial para proteger los datos sensibles de consumo de combustible y prevenir accesos no autorizados.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-primary" />
            <CardTitle>Seguridad de Datos</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Encriptación</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos en tránsito: TLS 1.3 para todas las comunicaciones</li>
                <li>Datos en reposo: AES-256 para almacenamiento</li>
                <li>Encriptación de extremo a extremo para datos sensibles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Almacenamiento</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Servidores redundantes en múltiples zonas geográficas</li>
                <li>Copias de seguridad diarias encriptadas</li>
                <li>Aislamiento de datos entre clientes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <KeyRound className="w-5 h-5 text-primary" />
            <CardTitle>Control de Acceso</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Autenticación multifactor (MFA) obligatoria para accesos críticos</li>
            <li>Sistema de roles y permisos granular</li>
            <li>Registro detallado de todas las acciones de usuarios</li>
            <li>Políticas de contraseñas robustas</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5 text-primary" />
            <CardTitle>Monitoreo y Detección</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="bg-muted p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>Monitoreo 24/7 de actividad sospechosa</li>
            <li>Sistemas de detección de intrusiones (IDS/IPS)</li>
            <li>Alertas automáticas de comportamientos anómalos</li>
            <li>Análisis de patrones de consumo para detectar fraudes</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Server className="w-5 h-5 text-primary" />
            <CardTitle>Infraestructura</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Centros de datos certificados ISO 27001</li>
            <li>Firewalls de última generación</li>
            <li>Arquitectura de microservicios aislados</li>
            <li>Escaneo regular de vulnerabilidades</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <RefreshCw className="w-5 h-5 text-primary" />
            <CardTitle>Continuidad de Negocio</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="bg-muted p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>SLA de disponibilidad del 99.9%</li>
            <li>Plan de recuperación ante desastres documentado</li>
            <li>Pruebas regulares de respaldo y recuperación</li>
            <li>Redundancia en todos los sistemas críticos</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <CardTitle>Gestión de Incidentes</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-lg">
            <ul className="list-disc pl-6 space-y-2">
              <li>Equipo de respuesta a incidentes 24/7</li>
              <li>Protocolo de notificación de brechas</li>
              <li>Tiempo de respuesta garantizado según severidad</li>
              <li>Análisis post-incidente y mejora continua</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Database className="w-5 h-5 text-primary" />
            <CardTitle>Cumplimiento y Certificaciones</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>ISO 27001 - Gestión de Seguridad de la Información</li>
            <li>SOC 2 Type II - Controles de Seguridad y Privacidad</li>
            <li>Cumplimiento con regulaciones de protección de datos</li>
            <li>Auditorías de seguridad regulares por terceros</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle>Contacto de Seguridad</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Para reportar vulnerabilidades o incidentes de seguridad, contacte inmediatamente a:{' '}
            <a href="mailto:security@fuelguard.com" className="text-primary hover:underline">
              security@fuelguard.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
} 