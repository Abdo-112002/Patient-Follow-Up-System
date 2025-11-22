"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/app/features/auth/services/AuthServices";

export default function useLogout() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const logout = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await AuthService.logout();
            if (res.success) {
                router.push("/"); // إعادة التوجيه للصفحة الرئيسية
            } else {
                setError("حدث خطأ أثناء تسجيل الخروج");
            }
        } catch (err) {
            console.error(err);
            setError("حدث خطأ أثناء تسجيل الخروج");
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, logout };
}
