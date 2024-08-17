import axios from "axios";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { course_name, batch, cities } = await req.json();
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/addCourse`,
      { course_name, batch, cities }
    );
    revalidateTag("courses");
    console.log("Add Course API data ", data);
    return NextResponse.json(data);
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
