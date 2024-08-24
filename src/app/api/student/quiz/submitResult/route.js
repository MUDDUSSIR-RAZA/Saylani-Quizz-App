import axios from "axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const token = cookies().get("token").value;
  const { userId, course_name, batch, quiz_name, totalQuestions, score } = await req.json();
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/submitResult?token=${token}`,
      { userId, course_name, batch, quiz_name, totalQuestions, score }
    );
    revalidateTag("performance")
    return NextResponse.json(data);
  } catch (axiosError) {
    console.log(axiosError)
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
