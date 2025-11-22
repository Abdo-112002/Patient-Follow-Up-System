import { useCallback, useState } from "react";
import { VisitsServices } from "../services/VisitsServices";

const useDeleteVisit = (fetchVisits: () => Promise<void>) => {
    const [error, setError] = useState("");
    const handleDeleteVisit = useCallback(
        async (id: string) => {
            try {
                await VisitsServices.deleteVisit(id);
                await fetchVisits();
            } catch (err) {
                console.error(err);
                setError("فشل حذف الزيارة");
            }
        },
        [fetchVisits]
    );

    return {
        handleDeleteVisit,
    };
};

export default useDeleteVisit;
