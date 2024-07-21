import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("request api route");
        // try {
        //     const { data } = await axios.get(`${process.env.BACKEND_URL}/admin/studentRequests`)
        //     return NextResponse.json(data)
        // } catch (axiosError) {
        //     return NextResponse.json(axiosError.response.data, { status: 400 })
        // } 
    } catch (axiosError) {
        // return NextResponse.json(axiosError.response.data , {status : 400} )
    }
}