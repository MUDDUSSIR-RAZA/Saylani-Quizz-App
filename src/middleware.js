const jose = require('jose')



export async function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === "/auth/signup" || path === "/auth/login"

    const isAdminPath = path === '/admin/dashboard' || path === '/admin/addBulkQuestion' || path === '/admin/createquiz' || path === '/admin/addQuestion' || path === '/admin/requests' || path === '/admin/editquiz'

    const isStudentPath = path === '/admin/dashboard' || path === '/student/OverallPerformance' || path === '/student/profile'

    const token = request.cookies.get("token")?.value || ''


    // if (isPublicPath && token) {
    //     return NextResponse.redirect(new URL("/", request.url))
    // }

    // if (!isPublicPath && !token) {
    //     return NextResponse.redirect(new URL("/auth/signup", request.url))
    // }


    if (token) {
        try {
            const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

            const { payload } = await jose.jwtVerify(token, secretKey)
            
            console.log(payload.role)

            // Redirect users with valid tokens away from public paths
            // if (isPublicPath) {
            //     return NextResponse.redirect(new URL('/', request.url));
            // }
        } catch (error) {
            console.error('JWT verification failed:', error.message);
            // return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    } else {
        console.log('No token provided');
    }

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