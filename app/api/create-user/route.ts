import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/prisma/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, name  , role} = body;

        console.log("data server : ", { email, password, name });

        // Validate input
        if (!email || !password || !name) {
            return NextResponse.json(
                { error: "Email, password, and name are required" },
                { status: 400 }
            );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Upsert user
        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: hashedPassword,
                name,
                role,
            },
        });
        console.log("res server : ", user);
        return NextResponse.json(
            { message: "User created successfully", user },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error creating user:", error);
        return NextResponse.json(
            { error: "Something went wrong", details: error.message },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
