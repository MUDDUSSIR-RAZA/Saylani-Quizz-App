import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        const { email, password } = await req.json()
        try {
            const { data } = await axios.post(`${process.env.BACKEND_URL}/auth/login`, {
                email,
                password,
            });
            // const response = NextResponse.json({ message: "Login Succesfuly", success: true })
            // response.cookies.set("token", data, { httpOnly: true })
            // return response
            return NextResponse.json("data")

        } catch (axiosError) {
            console.log(axiosError.response.data)
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
    } catch (axiosError) {
        return NextResponse.json(error)
    }
}
