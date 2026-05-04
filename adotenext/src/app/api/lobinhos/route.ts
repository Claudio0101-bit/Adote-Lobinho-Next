import { NextResponse } from "next/server";

const JSON_SERVER = "http://localhost:3001/lobinhos";


export async function GET(request: Request) {
    
    const { searchParams } = new URL(request.url);
    
    const limit = Number(searchParams.get("_limit")) || 4;

    const url = new URL(JSON_SERVER);
    
    url.search = searchParams.toString();

    const res = await fetch(url.toString(), { cache: "no-store" });
    
    const data = await res.json();

    const total = Number(res.headers.get("X-Total-Count"));
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({ data, total, totalPages });
}

export async function POST(request: Request) {
    
    const body = await request.json();
    
    const res = await fetch(JSON_SERVER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    
    const data = await res.json();
    
    return NextResponse.json(data, { status: 201 });
}