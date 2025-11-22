"use server";
import axios from "axios";
import { cookies } from "next/headers";

export const axiosServerContext = axios.create({
    baseURL: `${process.env.DOMAIN_BASE_URL}${process.env.NEXT_PUBLIC_API_BASE_URL}`,
});

axiosServerContext.interceptors.request.use(
    (config) => {
        if (config.headers) {
            config.headers.accept = "application/json";
        }
        const cookieStore = cookies();
        if (config.headers) {
            config.headers.Cookie = cookieStore.toString();
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
