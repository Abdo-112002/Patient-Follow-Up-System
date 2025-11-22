import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(
    _req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const patient = await prisma.patient.findUnique({
            where: { id: Number(id) },
            include: {
                companions: true,
            },
        });

        if (!patient) {
            return NextResponse.json(
                { error: "المريض غير موجود" },
                { status: 404 }
            );
        }

        return NextResponse.json({ patient });
    } catch (error) {
        console.error("Error fetching patient:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء جلب بيانات المريض" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    _: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.patient.delete({ where: { id: Number(params.id) } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting patient:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء حذف المريض" },
            { status: 500 }
        );
    }
}

export async function PATCH(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const patientId = Number(id);
        const body = await req.json();

        await prisma.companion.deleteMany({
            where: { patientId },
        });

        const newCompanions = body.companions || [];
        await prisma.companion.createMany({
            data: newCompanions.map((c: Companion) => ({
                name: c.name,
                phone: c.phone,
                relationship: c.relationship,
                patientId,
            })),
        });

        const updatedPatient = await prisma.patient.update({
            where: { id: patientId },
            data: {
                patientName: body.patientName,
                age: body.age,
                patientStatus: body.patientStatus,
                gender: body.gender,
                idNumber: body.idNumber,
                address: body.address,
                province: body.province,
                phoneNumber: body.phoneNumber,
                maritalStatus: body.maritalStatus,
                salary: body.salary,
                occupation: body.occupation,
                educationLevel: body.educationLevel,
                fileOpenDate: new Date(body.fileOpenDate),
                birthDate: new Date(body.birthDate),
            },
            include: { companions: true },
        });

        return NextResponse.json({ patient: updatedPatient });
    } catch (error) {
        console.error("Error updating patient:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء تحديث بيانات المريض" },
            { status: 500 }
        );
    }
}
