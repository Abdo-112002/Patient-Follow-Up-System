import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authMiddleware = withAuth(
    async function middleware(request) {
        const url = request.nextUrl.clone();
        const pathname = url.pathname;

        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        });

        // --- Redirect Logic ---

        if (pathname === "/" && token) {
            url.pathname = "/dashboard";
            return NextResponse.redirect(url);
        }

        if (pathname !== "/" && !token) {
            url.pathname = "/";
            return NextResponse.redirect(url);
        }

        // 3) كل الحالات الأخرى → تابع
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: () => true, // نسمح لكل الطلبات للـ withAuth لأن إحنا عاملين check يدوي
        },
        secret: process.env.NEXTAUTH_SECRET,
    }
);

// --- API Middleware ---
export async function middleware(request) {
    const { pathname } = new URL(request.url);

    // استثناء API route اللي مش محتاج session
    const apiExceptions = ["/api/auth" , "/api/create-user"];
    if (apiExceptions.some((prefix) => pathname.startsWith(prefix))) {
        return NextResponse.next();
    }

    // Pages middleware
    return authMiddleware(request);
}

export const config = {
    matcher: [
        // Pages
        "/((?!_next|api|.*\\..*).*)",
        // API Routes اللي محتاجين حماية
        "/api/:path*",
    ],
};
