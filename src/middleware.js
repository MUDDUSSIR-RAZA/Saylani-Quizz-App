import { NextResponse } from 'next/server'
const jose = require('jose')

export async function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/auth/signup" || path === "/auth/login" || path === "/auth/admin/signup"

    const isAdminPath = path === '/admin/dashboard' || path === '/admin/addBulkQuestion' || path === '/admin/createquiz' || path === '/admin/addQuestion' || path === '/admin/requests' || path === '/admin/editquiz' || path === '/admin/addCourse'

    const isStudentPath = path === '/student/dashboard' || path === '/student/OverallPerformance' || path === '/student/profile' || path.startsWith('/student/quiz/')

    const token = request.cookies.get("token")?.value || ''

    // console.log(isStudentPath)
    console.log("isStudentPath " , isStudentPath) 


    if (token) {
        try {
            const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);
            const { payload } = await jose.jwtVerify(token, secretKey)
            const role = payload.role

            if (!isAdminPath && role == "admin") {
                return NextResponse.redirect(new URL('/admin/dashboard', request.url));
            }
            else if (!isStudentPath && role == "student") {
                console.log("isStudentPath condition = " , isStudentPath) 
                return NextResponse.redirect(new URL('/student/dashboard', request.url));
            }
            else if (role != "student" && role != "admin" && !isPublicPath) {
                return NextResponse.redirect(new URL('/auth/login', request.url));
            }
        } catch (error) {
            if (!isPublicPath) {
                return NextResponse.redirect(new URL('/auth/login', request.url));
            }
        }
    } else {
        if (!isPublicPath) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }

    return;
}

export const config = {
    matcher: [
        '/',
        // "/api/:path*",
        '/auth/signup',
        '/auth/login',
        '/admin/dashboard',
        '/admin/addBulkQuestion',
        '/admin/createquiz',
        '/admin/addQuestion',
        '/admin/requests',
        '/admin/editquiz',
        '/admin/addCourse',
        '/student/dashboard',
        '/student/profile',
        '/student/quiz/:path*',
        '/student/OverallPerformance',

    ]
}