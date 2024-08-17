import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const { data } = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getStudentRequests`
    // );
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getCourses`,
      { next: { tags: ["requests"] }, cache: "no-store" }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (axiosError) {
    return NextResponse.json(axiosError, { status: 400 });
  }
}
