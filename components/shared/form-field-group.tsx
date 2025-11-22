import type { ReactNode } from "react"
import { Label } from "@/components/ui/label"

interface FormFieldGroupProps {
  label: string
  children: ReactNode
  className?: string
}

export function FormFieldGroup({ label, children, className = "" }: FormFieldGroupProps) {
  return (
    <div className={className}>
      <Label className="text-base font-medium">{label}</Label>
      <div className="mt-2">{children}</div>
    </div>
  )
}
