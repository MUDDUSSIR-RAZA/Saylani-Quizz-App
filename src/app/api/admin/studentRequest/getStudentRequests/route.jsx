import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("🚀 ~ GET ~ GET:", GET)
  try {
    try {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/admin/getStudentRequests`
      );
      return NextResponse.json(data);
    } catch (axiosError) {
      return NextResponse.json(axiosError.response.data, { status: 400 });
    }
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
