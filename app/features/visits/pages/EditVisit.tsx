"use client"
import { FormPageHeader } from '@/components/shared/FormPageHeader'
import React, { Suspense, useEffect } from 'react'
import FollowUpVisitForm from '../components/follow-up-visit-form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { followUpVisitSchema } from '@/lib/validation-schemas'
import { VisitsServices } from '../services/VisitsServices'
import { useParams } from 'next/navigation'
import { useUpdateVisit } from '../hooks/useUpdateVisit'

const EditVisit = () => {
    const { updateVisit, loading: isLoading } = useUpdateVisit();
    const params = useParams();
    const visitId = params?.id;

    const form = useForm<FollowUpValues>({
        resolver: zodResolver(followUpVisitSchema),
        defaultValues: {
            // Basic info
            visitDate: "",
            visitTime: "",

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

    const { reset } = form;

    async function onSubmit(data: FollowUpValues) {
        try {
            await updateVisit(String(visitId), data);
            // reset form only after success
            reset();
        } catch (err) {
            // error handled inside hook
            console.error(err);
            alert("فشل تعديل البيانات ");
        }
    }

    const getVisitDEtails = async () => {
        try {
            const res = await VisitsServices?.getVisitById(String(visitId));
            reset({
                ...res,
                visitDate: res?.visitDate ? new Date(res?.visitDate).toISOString().split("T")[0] : "",
                nextVisitDate: res?.nextVisitDate ? new Date(res?.nextVisitDate).toISOString().split("T")[0] : "",
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVisitDEtails();
    }, []);

    return (
        <>
            <FormPageHeader />
            <Suspense>
                <FollowUpVisitForm
                    form={form}
                    onSubmit={onSubmit}
                    isLoading={isLoading}
                    formTitle="تعديل زيارة"
                />
            </Suspense>
        </>
    )
}

export default EditVisit
