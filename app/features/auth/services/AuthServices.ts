import { axiosInstance } from "@/config/axiosInstance";

export class AuthService {
    static async logout() {
        const response = await axiosInstance.post("/logout");
        return response.data;
    }
}
