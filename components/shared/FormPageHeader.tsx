import { Navbar } from "./navbar"
import BackButton from "./BackButton"



export function FormPageHeader() {
  return (
    <div>
      <Navbar currentPage="patients" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 pb-0">
        <div className="mb-8">
          <BackButton />
        </div>
      </main>
    </div>
  )
}
