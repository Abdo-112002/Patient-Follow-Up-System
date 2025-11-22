"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const useLoginHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError("");
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            setError("الرجاء ملء جميع الحقول المطلوبة");
            return;
        }

        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });

            if (res?.error) {
                setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            setError("حدث خطأ أثناء تسجيل الدخول");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, formData, error, handleChange, onSubmit };
};

export default useLoginHook;
