"use client"
import { Navbar } from "@/components/shared/navbar"
import { Button } from "@/components/ui/button"
import PatientCard from "../components/PatientCard"
import { useGetAllPatients } from "../hooks/useGetAllPatients"
import { useRouter } from "next/navigation"
import SearchInput from "@/components/shared/SearchInput"
import { LoadingCardsGrid } from "@/components/shared/LoadingCardsGrid"

const ShowAllPatients = () => {
  const router = useRouter();
  const { patients, loading, error, fetchPatients } = useGetAllPatients();

  return (
    <div>
      <Navbar currentPage="patients" />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">المرضى</h1>
            <p className="text-muted-foreground mt-2">قائمة جميع المرضى المسجلين في النظام</p>
          </div>
          <SearchInput fetchData={fetchPatients} />
        </div>



        {loading ? (
          <LoadingCardsGrid />
        ) : error ? (
          <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg">{error}</div>
        ) : patients.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-96 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">لا توجد مرضى مسجلين</h2>
            <p className="text-muted-foreground mb-6">ابدأ بإضافة مريض جديد للنظام</p>
            <Button
              onClick={() => router.push("/patients/new")}
              className="bg-gradient-to-r from-primary cursor-pointer to-accent text-primary-foreground font-semibold"
            >
              + إضافة أول مريض
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {patients.map((patient) => (
              <PatientCard
                key={patient?.id}
                id={patient?.id}
                patientName={patient?.patientName}
                gender={patient?.gender}
                age={patient?.age}
                phoneNumber={patient?.phoneNumber}
                fetchPatients={fetchPatients}
                fileOpenDate={patient?.fileOpenDate}
                onNewVisit={(id) => router.push(`/visits/new?patientId=${id}`)}
              />
            ))}

          </div>
        )}
      </main>
    </div>
  )
}

export default ShowAllPatients
