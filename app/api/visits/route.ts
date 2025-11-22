import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";


// ✅ Get all visits
export async function GET() {
    try {
        const visits = await prisma.visit.findMany({
            include: {
                patient: {
                    select: {
                        id: true,
                        patientName: true,
                    },
                },
            },
            orderBy: {
                visitDate: "desc",
            },
        });

        return NextResponse.json(visits, { status: 200 });
    } catch (error) {
        console.error("Error fetching visits:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء تحميل الزيارات" },
            { status: 500 }
        );
    }
}

// ✅ Delete visit by ID
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();

        await prisma.visit.delete({
            where: { id },
        });

        return NextResponse.json(
            { message: "تم حذف الزيارة بنجاح" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting visit:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء حذف الزيارة" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body.patientId) {
            return NextResponse.json(
                { error: "رقم المريض مطلوب" },
                { status: 400 }
            );
        }

        const newVisit = await prisma.visit.create({
            data: {
                ...body,
                visitDate: new Date(body.visitDate),
                nextVisitDate: body.nextVisitDate
                    ? new Date(body.nextVisitDate)
                    : null,
            },
        });

        return NextResponse.json({ visit: newVisit }, { status: 201 });
    } catch (error) {
        console.error("Error creating visit:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء إنشاء الزيارة" },
            { status: 500 }
        );
    }
}
