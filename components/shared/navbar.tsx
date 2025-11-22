"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import axios from "axios"
import useLogout from "@/hooks/useLogout"

interface NavbarProps {
  currentPage: string
}

export function Navbar({ currentPage }: NavbarProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { isLoading, logout } = useLogout();


  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navbar header */}
        <div className="flex h-16 items-center justify-between">
          {/* Left: title */}
          <h1 className="text-xl font-bold text-primary">نظام إدارة المرضى</h1>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-4">
              <Button
                variant={currentPage === "dashboard" ? "default" : "ghost"}
                onClick={() => router.push("/dashboard")}
                className="text-base cursor-pointer"
              >
                لوحة التحكم
              </Button>
              <Button
                variant={currentPage === "patients" ? "default" : "ghost"}
                onClick={() => router.push("/patients")}
                className="text-base cursor-pointer"
              >
                المرضى
              </Button>
              <Button
                variant={currentPage === "visits" ? "default" : "ghost"}
                onClick={() => router.push("/visits")}
                className="text-base cursor-pointer"
              >
                الزيارات
              </Button>
              <Button
                variant={currentPage === "calendar" ? "default" : "ghost"}
                onClick={() => router.push("/calendar")}
                className="text-base cursor-pointer"
              >
                التقويم
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push("/patients/new")}
                className="bg-gradient-to-r cursor-pointer from-primary to-accent text-base"
              >
                مريض جديد
              </Button>
              <Button
                variant="outline"
                onClick={logout}
                className="text-base cursor-pointer bg-transparent"
              >
                {isLoading ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
              </Button>
            </div>
          </div>

          {/* Mobile toggler */}
          <button
            className="md:hidden cursor-pointer p-2 rounded-md hover:bg-accent transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="flex flex-col gap-3 pb-4 md:hidden animate-in fade-in slide-in-from-top-2">
            <Button
              variant={currentPage === "dashboard" ? "default" : "ghost"}
              onClick={() => {
                router.push("/dashboard")
                setIsOpen(false)
              }}
              className="text-base cursor-pointer w-full"
            >
              لوحة التحكم
            </Button>
            <Button
              variant={currentPage === "patients" ? "default" : "ghost"}
              onClick={() => {
                router.push("/patients")
                setIsOpen(false)
              }}
              className="text-base cursor-pointer w-full"
            >
              المرضى
            </Button>
            <Button
              variant={currentPage === "visits" ? "default" : "ghost"}
              onClick={() => {
                router.push("/visits")
                setIsOpen(false)
              }}
              className="text-base cursor-pointer w-full"
            >
              الزيارات
            </Button>

               <Button
              variant={currentPage === "calendar" ? "default" : "ghost"}
              onClick={() => {
                router.push("/calendar")
                setIsOpen(false)
              }}
              className="text-base cursor-pointer w-full"
            >
              التقويم
            </Button>

            <Button
              onClick={() => {
                router.push("/patients/new")
                setIsOpen(false)
              }}
              className="bg-gradient-to-r cursor-pointer from-primary to-accent text-base w-full"
            >
              مريض جديد
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="text-base cursor-pointer bg-transparent w-full"
            >
              {isLoading ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
