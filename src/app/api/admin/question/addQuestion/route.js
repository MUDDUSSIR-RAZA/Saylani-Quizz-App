import axios from "axios";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { quizId, question_text, options, correctAnswer, time_limit } = await req.json();
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/addQuestion`,
                { quizId, question_text, options, correctAnswer, time_limit }
            );
            revalidateTag("quizzes")
            return NextResponse.json(data);
        } catch (axiosError) {
            return NextResponse.json(axiosError.response.data, { status: 400 });
        }
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 });
    }
}
