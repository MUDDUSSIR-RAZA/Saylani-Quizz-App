import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    try {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/admin/getCourses`
      );
      console.log(data)
      return NextResponse.json(data)
    } catch (error) {
      return NextResponse.json(error.response.data, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
