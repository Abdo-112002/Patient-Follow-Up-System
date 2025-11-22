import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
) {
    const id = Number(params.id);
    if (!id) {
        return NextResponse.json(
            { success: false, error: "id invalid" },
            { status: 400 }
        );
    }

    try {
        await prisma.appointment.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: "فشل في حذف الموعد" },
            { status: 500 }
        );
    }
}
