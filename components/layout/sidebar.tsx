"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  GaugeCircle, 
  Users, 
  Truck, 
  Settings, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  Home, 
  Smartphone,
  Download
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const sidebarNavItems = [
  {
    title: "Inicio",
    href: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: GaugeCircle,
  },
  {
    title: "Reportes",
    href: "/reports",
    icon: BarChart3,
  },
  {
    title: "Despachadores",
    href: "/dispatchers",
    icon: Users,
  },
  {
    title: "Conductores",
    href: "/drivers",
    icon: Truck,
  },
  {
    title: "Incidentes",
    href: "/incidents",
    icon: Shield,
  },
  {
    title: "Configuración",
    href: "/settings",
    icon: Settings,
    subItems: [
      {
        title: "Personal",
        href: "/profile",
      },
      {
        title: "Compañía",
        href: "/settings/company",
      },
      {
        title: "Sistema",
        href: "/settings/system",
      },
    ],
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <div className={cn("pb-6 min-h-screen flex flex-col", className)}>
      <div className="flex-1 space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            FuelGuard
          </h2>
        </div>
        <ScrollArea className="px-1">
          <div className="space-y-1 p-2">
            {sidebarNavItems.map((item) => (
              <div key={item.href}>
                {item.subItems ? (
                  <div className="space-y-1">
                    <Button
                      variant={pathname.startsWith(item.href) ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-between",
                        pathname.startsWith(item.href) && "bg-accent"
                      )}
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.title && "rotate-180"
                        )}
                      />
                    </Button>
                    {openSubmenu === item.title && (
                      <div className="ml-4 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Button
                            key={subItem.href}
                            variant={pathname === subItem.href ? "secondary" : "ghost"}
                            className={cn(
                              "w-full justify-start",
                              pathname === subItem.href && "bg-accent"
                            )}
                            asChild
                          >
                            <Link href={subItem.href}>
                              {subItem.title}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-accent"
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1" />

      <div className="px-3 mb-6">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">App Móvil Disponible</h4>
                <p className="text-xs text-muted-foreground">
                  Descarga nuestra app para un mejor control
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                asChild
              >
                <Link href="#" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">iOS App</span>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start"
                asChild
              >
                <Link href="#" className="flex items-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">Android App</span>
                </Link>
              </Button>
            </div>

            <div className="text-[10px] text-muted-foreground text-center">
              Disponible para iOS 14.0+ y Android 8.0+
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}