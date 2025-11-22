import { authOptions } from "@/config/nextAuthOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import { type NextRequest, NextResponse } from "next/server"
// import { PrismaClient } from "@prisma/client"
// import { comparePasswords } from "@/lib/hash"
// import { generateToken, setAuthCookie } from "@/lib/auth"

// const prisma = new PrismaClient()

// export async function POST(request: NextRequest) {
//   try {
//     const { email, password } = await request.json()

//     if (!email || !password) {
//       return NextResponse.json({ error: "البريد الإلكتروني وكلمة المرور مطلوبان" }, { status: 400 })
//     }

//     const user = await prisma.user.findUnique({
//       where: { email },
//     })

//     if (!user) {
//       return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 })
//     }

//     const passwordMatch = await comparePasswords(password, user.password)

//     if (!passwordMatch) {
//       return NextResponse.json({ error: "بيانات الدخول غير صحيحة" }, { status: 401 })
//     }

//     const token = await generateToken({
//       userId: user.id,
//       email: user.email,
//     })

//     await setAuthCookie(token)

//     return NextResponse.json({
//       success: true,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//       },
//     })
//   } catch (error) {
//     console.error("Login error:", error)
//     return NextResponse.json({ error: "حدث خطأ أثناء تسجيل الدخول" }, { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }
