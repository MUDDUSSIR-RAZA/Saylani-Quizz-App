import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  // const { data } = await axios.get(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getCourses`
  // );
  console.log("Server Get Request");
  try {
    console.log("Server Get Request");
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getCourses`, {
      method: "GET",
      cache: "no-store",
    });
    // const data = await res.json(); // Assign response to `data` variable
  
    // Now you can access `data` safely:
    console.log("Server Get Request Response", data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error.response.data, { status: 400 });
  }
}
