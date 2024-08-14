import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    try {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/getQuizById` , {
                    params: { id }
                  }
            );
            return NextResponse.json(data)
        } catch (error) {
            return NextResponse.json(error.response.data, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json(axiosError.response.data, { status: 400 });
    }
}
