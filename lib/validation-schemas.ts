import { z } from "zod";

export const patientRegistrationSchema = z.object({
    patientName: z.string().nonempty("اسم المريض مطلوب"),
    age: z.string().optional(),
    patientStatus: z.number().min(0, "حالة المريض غير صحيحة"),
    gender: z.enum(["male", "female"]),
    fileOpenDate: z.string().nonempty("تاريخ فتح الملف مطلوب"),
    idNumber: z.string().nonempty("رقم الهوية مطلوب"),
    address: z.string().nonempty("السكن مطلوب"),
    province: z.string().nonempty("المحافظة مطلوبة"),
    phoneNumber: z.string().nonempty("رقم جوال المريض مطلوب"),
    birthDate: z.string().nonempty("تاريخ الميلاد مطلوب"),
    maritalStatus: z.string().nonempty("الحالة الاجتماعية مطلوبة"),
    salary: z.string().optional(),
    occupation: z.string().optional(),
    educationLevel: z.string().optional(),
    companions: z.array(
        z.object({
            name: z.string().nonempty("اسم المرافق مطلوب"),
            phone: z.string().nonempty("رقم جوال المرافق مطلوب"),
            relationship: z.string().nonempty("درجة القرابة مطلوبة"),
        })
    ),
});

export const followUpVisitSchema = z.object({
    // Basic info
    visitDate: z.string().min(1, "تاريخ الزيارة مطلوب"),
    visitTime: z.string().optional().nullable(),

    // Health assessment sliders
    painLevel: z.number().min(0).max(10).optional(),
    fatigue: z.number().min(0).max(10).optional(),
    drowsiness: z.number().min(0).max(10).optional(),
    nausea: z.number().min(0).max(10).optional(),
    appetiteLoss: z.number().min(0).max(10).optional(),
    shortnessOfBreath: z.number().min(0).max(10).optional(),
    depression: z.number().min(0).max(10).optional(),
    generalHealth: z.number().min(0).max(10).optional(),
    exhaustion: z.number().min(0).max(10).optional(),

    // Service related
    providedService: z.enum(["yes", "no"]).optional(),
    serviceType: z.string().optional().nullable(),
    psychologicalSupport: z.enum(["yes", "no"]).optional(),

    // Selects
    nutrition: z.string().optional().nullable(),
    mobilityStatus: z.string().optional().nullable(),
    relationWithFamily: z.string().optional().nullable(),

    // Needs checkboxes
    need_psychological: z.boolean().optional(),
    need_occupational_therapy: z.boolean().optional(),
    need_hospital_transfer: z.boolean().optional(),
    need_artificial_nutrition: z.boolean().optional(),
    need_assistive_devices: z.boolean().optional(),
    need_air_mattress: z.boolean().optional(),
    need_physiotherapy: z.boolean().optional(),
    need_specialist_consult: z.boolean().optional(),
    need_hygiene_pads: z.boolean().optional(),
    need_urinary_catheter: z.boolean().optional(),
    need_oxygen_device: z.boolean().optional(),

    // Social/Legal/Training needs
    need_social_support: z.enum(["yes", "no"]).optional(),
    need_home_adaptation: z.enum(["yes", "no"]).optional(),
    need_legal_consult: z.enum(["yes", "no"]).optional(),
    need_caregiver_training: z.enum(["yes", "no"]).optional(),

    // Notes & follow-up
    notes: z.string().optional().nullable(),
    improvedSinceLastVisit: z.string().optional().nullable(),
    previousVisitRecommendations: z.string().optional().nullable(),
    nextVisitDate: z.string().optional().nullable(),
    nextVisitType: z.string().optional().nullable(),
});

export const appointmentSchema = z
    .object({
        title: z
            .string()
            .min(1, "عنوان الموعد مطلوب")
            .max(100, "عنوان الموعد لا يجب أن يتجاوز 100 حرف"),
        date: z.string().min(1, "التاريخ مطلوب"),
        time: z
            .string()
            .min(1, "الوقت مطلوب")
            .regex(/^\d{2}:\d{2}$/, "تنسيق الوقت غير صحيح (HH:MM)"),
        needSpecialist: z.boolean().default(false),
        specialistType: z
            .string()
            .max(50, "نوع التخصص لا يجب أن يتجاوز 50 حرف")
            .optional()
            .refine((val) => {
                if (typeof val === "string" && val.length === 0) return true;
                return (
                    val === undefined ||
                    (typeof val === "string" && val.length > 0)
                );
            }, "نوع التخصص مطلوب عند اختيار متخصص"),
    })
    .refine(
        (data) =>
            !data.needSpecialist ||
            (data.specialistType && data.specialistType.trim().length > 0),
        {
            message: "نوع التخصص مطلوب عند اختيار متخصص",
            path: ["specialistType"],
        }
    );

export type PatientRegistrationFormData = z.infer<
    typeof patientRegistrationSchema
>;
export type FollowUpVisitFormData = z.infer<typeof followUpVisitSchema>;
export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function validateFormData<T>(
    schema: z.ZodSchema<T>,
    data: unknown
): { success: boolean; data?: T; errors?: Record<string, string> } {
    try {
        const validatedData = schema.parse(data);
        return { success: true, data: validatedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors: Record<string, string> = {};
            error.errors.forEach((err) => {
                const path = err.path.join(".");
                errors[path] = err.message;
            });
            return { success: false, errors };
        }
        return {
            success: false,
            errors: { general: "حدث خطأ في التحقق من البيانات" },
        };
    }
}
