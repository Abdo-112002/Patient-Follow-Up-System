import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(
    _req: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;
        const patientVisit = await prisma.visit.findUnique({
            where: { id: Number(id) },
        });

        if (!patientVisit) {
            return NextResponse.json(
                { error: "الزيارة غير موجودة" },
                { status: 404 }
            );
        }

        return NextResponse.json({ patientVisit });
    } catch (error) {
        console.error("Error fetching patient:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء جلب بيانات الزيارة" },
            { status: 500 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { status } = await request.json();
        const id = Number(params.id);
        const updatedVisit = await prisma.visit.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(updatedVisit);
    } catch (error) {
        console.error("Error updating visit status:", error);
        return NextResponse.json(
            { message: "Failed to update visit status" },
            { status: 500 }
        );
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = Number(params.id);
        const body = await req.json();

        if (!id) {
            return NextResponse.json(
                { error: "Invalid visit id" },
                { status: 400 }
            );
        }

        const updatedVisit = await prisma.visit.update({
            where: { id },
            data: {
                ...body,
                visitDate: body.visitDate
                    ? new Date(body.visitDate)
                    : undefined,
                nextVisitDate: body.nextVisitDate
                    ? new Date(body.nextVisitDate)
                    : undefined,
            },
        });

        return NextResponse.json(updatedVisit);
    } catch (error) {
        console.error("Update visit error:", error);
        return NextResponse.json(
            { error: "Failed to update visit" },
            { status: 500 }
        );
    }
}
