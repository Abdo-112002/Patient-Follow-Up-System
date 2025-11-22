"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";



type VisitCardProps = {
    visit: {
        id: string;
        visitDate: string;
        patient: {
            id: string;
            patientName: string;
        };
        status: VisitStatus;
        visitTime?: string | null;
        nextVisitType?: string | null;
        nextVisitDate?: string | null;
        notes?: string | null;
        serviceType?: string | null;
    };
    onToggleStatus?: (id: string, status: VisitStatus) => void;
    onDelete?: (id: string) => void;
};

const VisitCard: React.FC<VisitCardProps> = ({ visit, onToggleStatus, onDelete }) => {
    const isCompleted = visit.status === "completed";
    const router = useRouter();

    return (
        <Card className="hover:shadow-lg  transition-shadow overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="flex justify-between items-center py-2 gap-2">
                    {/* معلومات المريض */}
                    <div>
                        <CardTitle onClick={()=> router.push(`/visits/${visit.id}`)} className="text-lg cursor-pointer">{visit.patient.patientName}</CardTitle>
                        <CardDescription className="flex gap-2">
                            <p className="text-sm text-muted-foreground">تاريخ الزيارة : </p>
                            <p className="font-medium">{new Date(visit.visitDate).toLocaleDateString()}</p>
                        </CardDescription>
                    </div>

                    {/* الحالة + السويتش */}
                    <div className="flex items-center gap-2">
                        {visit.status === "pending" && (
                            <Switch
                                onCheckedChange={() =>
                                    onToggleStatus && onToggleStatus(visit.id, visit?.status)
                                }
                            />
                        )}
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${isCompleted
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                                }`}
                        >
                            {isCompleted ? "مكتملة" : "قيد الانتظار"}
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-2">
                <div className="space-y-3 mb-6">

                    {visit?.visitTime && (
                        <div>
                            <p className="text-sm text-muted-foreground">وقت الزيارة</p>
                            <p className="font-medium">{visit.visitTime}</p>
                        </div>
                    )}

                    {visit?.serviceType && (
                        <div>
                            <p className="text-sm text-muted-foreground">نوع الخدمة</p>
                            <p className="font-medium">{visit.serviceType}</p>
                        </div>
                    )}

                    {visit?.nextVisitDate && (
                        <div>
                            <p className="text-sm text-muted-foreground">تاريخ الزيارة القادمة</p>
                            <p className="font-medium">{new Date(visit.nextVisitDate).toLocaleDateString()}</p>
                        </div>
                    )}

                    {visit?.nextVisitType && (
                        <div>
                            <p className="text-sm text-muted-foreground">نوع الزيارة القادمة</p>
                            <p className="font-medium">{visit.nextVisitType}</p>
                        </div>
                    )}

                    {visit?.notes && (
                        <div>
                            <p className="text-sm text-muted-foreground">ملاحظات</p>
                            <p className="font-medium">{visit.notes}</p>
                        </div>
                    )}
                </div>


                <div className="flex gap-2">
                    <Button
                        variant="destructive"
                        onClick={() => onDelete && onDelete(visit.id)}
                        className="flex-1 cursor-pointer text-sm"
                    >
                        حذف الزيارة
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default VisitCard;
