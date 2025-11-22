"use client"
import { FormPageHeader } from '@/components/shared/FormPageHeader'
import { useEffect, useState } from 'react';
import { PatientService } from '../services/PatientService';
import { useParams } from 'next/navigation';
import { PatientRegistrationFormData, patientRegistrationSchema } from '@/lib/validation-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PatientRegistrationForm } from '../components/patient-registration-form'
import useUpdatePatient from '../hooks/useUpdatePatient';

const EditPatient = () => {
    const params = useParams();
    const patientId = params?.id;
    const { updatePatient, loading } = useUpdatePatient(String(patientId));

    const [companions, setCompanions] = useState<Companion[]>([]);
    const form = useForm<PatientRegistrationFormData>({
        resolver: zodResolver(patientRegistrationSchema),
        defaultValues: {
            patientName: "",
            age: "0",
            patientStatus: 0,
            gender: "male",
            fileOpenDate: "",
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
    const { reset } = form;

    const onSubmit = async (data: PatientRegistrationFormData) => {
        try {
            const payload = {
                ...data,
                companions: companions.map((c) => ({ name: c.name, phone: c.phone, relationship: c?.relationship })),
            };

            await updatePatient(payload as any);
            // reset form and companions only after success
            reset();
            setCompanions([]);
        } catch (err) {
            // error handled inside hook
            console.error(err);
            alert("فشل تعديل البيانات ");
        }
    };

    const getPatientDetails = async () => {
        try {
            const res = await PatientService?.getPatientById(String(patientId));
            reset({
                ...res,
                fileOpenDate: new Date(res?.fileOpenDate).toISOString().split("T")[0] || "",
                birthDate: new Date(res?.birthDate).toISOString().split("T")[0] || "",
            });
            setCompanions(res?.companions || []);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPatientDetails();
    }, []);

    return (
        <>
            <FormPageHeader />
            <PatientRegistrationForm
                loading={loading}
                companions={companions}
                setCompanions={setCompanions}
                onSubmit={onSubmit}
                formRef={form}
                formTitle='تعديل بيانات المريض'
            />
        </>
    )
}

export default EditPatient
