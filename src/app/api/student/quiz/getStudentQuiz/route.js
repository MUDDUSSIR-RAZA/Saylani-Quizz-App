import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {

    const token = cookies().get("token").value;
    try {
        // const { data } = await axios.get(
        //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getStudentQuiz`, {
        //     params: { token }
        // }
        // );
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getStudentQuiz?token=${token}`,
            { next: { tags: ["quizzes"] }, cache: "no-store" }
        );
        const data = await res.json();
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
