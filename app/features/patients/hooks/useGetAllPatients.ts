"use client";

import { useEffect, useState } from "react";
import { PatientService } from "../services/PatientService";

export const useGetAllPatients = () => {
    const [patients, setPatients] = useState<IPatient[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchPatients = async (searchTerm?: string) => {
        try {
            const data = await PatientService.getAllPatients(searchTerm);
            setPatients(data);
        } catch (err) {
            console.error(err);
            setError("فشل تحميل المرضى");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    return { patients, loading, error  , fetchPatients};
};
