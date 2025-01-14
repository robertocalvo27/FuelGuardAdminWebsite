"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const plans = [
  {
    name: "P100",
    price: "$100",
    description: "Ideal para flotas pequeñas",
    features: [
      "100 tokens mensuales",
      "Soporte por email",
      "Acceso a API básica",
      "1 proyecto",
      "Reportes básicos",
      "Análisis básico"
    ],
    popular: false
  },
  {
    name: "P500",
    price: "$500",
    description: "Perfecto para empresas en crecimiento",
    features: [
      "500 tokens mensuales",
      "Soporte prioritario",
      "API completa",
      "5 proyectos",
      "Reportes avanzados",
      "Análisis en tiempo real",
      "Integración básica"
    ],
    popular: true
  },
  {
    name: "P1000",
    price: "$1,000",
    description: "Para operaciones a gran escala",
    features: [
      "1000 tokens mensuales",
      "Soporte 24/7",
      "API personalizada",
      "10 proyectos",
      "Reportes personalizados",
      "Análisis predictivo",
      "Integración avanzada"
    ],
    popular: false
  },
  {
    name: "Enterprise",
    price: "Contactar",
    description: "Solución personalizada para grandes empresas",
    features: [
      "Tokens ilimitados",
      "Soporte dedicado 24/7",
      "API enterprise",
      "Proyectos ilimitados",
      "Reportes enterprise",
      "Análisis avanzado personalizado",
      "Integración enterprise",
      "SLA garantizado",
      "Implementación dedicada"
    ],
    popular: false
  }
]

export default function PricingPage() {
  const { toast } = useToast()

  const handleUpgrade = (plan: string) => {
    toast({
      title: "Plan actualizado",
      description: `Tu suscripción ha sido actualizada al plan ${plan}.`,
    })
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Planes y Precios</h2>
        <p className="text-muted-foreground">
          Elige el plan que mejor se adapte a tus necesidades
        </p>
      </div>

      <div className="grid gap-6 pt-8 lg:grid-cols-4 lg:gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={cn(
              "relative",
              plan.popular && "border-primary shadow-lg"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <span>{plan.name}</span>
                  <Zap className={cn(
                    "h-5 w-5",
                    plan.popular ? "text-primary" : "text-muted-foreground"
                  )} />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2 text-center">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/mes</span>
                <p className="text-sm text-muted-foreground pt-1">
                  {plan.description}
                </p>
              </div>
              <div className="space-y-2">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleUpgrade(plan.name)}
              >
                {plan.name === "Enterprise" ? "Contactar Ventas" : "Actualizar Plan"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}