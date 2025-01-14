import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { GuardBot } from "@/components/guardbot/guardbot"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-72 border-r bg-muted/40 md:block">
        <Sidebar />
      </aside>
      <div className="flex w-full flex-col">
        <Header />
        <main className="flex-1 p-8">{children}</main>
        <GuardBot />
      </div>
    </div>
  )
}