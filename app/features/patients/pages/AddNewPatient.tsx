"use client"
import { FormPageHeader } from '@/components/shared/FormPageHeader'
import { PatientRegistrationForm } from '../components/patient-registration-form'
import useCreatePatient from '../hooks/useCreatePatient';
import { PatientRegistrationFormData, patientRegistrationSchema } from '@/lib/validation-schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { currentDate } from '@/lib/utils';
import { useLocalStorageForm } from '@/hooks/useLocalStorageForm';
import { useState } from 'react';


const AddNewPatient = () => {
    const { createPatient, loading } = useCreatePatient();
    const form = useForm<PatientRegistrationFormData>({
        resolver: zodResolver(patientRegistrationSchema),
        defaultValues: {
            patientName: "",
            age: "0",
            patientStatus: 0,
            gender: "male",
            fileOpenDate: currentDate,
            idNumber: "",
            address: "",
            province: "",
            phoneNumber: "",
            birthDate: "",
            maritalStatus: "",
            salary: "",
            occupation: "",
            educationLevel: "",
            companions: [],
        },
    });
    const [companions, setCompanions] = useState<Companion[]>([]);

    const { watch, reset } = form;

    useLocalStorageForm<PatientRegistrationFormData>(
        "add-new-patient-form",
        reset,
        watch()
    );

    const onSubmit = async (data: PatientRegistrationFormData) => {
        try {
            const payload = {
                ...data,
                companions: companions.map((c) => ({ name: c.name, phone: c.phone, relationship: c?.relationship })),
            };

            await createPatient(payload as any);
            // reset form and companions only after success
            reset();
            setCompanions([]);
        } catch (err) {
            // error handled inside hook
            console.error(err);
            alert("فشل إنشاء المريض");
        }
    };

    return (
        <>
            <FormPageHeader />
            <PatientRegistrationForm 
                companions={companions}
                setCompanions={setCompanions}
                loading={loading} 
                onSubmit={onSubmit} 
                formRef={form} 
                formTitle="تسجيل مريض جديد" 
            />
        </>
    )
}

export default AddNewPatient
