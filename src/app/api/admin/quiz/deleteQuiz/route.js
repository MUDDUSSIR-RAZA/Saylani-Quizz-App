import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    console.log("first")
    try {
        const { _id } = await req.json();
        // try {
        //     const { data } = await axios.patch(
        //         `${process.env.BACKEND_URL}/admin/editQuiz`,
        //         { _id, quiz_name, key, displayQuestions, quizOpen }
        //     );
        return NextResponse.json("data");
        // } catch (axiosError) {
        //     return NextResponse.json(axiosError.response.data, { status: 400 });
        // }
    } catch (axiosError) {
        return NextResponse.json("axiosError.response.data", { status: 400 });
    }
}
