import axios from "axios";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    const { _id, quiz_name, key, displayQuestions, quizOpen } = await req.json();
    try {
        const { data } = await axios.patch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/editQuiz`,
            { _id, quiz_name, key, displayQuestions, quizOpen }
        );
        revalidateTag("quizzes")
        revalidateTag("quizzId")
        return NextResponse.json(data);
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 });
    }
}
