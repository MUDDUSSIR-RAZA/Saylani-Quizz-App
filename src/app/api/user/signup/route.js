import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {studentData} = await req.json()

        try {
            // const { data } = await axios.post(`${process.env.BACKEND_URL}/auth/signUp`, {...studentData});
            console.log(studentData)
            return NextResponse.json("data")
        } catch (axiosError) {
            console.log(axiosError.response.data)
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
    } catch (axiosError) {
        console.log(axiosError.response.data)
        return NextResponse.json(error)
    }
}
