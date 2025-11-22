"use client";
import { useCallback, useState } from "react";
import { AppointmentService } from "../services/AppointmentService";

export function useAppointments() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAppointments = useCallback(async () => {
        setIsLoading(true);
        try {
            const resp = await AppointmentService.getAppointments();
            if (resp.success) {
                setAppointments(resp.data);
            } else {
                console.error("failed to fetch appointments", resp);
            }
        } catch (error) {
            console.error("error fetching appointments", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const createAppointment = useCallback(
        async (data: CreateAppointmentDTO) => {
            setIsLoading(true);
            try {
                const resp = await AppointmentService.createAppointment(data);
                if (resp.success) {
                    // ممكن نجيب اللست تاني أو نضيفه محلياً
                    await fetchAppointments();
                    return true;
                } else {
                    console.error("failed creating appointment", resp);
                    return false;
                }
            } catch (error) {
                console.error("error creating appointment", error);
                return false;
            } finally {
                setIsLoading(false);
            }
        },
        [fetchAppointments]
    );

    const deleteAppointment = useCallback(
        async (id: number) => {
            setIsLoading(true);
            try {
                const resp = await AppointmentService.deleteAppointment(id);
                if (resp.success) {
                    await fetchAppointments();
                    return true;
                } else {
                    console.error("failed deleting appointment", resp);
                    return false;
                }
            } catch (error) {
                console.error("error deleting appointment", error);
                return false;
            } finally {
                setIsLoading(false);
            }
        },
        [fetchAppointments]
    );

    return {
        appointments,
        isLoading,
        fetchAppointments,
        createAppointment,
        deleteAppointment,
    };
}
