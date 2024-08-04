import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {studentData} = await req.json()
        try {
            const { data } = await axios.post(`${process.env.BACKEND_URL}/auth/signUp`, {...studentData});
            return NextResponse.json(data)
        } catch (axiosError) {
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
    } catch (axiosError) {
        return NextResponse.json(error)
    }
}
