"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { VisitsServices } from "../services/VisitsServices";


const useGetAllVisits = () => {
    const router = useRouter();
    const [visits, setVisits] = useState<IVisit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchVisits = useCallback(async () => {
        setLoading(true);
        try {
            const data = await VisitsServices.getAllVisits();
            setVisits(data);
            setError("");
        } catch (err) {
            console.error(err);
            setError("فشل تحميل الزيارات");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchVisits();
    }, [fetchVisits]);

    return {
        router,
        visits,
        loading,
        error,
        refetch: fetchVisits,
    };
};

export default useGetAllVisits;
