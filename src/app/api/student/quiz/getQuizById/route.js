import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const quizId = searchParams.get('quizId');
    const token = cookies().get("token").value;
    try {
        // const { data } = await axios.get(
        //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getQuizById`, {
        //     params: { quizId, token }
        // }
        // );
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getQuizById?quizId=${quizId}&token=${token}`,
            { next: { tags: ["quizzId"] }, cache: "no-store" }
        );
        const data = await res.json();
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
