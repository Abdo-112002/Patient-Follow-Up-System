declare global {
    type VisitStatus = "pending" | "completed";

    interface VisitNeeds {
        need_psychological: boolean;
        need_occupational_therapy: boolean;
        need_hospital_transfer: boolean;
        need_artificial_nutrition: boolean;
        need_assistive_devices: boolean;
        need_air_mattress: boolean;
        need_physiotherapy: boolean;
        need_specialist_consult: boolean;
        need_hygiene_pads: boolean;
        need_urinary_catheter: boolean;
        need_oxygen_device: boolean;
        need_social_support: string;
        need_home_adaptation: string;
        need_legal_consult: string;
        need_caregiver_training: string;
    }

    interface IVisit extends BaseEntity, VisitNeeds {
        visitDate: string;
        visitTime: string;
        painLevel: number;
        fatigue: number;
        drowsiness: number;
        nausea: number;
        appetiteLoss: number;
        shortnessOfBreath: number;
        depression: number;
        generalHealth: number;
        exhaustion: number;
        providedService: string;
        serviceType: string;
        psychologicalSupport: string;
        nutrition: string;
        mobilityStatus: string;
        relationWithFamily: string;
        notes: string;
        improvedSinceLastVisit: string;
        previousVisitRecommendations: string;
        nextVisitDate: string | null;
        nextVisitType: string;
        status: VisitStatus;
        patientId: number;
    }

    type FollowUpValues = z.infer<typeof followUpVisitSchema>;
}

export {};
