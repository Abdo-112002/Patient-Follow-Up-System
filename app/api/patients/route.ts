import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const searchTerm = searchParams.get("searchTerm") || "";

        const patients = await prisma.patient.findMany({
            where: searchTerm
                ? {
                      OR: [
                          {
                              patientName: {
                                  contains: searchTerm,
                              },
                          },
                          {
                              phoneNumber: {
                                  contains: searchTerm,
                              },
                          },
                      ],
                  }
                : {},

            include: {
                companions: true,
                visits: {
                    orderBy: { visitDate: "desc" },
                    take: 1,
                },
            },

            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ patients });
    } catch (error) {
        console.error("Error fetching patients:", error);

        return NextResponse.json(
            { error: "حدث خطأ أثناء جلب المرضى" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        

        const patient = await prisma.patient.create({
            data: {
                ...body,
                fileOpenDate: new Date(body.fileOpenDate),
                birthDate: new Date(body.birthDate),
                companions: {
                    create: body.companions || [],
                },
            },
            include: { companions: true },
        });

        return NextResponse.json({ patient }, { status: 201 });
    } catch (error) {
        console.error("Error creating patient:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء إنشاء المريض" },
            { status: 500 }
        );
    }
}
