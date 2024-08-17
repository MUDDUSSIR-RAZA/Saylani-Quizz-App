import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, password } = await req.json()
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
            email,
            password,
        });
        const response = NextResponse.json({ message: "Login Succesfuly", success: true })
        response.cookies.set("token", data, { httpOnly: true })
        return response
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 })
    }
}
