import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id, status } = await req.json();

    try {
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/attestStudentRequest` , {id , status});
      return NextResponse.json(data);
    } catch (axiosError) {
      return NextResponse.json(axiosError.response.data, { status: 400 });
    }
  } catch (axiosError) {
    return NextResponse.json(axiosError.response.data, { status: 400 });
  }
}
