"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PatientService } from "../services/PatientService";
import { PatientRegistrationFormData } from "@/lib/validation-schemas";

export const useCreatePatient = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const createPatient = async (
        data: PatientRegistrationFormData & { companions?: Companion[] }
    ) => {
        setLoading(true);
        setError(null);
        try {
            const patient = await PatientService.createPatient(data);
            router.push(`/patients`);
            return patient;
        } catch (err: any) {
            console.error("createPatient error:", err);
            setError(err?.response?.data?.error || "فشل إنشاء المريض");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createPatient, loading, error };
};

export default useCreatePatient;
