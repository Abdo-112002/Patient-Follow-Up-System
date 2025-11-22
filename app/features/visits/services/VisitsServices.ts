import { axiosInstance } from "@/config/axiosInstance";

export class VisitsServices {
    static async getAllVisits(): Promise<IVisit[]> {
        const response = await axiosInstance.get("/visits");
        return response.data;
    }

    static async createVisit(data: any) {
        const response = await axiosInstance.post("/visits", data);
        return response.data;
    }

    static async getVisitById(id: string): Promise<IVisit> {
        const response = await axiosInstance.get(`/visits/${id}`);
        return response.data.patientVisit;
    }

    static async updateVisitStatus(
        id: string,
        status: string
    ): Promise<IVisit> {
        const response = await axiosInstance.patch(`/visits/${id}`, { status });
        return response.data;
    }

    static async updateVisit(id: string, data: any): Promise<IVisit> {
        const response = await axiosInstance.put(`/visits/${id}`, data);
        return response.data;
    }

    static async deleteVisit(id: string) {
        const response = await axiosInstance.delete("/visits", {
            data: { id },
        });
        return response.data;
    }
}
