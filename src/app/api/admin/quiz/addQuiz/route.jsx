import axios from "axios";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { course_name, course_id, quiz_name, key } = await req.json();
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/addQuiz`,
      { course_name, course_id, quiz_name, key }
    );
    revalidateTag("quizzes");
    return NextResponse.json(data);
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
