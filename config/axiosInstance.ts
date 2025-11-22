import { axiosClientContext } from "./axiosClientContext";
import { axiosServerContext } from "./axiosServerContext";

export const axiosInstance =
    typeof window === "undefined" ? axiosServerContext : axiosClientContext;
