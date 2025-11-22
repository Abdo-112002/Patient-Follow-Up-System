"use client"

import { useRouter } from "next/navigation"
import { Navbar } from "@/components/shared/navbar"
import QuickActionsCard from "../components/QuickActionsCard"

const Home = () => {
    const router = useRouter()
    return (
        <div>
            <Navbar currentPage="dashboard" />

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid gap-6 md:grid-cols-3">
                    <QuickActionsCard
                        title="المرضى"
                        description="إدارة المرضى المسجلين"
                        buttonText="عرض المرضى"
                        icon="👥"
                        onClick={() => router.push("/patients")}
                    />

                    <QuickActionsCard
                        title="مريض جديد"
                        description="تسجيل مريض جديد"
                        buttonText="مريض جديد"
                        icon="➕"
                        onClick={() => router.push("/patients/new")}
                        buttonClassName="bg-gradient-to-r from-primary to-accent"
                    />

                    <QuickActionsCard
                        title="الزيارات"
                        description="إدارة الزيارات الطبية"
                        buttonText="عرض الزيارات"
                        icon="📋"
                        onClick={() => router.push("/visits")}
                    />
                </div>
            </main>
        </div>
    )
}

export default Home
