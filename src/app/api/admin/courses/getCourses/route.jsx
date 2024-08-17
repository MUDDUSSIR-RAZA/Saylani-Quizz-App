import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Server Get Request");
  try {
    console.log("Server Get Request");
    // const { data } = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getCourses`, {
    //     cache: "no-store",
    //   }
    // );
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getCourses`, { next: { tags: ['courses'] } , cache: "no-store"});
    const data = await res.json();
    console.log("Server Get Request Response", data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error.response.data, { status: 400 });
  }
}
