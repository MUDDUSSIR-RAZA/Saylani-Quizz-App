import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const quizId = searchParams.get('quizId');
    const token = cookies().get("token").value;
    try {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getQuizById` , {
                    params: { quizId , token }
                  }
            );
            return NextResponse.json(data)
        } catch (error) {
            return NextResponse.json(error.response.data, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json(axiosError.response.data, { status: 400 });
    }
}
