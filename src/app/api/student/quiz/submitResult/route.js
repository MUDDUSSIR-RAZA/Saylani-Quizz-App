import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, course_name , batch , quiz_name , totalQuestions , score } = await req.json();
    try {
      const {data} = await axios.post(
        `${process.env.BACKEND_URL}/student/submitResult`,
        {  userId, course_name , batch , quiz_name , totalQuestions , score  }
      );return NextResponse.json(data);
    } catch (axiosError) {
      return NextResponse.json(axiosError.response.data, { status: 400 });
    }
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
