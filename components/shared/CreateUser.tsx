"use client";
import { useState } from "react";
import { Role } from "@/app/generated/prisma";
import { axiosInstance } from "@/config/axiosInstance";

export default function CreateUserButton() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleCreateUser = async () => {
        setLoading(true);
        setMessage("");

        try {
            const response = await axiosInstance.post("/create-user", {
                email: "abdo@gmail.com",
                password: "1234",
                name: "Abdelrahman Ibrahim",
                role: Role.ADMIN,
            });

            console.log("res :", response);
            setMessage(response.data.message);
        } catch (error: any) {
            console.error(error);
            setMessage(error.response?.data?.error || "Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-3 mt-5">
            <button
                onClick={handleCreateUser}
                disabled={loading}
                className={`px-4 py-2 cursor-pointer rounded-lg text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {loading ? "Creating..." : "Create User"}
            </button>

            {message && (
                <p
                    className={`text-sm ${message.includes("success") ? "text-green-600" : "text-red-500"
                        }`}
                >
                    {message}
                </p>
            )}
        </div>
    );
}
