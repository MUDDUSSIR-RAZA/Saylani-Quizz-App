import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { selectedQuiz, question_text, options, correctAnswer, time_limit } = await req.json();
        try {
            const { data } = await axios.post(
                `${process.env.BACKEND_URL}/admin/addQuestion`,
                { selectedQuiz, question_text, options, correctAnswer, time_limit }
            );
            return NextResponse.json(data);
        } catch (axiosError) {
            console.log("🚀 ~ POST ~ axiosError:", axiosError)
            return NextResponse.json(axiosError.response.data, { status: 400 });
        }
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 });
    }
}
