import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getQuizById?id=${id}`,
            { next: { tags: ["quizzes"] }, cache: "no-store" }
        );
        const data = await res.json();
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error.response.data, { status: 400 });
    }
}
