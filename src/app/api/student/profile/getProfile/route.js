import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {

    const token = cookies().get("token").value;
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/student/getProfile`, {
            params: { token }
        }
        );
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error.response.data, { status: 400 });
    }
}
