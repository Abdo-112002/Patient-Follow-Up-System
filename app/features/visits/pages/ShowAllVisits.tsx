"use client"
import { Navbar } from "@/components/shared/navbar"
import { Button } from "@/components/ui/button"
import useDeleteVisit from "../hooks/useDeleteVisit"
import useToggleVisitStatus from "../hooks/useToggleVisitStatus"
import VisitCard from "../components/VisitCard"
import useGetAllVisits from "../hooks/useGetAllVisits"
import { LoadingCardsGrid } from "@/components/shared/LoadingCardsGrid"


const ShowAllVisits = () => {

  const { router, visits, loading, error, refetch } = useGetAllVisits();
  const { handleDeleteVisit } = useDeleteVisit(refetch);
  const { handleToggleStatus } = useToggleVisitStatus(refetch);
  return (
    <div>
      <Navbar currentPage="visits" />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">الزيارات</h1>
            <p className="text-muted-foreground mt-2">قائمة جميع الزيارات الطبية</p>
          </div>
          <Button
            onClick={() => router.push("/patients")}
            className="bg-gradient-to-r cursor-pointer from-primary to-accent text-base"
          >
            إضافة زيارة
          </Button>
        </div>



        {loading ? (
          <LoadingCardsGrid />
        ) : error ? (
          <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg">{error}</div>
        ) : visits.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-96 text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">لا توجد زيارات مسجلة</h2>
            <p className="text-muted-foreground mb-6">ابدأ بإضافة زيارة جديدة </p>
            <Button
              onClick={() => router.push("/patients")}
              className="bg-gradient-to-r from-primary cursor-pointer to-accent text-primary-foreground font-semibold"
            >
              + إضافة أول زيارة
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visits.map((visit) => (
              <VisitCard
                key={visit.id}
                visit={visit as any}
                onToggleStatus={handleToggleStatus}
                onDelete={handleDeleteVisit}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default ShowAllVisits
