import { NextResponse } from 'next/server'

// This fo mare`syn` ifsing `await` isid
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/auth/signup" || path === "/auth/login"

    const token = request.cookies.get("token")?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/" , request.url))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/auth/signup" , request.url))
    }

    return;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/auth/signup',
        '/auth/login'
    ]
}