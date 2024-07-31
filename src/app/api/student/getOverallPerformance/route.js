import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {

    const token = cookies().get("token").value;
    try {
        try {
            const { data } = await axios.get(
                `${process.env.BACKEND_URL}/student/getOverallPerformance`, {
                params: { token }
            }
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
