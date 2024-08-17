import axios from "axios";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { studentData } = await req.json()
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signUp`, { ...studentData });
        revalidateTag("requests");
        return NextResponse.json(data)
    } catch (axiosError) {
        return NextResponse.json(axiosError.response.data, { status: 400 })
    }
}
