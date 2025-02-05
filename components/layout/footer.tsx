"use client"

import Link from "next/link"
import { Shield, Lock, FileText, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn("border-t py-4 px-6", className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-medium">FuelGuard</span>
          <span className="text-sm text-muted-foreground">
            © 2025. Todos los derechos reservados.
          </span>
        </div>
        <nav className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground inline-flex items-center">
            <Lock className="h-4 w-4 mr-1" />
            Política de Privacidad
          </Link>
          <Link href="/terms" className="hover:text-foreground inline-flex items-center">
            <FileText className="h-4 w-4 mr-1" />
            Términos de Uso
          </Link>
          <Link href="/help" className="hover:text-foreground inline-flex items-center">
            <HelpCircle className="h-4 w-4 mr-1" />
            Ayuda
          </Link>
        </nav>
      </div>
    </footer>
  )
} 