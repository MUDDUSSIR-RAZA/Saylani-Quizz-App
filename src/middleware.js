import { NextResponse } from 'next/server'
const jwt = require("jsonwebtoken");



export async function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/auth/signup" || path === "/auth/login"

    const isAdminPath = path === '/admin/dashboard' || path === '/admin/addBulkQuestion' || path === '/admin/createquiz' || path === '/admin/addQuestion' || path === '/admin/requests' || path === '/admin/editquiz'

    const isStudentPath = path === '/admin/dashboard' || path === '/student/OverallPerformance' || path === '/student/profile'

    const token = request.cookies.get("token")?.value || ''

    const verify = await jwt.verify(token, process.env.SECRET_KEY);

    // if (isPublicPath && token) {
    //     return NextResponse.redirect(new URL("/", request.url))
    // }

    // if (!isPublicPath && !token) {
    //     return NextResponse.redirect(new URL("/auth/signup", request.url))
    // }


    console.log("first token", token)
    console.log("first path", path)
    console.log("first verify", verify)

    return;
}

export const config = {
    matcher: [
        '/',
        '/auth/signup',
        '/auth/login',
        '/admin/dashboard',
        '/admin/addBulkQuestion',
        '/admin/createquiz',
        '/admin/addQuestion',
        '/admin/requests',
        '/admin/editquiz',
        '/student/dashboard',
        '/student/profile',
        '/student/OverallPerformance',
    ]
}