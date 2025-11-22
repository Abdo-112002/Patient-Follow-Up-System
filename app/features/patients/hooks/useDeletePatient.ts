"use client";

import { useState } from "react";
import { PatientService } from "../services/PatientService";

export const useDeletePatient = (reFetch: () => void) => {
    const [deleteLoading, setLoading] = useState(false);
    const [deleteError, setError] = useState("");

    const handleDelete = async (id: string) => {
        setLoading(true);
        try {
            await PatientService.deletePatient(id);
            reFetch();
            return true;
        } catch (err) {
            console.error(err);
            setError("فشل حذف المريض");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { handleDelete, deleteLoading, deleteError };
};
