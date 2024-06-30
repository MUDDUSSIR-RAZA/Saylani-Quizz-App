import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        try {

            const response = NextResponse.json({ message: 'Logout Successfully', success: true })

            response.cookies.set("token", "", {
                httpOnly: true,
                expires: new Date(0)
            })

            return response
        } catch (axiosError) {
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
    } catch (axiosError) {
        return NextResponse.json(error)
    }
}
