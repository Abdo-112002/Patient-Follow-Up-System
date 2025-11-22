import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { z } from "zod";

const createSchema = z.object({
    title: z.string().min(1).max(100),
    date: z.string().min(1), // yyyy-mm-dd or iso
    time: z.string().regex(/^\d{2}:\d{2}$/, "HH:MM"),
    needSpecialist: z.boolean().optional().default(false),
    specialistType: z.string().max(50).optional(),
});

export async function GET() {
    try {
        const appointments = await prisma.appointment.findMany();
        return NextResponse.json({ success: true, data: appointments });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "فشل في جلب المواعيد" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parsed = createSchema.parse(body);

        const [year, month, day] = parsed.date.split("-").map(Number);
        const [hour, minute] = parsed.time.split(":").map(Number);
        const start = new Date(Date.UTC(year, month - 1, day, hour, minute));

        const created = await prisma.appointment.create({
            data: {
                title: parsed.title,
                date: start,
                time: parsed.time,
                needSpecialist: parsed.needSpecialist ?? false,
                specialistType: parsed.specialistType,
            },
        });

        return NextResponse.json(
            { success: true, data: created },
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);
        if (error?.issues) {
            return NextResponse.json(
                { success: false, error: error.issues },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: false, error: "فشل في انشاء الموعد" },
            { status: 500 }
        );
    }
}
