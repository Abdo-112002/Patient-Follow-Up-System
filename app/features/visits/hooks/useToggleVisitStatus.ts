"use client";
import { useState } from "react";
import { VisitsServices } from "../services/VisitsServices";

const useToggleVisitStatus = (refetch?: () => Promise<void>) => {
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const handleToggleStatus = async (
        id: string,
        currentStatus: "pending" | "completed",
    ) => {
        try {
            setLoadingId(id);
            const newStatus =
                currentStatus === "completed" ? "pending" : "completed";
            await VisitsServices.updateVisitStatus(id, newStatus);
            refetch?.();
        } catch (err) {
            console.error("Status update failed:", err);
            alert("فشل تحديث حالة الزيارة");
        } finally {
            setLoadingId(null);
        }
    };

    return { handleToggleStatus, loadingId };
};

export default useToggleVisitStatus;
