"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDeletePatient } from "../hooks/useDeletePatient";

interface PatientCardProps extends PatientBasicInfo{
    onNewVisit?: (id: number) => void;
    fetchPatients: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({
    id,
    patientName,
    gender,
    age,
    phoneNumber,
    fileOpenDate,
    onNewVisit,
    fetchPatients,
}) => {
    const router = useRouter();
    const { handleDelete, deleteLoading } = useDeletePatient(fetchPatients);

    return (
        <Card  className="hover:shadow-lg transition-shadow  overflow-hidden">
            <CardHeader className="bg-gradient-to-br py-2 from-primary/10 to-accent/10">
                <CardTitle onClick={()=> router.push(`/patients/${id}`)} className="text-lg cursor-pointer">{patientName}</CardTitle>
                <CardDescription>
                    {gender === "male" ? "ذكر" : "أنثى"} - {age} سنة
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="space-y-3 mb-6">
                    <div>
                        <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                        <p className="font-medium">{phoneNumber}</p>
                    </div>
                    {fileOpenDate && (
                        <div>
                            <p className="text-sm text-muted-foreground">تاريخ فتح الملف</p>
                            <p className="font-medium">{new Date(fileOpenDate).toLocaleDateString("ar-SA")}</p>
                        </div>
                    )}
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={() => (onNewVisit ? onNewVisit(id) : router.push(`/visits/new?patientId=${id}`))}
                        className="flex-1 cursor-pointer text-sm"
                    >
                        زيارة جديدة
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => handleDelete(String(id))}
                        className="flex-1 cursor-pointer text-sm"
                    >
                        {deleteLoading ? "جاري الحذف..." : "حذف المريض"}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default PatientCard;
