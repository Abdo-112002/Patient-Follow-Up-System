"use client";
import { useCallback, useState } from "react";
import { AppointmentService } from "../services/AppointmentService";

export function useCalendarEvents() {
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCalendarEvents = useCallback(async () => {
        setIsLoading(true);
        try {
            const resp = await AppointmentService.getCalendarEvents();
            if (resp.success) {
                setEvents(resp.data);
            } else {
                console.error("failed to fetch calendar events", resp);
            }
        } catch (error) {
            console.error("error fetching calendar events", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { events, isLoading, fetchCalendarEvents, setEvents };
}
