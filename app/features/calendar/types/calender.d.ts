declare global {
    interface Appointment {
        id: number;
        title: string;
        date: string;
        time: string;
        needSpecialist: boolean;
        specialistType?: string | null;
        createdAt: Date;
        updatedAt: Date;
    }

    interface CreateAppointmentDTO {
        title: string;
        date: string;
        time: string;
        needSpecialist: boolean;
        specialistType?: string;
    }

    type CalendarEvent = {
        id: number;
        title: string;
        time: string;
        specialistType?: string | null;
        raw?: Appointment;
    };




    // interface AppointmentApiResponse {
    //     success: boolean;
    //     data?: Appointment;
    //     error?: string;
    // }

}

export {};
