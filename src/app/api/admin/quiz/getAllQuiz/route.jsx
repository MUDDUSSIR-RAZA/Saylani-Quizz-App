import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const { data } = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getAllQuizzes`
    // );
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getAllQuizzes`,
      { next: { tags: ["quizzes"] }, cache: "no-store" }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
