"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PatientService } from "../services/PatientService";
import { PatientRegistrationFormData } from "@/lib/validation-schemas";

export const useUpdatePatient = (id: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const updatePatient = async (
        data: PatientRegistrationFormData & { companions?: Companion[] }
    ) => {
        setLoading(true);
        setError(null);

        try {
            const patient = await PatientService.updatePatient(id, data);
            router.push(`/patients`);
            return patient;
        } catch (err: any) {
            console.error("updatePatient error:", err);
            setError(err?.response?.data?.error || "فشل تحديث بيانات المريض");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { updatePatient, loading, error };
};

export default useUpdatePatient;
