import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { course_name, batch, cities } = await req.json();
    try {
      const {data} = await axios.post(
        `${process.env.BACKEND_URL}/admin/addCourse`,
        { course_name, batch, cities }
      );
      console.log("🚀 ~ POST ~ data:", data)
      return NextResponse.json(data);
    } catch (axiosError) {
      console.log("🚀 ~ POST ~ axiosError:", axiosError)
      return NextResponse.json(axiosError.response.data, { status: 400 });
    }
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
