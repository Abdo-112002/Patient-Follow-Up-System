import AddNewVisit from "@/app/features/visits/pages/AddNewVisit"
import { Suspense } from "react"

export default function NewVisitPage() {
  return (
    <Suspense>
      <AddNewVisit />
    </Suspense>
  )
}
