import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Get current date in yyyy-mm-dd (for <input type="date">)
export const currentDate = new Date().toISOString().split("T")[0];

// Get current time in HH:MM (for <input type="time">)
export const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
});
