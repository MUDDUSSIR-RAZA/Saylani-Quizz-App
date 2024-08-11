import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        const admin = await req.json()
        console.log(admin)
        try {
            const { data } = await axios.post(`${process.env.BACKEND_URL}/auth/admin/signUp`, {
              ...admin
            });
            // const response = NextResponse.json({ message: "Login Succesfuly", success: true })
            // response.cookies.set("token", data, { httpOnly: true })
            // return response
        } catch (axiosError) {
            return NextResponse.json(axiosError.response.data, { status: 400 })
        }
        return NextResponse.json("data")
    } catch (axiosError) {
        return NextResponse.json(error)
    }
}
