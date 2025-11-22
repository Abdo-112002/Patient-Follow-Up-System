import { axiosInstance } from "@/config/axiosInstance";
import { PatientRegistrationFormData } from "@/lib/validation-schemas";

export class PatientService {
    static async getAllPatients(searchTerm?: string): Promise<IPatient[]> {
        const response = await axiosInstance.get("/patients", {
            params: {
                searchTerm,
            },
        });
        return response.data.patients;
    }

    static async getPatientById(id: string): Promise<IPatient> {
        const response = await axiosInstance.get(`/patients/${id}`);
        return response.data.patient;
    }

    static async createPatient(
        payload: PatientRegistrationFormData & { companions?: Companion[] }
    ) {
        const res = await axiosInstance.post("/patients", payload);
        return res.data.patient;
    }

    static async updatePatient(
        id: string,
        payload: PatientRegistrationFormData & { companions?: Companion[] }
    ): Promise<IPatient> {
        const response = await axiosInstance.patch(`/patients/${id}`, payload);
        return response.data.patient;
    }

    static async deletePatient(id: string) {
        const response = await axiosInstance.delete(`/patients/${id}`);
        return response.data;
    }
}
