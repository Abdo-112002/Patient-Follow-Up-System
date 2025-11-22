import { useEffect } from "react";
import { UseFormReset } from "react-hook-form";

/**
 * Sync React Hook Form with localStorage
 * @param key - localStorage key
 * @param reset - RHF reset function
 * @param watchValues - RHF watch() returned values
 */
export function useLocalStorageForm<T extends Record<string, any>>(
    key: string,
    reset: UseFormReset<T>,
    watchValues: T
) {
    // Load saved values on first render
    useEffect(() => {
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                const parsed = JSON.parse(saved) as T;
                reset(parsed);
            } catch (err) {
                console.error("Invalid saved form data", err);
            }
        }
    }, [key, reset]);

    // Auto-save on change
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(watchValues));
    }, [key, watchValues]);
}
