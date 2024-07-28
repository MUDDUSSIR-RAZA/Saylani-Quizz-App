
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function logout() {
    cookies().set("token", "", { expires: new Date(0) });
}

export async function getSession() {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("token");
    const token = tokenCookie?.value || null;
    return token;
}

export async function updateSession(request) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}