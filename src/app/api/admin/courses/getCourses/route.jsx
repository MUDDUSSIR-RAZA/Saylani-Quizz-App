import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    try {
      console.log("Server Get Request")
      const { data } = await axios.get(
        `https://saylani-quizz-app-backend.onrender.com/admin/getCourses`
      );
      console.log("Server Get Request Response" , data)
      return NextResponse.json(data)
    } catch (error) {
      return NextResponse.json(error.response.data, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
