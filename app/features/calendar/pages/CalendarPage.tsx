"use client"

import { AppointmentFormData } from "@/lib/validation-schemas"
import { useEffect, useState } from "react"
import { Calendar } from "../components/Calendar"
import { AddAppointmentDialog } from "../components/AddAppointmentDialog"
import { Navbar } from "@/components/shared/navbar"
import { useCalendarEvents } from "../hooks/useCalendarEvents"
import { useAppointments } from "../hooks/useAppointments"

export default function CalendarPage() {
    const { events, isLoading: isCalendarLoading, fetchCalendarEvents } = useCalendarEvents()
    const { appointments, isLoading: isAppointmentsLoading, fetchAppointments, createAppointment, deleteAppointment } = useAppointments()
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<any>(null)
    const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false)

    useEffect(() => {
        fetchCalendarEvents()
        fetchAppointments()
    }, [fetchCalendarEvents, fetchAppointments])

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date)
        setIsDialogOpen(true)
    }

    const handleEventSelect = (event: any) => {
        setSelectedEvent(event)
        setIsEventDetailsOpen(true)
    }

    const handleAddAppointment = async (data: AppointmentFormData) => {
        const success = await createAppointment(data as any)
        if (success) {
            await fetchCalendarEvents()
            await fetchAppointments()
        }
        return success
    }

    // const handleDeleteAppointment = async (id: number) => {
    //     await deleteAppointment(id)
    //     await fetchCalendarEvents()
    //     await fetchAppointments()
    // }

    const isLoading = isCalendarLoading || isAppointmentsLoading

    return (
        <div>
            <Navbar currentPage="calendar" />
            <div className="min-h-screen bg-linear-to-br from-background via-secondary/20 to-background p-4 md:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <Calendar
                            events={events}
                            onSelectDate={handleDateSelect}
                            onSelectEvent={handleEventSelect}
                            isLoading={isLoading}
                        />
                    </div>
                </div>

                <AddAppointmentDialog
                    open={isDialogOpen}
                    onOpenChange={setIsDialogOpen}
                    selectedDate={selectedDate}
                    onSubmit={handleAddAppointment}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}
