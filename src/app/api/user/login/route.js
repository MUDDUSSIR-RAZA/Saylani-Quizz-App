import axios from "axios";
import { revalidateTag } from "next/cache";
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
        revalidateTag("studentQuizzes")
        revalidateTag("courses")
        revalidateTag("quizzes")
        revalidateTag("quizzId")
        revalidateTag("requests")
        revalidateTag("performance")
        return response
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 })
    }
}
