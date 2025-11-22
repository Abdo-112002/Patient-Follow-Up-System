import { axiosInstance } from "@/config/axiosInstance";

export class AppointmentService {
    static async getAppointments() {
        const res = await axiosInstance.get("/appointments");
        return res.data; // { success, data }
    }

    static async createAppointment(dto: CreateAppointmentDTO) {
        const res = await axiosInstance.post("/appointments", dto);
        return res.data;
    }

    static async deleteAppointment(id: number) {
        const res = await axiosInstance.delete(`/appointments/${id}`);
        return res.data;
    }

    // تحويل للمناسب للكاليندر
    static async getCalendarEvents() {
        const resp = await this.getAppointments();
        if (!resp.success) return { success: false, data: [] };
        const data: Appointment[] = resp.data;

        const events = data.map((a) => {
            const start = new Date(a.date); // لازم Date object
            const end = new Date(a.date); // لازم end برضه
            end.setMinutes(end.getMinutes() + 30); // 30 دقيقة افتراضية

            return {
                id: a.id,
                start, 
                end,
                title: a.title,
                time: a.time,
                needSpecialist: a.needSpecialist,
                specialistType: a.specialistType,
                raw: a,
            };
        });

        return { success: true, data: events };
    }
}
