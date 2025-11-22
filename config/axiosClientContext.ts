import axios from "axios";

export const axiosClientContext = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
});

axiosClientContext.interceptors.request.use(
    (config) => {
        Object.assign(config.headers, {
            accept: "application/json",
        });
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
