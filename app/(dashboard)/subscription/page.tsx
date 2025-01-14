"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Calendar, Zap, Package } from "lucide-react"
import Link from "next/link"

export default function SubscriptionPage() {
  const subscription = {
    plan: "Pro 100",
    status: "active",
    nextBilling: "2024-04-20",
    tokensUsed: 75,
    tokensTotal: 100
  }

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Mi Suscripción</h2>
        <Button asChild>
          <Link href="/pricing">Cambiar Plan</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Plan Actual</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscription.plan}</div>
            <p className="text-xs text-muted-foreground">Plan empresarial</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Estado</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">{subscription.status}</div>
            <p className="text-xs text-muted-foreground">Suscripción activa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Próximo Cobro</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscription.nextBilling}</div>
            <p className="text-xs text-muted-foreground">Renovación automática</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Método de Pago</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">•••• 4242</div>
            <p className="text-xs text-muted-foreground">Visa - Expira 12/25</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Uso de Tokens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Tokens Utilizados: {subscription.tokensUsed}/{subscription.tokensTotal}</span>
              <span className="text-muted-foreground">
                {Math.round((subscription.tokensUsed / subscription.tokensTotal) * 100)}%
              </span>
            </div>
            <Progress 
              value={(subscription.tokensUsed / subscription.tokensTotal) * 100} 
              className="h-2"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Tu plan actual incluye {subscription.tokensTotal} tokens por mes. 
            Los tokens se renuevan automáticamente el día {subscription.nextBilling}.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}