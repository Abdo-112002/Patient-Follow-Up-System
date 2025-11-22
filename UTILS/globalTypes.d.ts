declare global {
    interface BaseEntity {
        id: number;
        createdAt: string;
        updatedAt: string;
    }

    type Gender = "male" | "female";

    type MaritalStatus = "single" | "married" | "divorced" | "widowed";
}

export {};
