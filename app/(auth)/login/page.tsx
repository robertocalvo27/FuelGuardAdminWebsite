"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fingerprint, Key, ShieldCheck } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
      toast({
        title: "Inicio de sesión exitoso",
        description: "Bienvenido al sistema FuelGuard",
      })
    }, 1000)
  }

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
        <div className="absolute inset-0">
          <Image
            src="/fuelguard-hero.png"
            alt="FuelGuard Hero"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-zinc-900/50" />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <ShieldCheck className="mr-2 h-6 w-6" />
          FuelGuard
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              Sistema integral para el monitoreo y control de combustible
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Iniciar sesión
            </h1>
            <p className="text-sm text-muted-foreground">
              Ingrese sus credenciales para acceder al sistema
            </p>
          </div>
          <Tabs defaultValue="password" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="password">Contraseña</TabsTrigger>
              <TabsTrigger value="pin">PIN</TabsTrigger>
              <TabsTrigger value="faceid">FaceID</TabsTrigger>
            </TabsList>
            <TabsContent value="password">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ejemplo@fuelguard.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? (
                    "Iniciando sesión..."
                  ) : (
                    <>
                      <Key className="mr-2 h-4 w-4" /> Ingresar
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="pin">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pin">PIN de 6 dígitos</Label>
                  <Input
                    id="pin"
                    type="password"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    placeholder="******"
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? (
                    "Verificando..."
                  ) : (
                    <>
                      <Key className="mr-2 h-4 w-4" /> Verificar PIN
                    </>
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="faceid">
              <div className="flex flex-col items-center space-y-4">
                <Fingerprint className="h-16 w-16 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Haga clic en el botón para iniciar el reconocimiento facial
                </p>
                <Button
                  className="w-full"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? (
                    "Verificando..."
                  ) : (
                    <>
                      <Fingerprint className="mr-2 h-4 w-4" /> Iniciar FaceID
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}