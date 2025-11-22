"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { VisitsServices } from "../services/VisitsServices";


export function useUpdateVisit() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateVisit = async (id: string, data: any) => {
        setLoading(true);
        setError(null);

        try {
            const response = await VisitsServices.updateVisit(id, data);
            router.push("/visits");
            return response;
        } catch (err: any) {
            console.error("Update visit error:", err);
            setError(
                err?.response?.data?.error || "حدث خطأ أثناء تحديث الزيارة"
            );
        } finally {
            setLoading(false);
        }
    };

    return { updateVisit, loading, error };
}
