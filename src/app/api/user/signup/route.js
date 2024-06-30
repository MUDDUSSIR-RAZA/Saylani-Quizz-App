import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userName, email, password } = await req.json()
        try {
            const { data } = await axios.post(`${process.env.BACKEND_URL}/auth/signUp`, {
                userName,
                email,
                password,
            });
            return NextResponse.json(data)
        } catch (axiosError) {
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
    } catch (axiosError) {
        return NextResponse.json(error)
    }
}
