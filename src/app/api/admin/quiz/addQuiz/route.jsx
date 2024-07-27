import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { course_name, course_id, quiz_name, key } = await req.json();
    try {
      const { data } = await axios.post(
        `${process.env.BACKEND_URL}/admin/addQuiz`,
        { course_name, course_id, quiz_name, key }
      );
      return NextResponse.json(data);
    } catch (axiosError) {
      return NextResponse.json(axiosError.response.data, { status: 400 });
    }
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
