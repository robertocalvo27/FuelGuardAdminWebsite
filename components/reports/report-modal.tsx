"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, FileSpreadsheet, FileText } from "lucide-react"
import { LineChart } from "@/components/ui/chart"

interface ReportModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  report: {
    title: string
    description: string
    chart?: boolean
  }
}

export function ReportModal({ open, onOpenChange, report }: ReportModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{report.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {report.description}
          </p>
          {report.chart && (
            <div className="rounded-lg border p-4">
              <LineChart />
            </div>
          )}
          <div className="flex space-x-2">
            <Button className="flex-1">
              <FileText className="mr-2 h-4 w-4" />
              Exportar PDF
            </Button>
            <Button className="flex-1">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Exportar Excel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}