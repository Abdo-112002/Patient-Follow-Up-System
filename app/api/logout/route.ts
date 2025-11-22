import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/config/nextAuthOptions";


export async function POST() {
    try {
        const session = await getServerSession(authOptions);

        // إذا فيه session نلغيها
        if (session) {
            // طريقة NextAuth: إرسال Set-Cookie فارغ لإلغاء الـ session
            const response = NextResponse.json({ success: true });
            response.cookies.set("next-auth.session-token", "", {
                path: "/",
                maxAge: 0,
            });
            response.cookies.set("__Secure-next-auth.session-token", "", {
                path: "/",
                maxAge: 0,
            });
            return response;
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Logout error:", error);
        return NextResponse.json(
            { error: "حدث خطأ أثناء تسجيل الخروج" },
            { status: 500 }
        );
    }
}
