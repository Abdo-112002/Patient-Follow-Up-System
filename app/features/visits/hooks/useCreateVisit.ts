// src/hooks/visits/useCreateVisit.ts
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VisitsServices } from "../services/VisitsServices";

export function useCreateVisit() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createVisit = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await VisitsServices.createVisit(data);
            router.push("/visits");
            return response;
        } catch (err: any) {
            console.error("Create visit error:", err);
            setError(
                err?.response?.data?.error || "حدث خطأ أثناء إنشاء الزيارة"
            );
        } finally {
            setLoading(false);
        }
    };

    return { createVisit, loading, error };
}
