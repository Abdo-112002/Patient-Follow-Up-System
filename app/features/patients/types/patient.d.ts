declare global {
    interface IPatient extends BaseEntity {
        patientName: string;
        age: string;
        gender: Gender;
        patientStatus: number;
        fileOpenDate: string;
        idNumber: string;
        birthDate: string;
        phoneNumber: string;
        address: string;
        province: string;
        maritalStatus: MaritalStatus;
        salary: string;
        occupation: string;
        educationLevel: string;
        companions: Companion[];
        visits: IVisit[];
    }

    interface Companion {
        id: number | string;
        name: string;
        relationship: string;
        phone: string;
    }

    type PatientBasicInfo = Pick<
        Patient,
        "id" | "patientName" | "gender" | "age" | "phoneNumber" | "fileOpenDate"
    >;
}

export {};
