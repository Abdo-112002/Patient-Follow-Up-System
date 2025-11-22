"use client"
import FollowUpVisitForm from '@/app/features/visits/components/follow-up-visit-form'
import { FormPageHeader } from '@/components/shared/FormPageHeader'
import { useCreateVisit } from '../hooks/useCreateVisit';
import { useForm } from 'react-hook-form';
import { useLocalStorageForm } from '@/hooks/useLocalStorageForm';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { followUpVisitSchema } from '@/lib/validation-schemas';
import { currentDate, currentTime } from '@/lib/utils';


const AddNewVisit = () => {
    const { createVisit, loading: isLoading } = useCreateVisit();
    const searchParams = useSearchParams()
    const initialPatientId = searchParams.get("patientId")

    const form = useForm<FollowUpValues>({
        resolver: zodResolver(followUpVisitSchema),
        defaultValues: {
            // Basic info
            visitDate: currentDate,
            visitTime: currentTime,

            // Health assessment - all sliders start at 0
            painLevel: 0,
            fatigue: 0,
            drowsiness: 0,
            nausea: 0,
            appetiteLoss: 0,
            shortnessOfBreath: 0,
            depression: 0,
            generalHealth: 5,
            exhaustion: 0,

            // Service related
            providedService: "no",
            serviceType: "",
            psychologicalSupport: "no",

            // Selects
            nutrition: "",
            mobilityStatus: "",
            relationWithFamily: "",

            // Needs checkboxes - all start as false
            need_psychological: false,
            need_occupational_therapy: false,
            need_hospital_transfer: false,
            need_artificial_nutrition: false,
            need_assistive_devices: false,
            need_air_mattress: false,
            need_physiotherapy: false,
            need_specialist_consult: false,
            need_hygiene_pads: false,
            need_urinary_catheter: false,
            need_oxygen_device: false,

            // Social/Legal/Training needs
            need_social_support: "no",
            need_home_adaptation: "no",
            need_legal_consult: "no",
            need_caregiver_training: "no",

            // Notes & follow-up
            notes: "",
            improvedSinceLastVisit: "",
            previousVisitRecommendations: "",
            nextVisitDate: "",
            nextVisitType: "",
        },
    });
    const { watch, reset } = form;

    async function onSubmit(data: FollowUpValues) {
        await createVisit({
            ...data,
            patientId: Number(initialPatientId),
        });
    }

    useLocalStorageForm<FollowUpValues>(
        "add-new-patient-visit-form",
        reset,
        watch()
    );

    return (
        <>
            <FormPageHeader />
            <FollowUpVisitForm
                form={form}
                isLoading={isLoading}
                onSubmit={onSubmit}
                formTitle="زيارة جديدة"
            />
        </>
    )
}

export default AddNewVisit
