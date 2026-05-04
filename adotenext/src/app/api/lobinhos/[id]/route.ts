import { NextResponse } from "next/server";

const JSON_SERVER = "http://localhost:3001/lobinhos";

export async function GET( _: Request, { params }: {params: Promise<{id: string}>}) {

    const {id} = await params;
    
    const res = await fetch(`${JSON_SERVER}/${id}`, { cache: "no-store" });
    
    const data = await res.json();
    
    return NextResponse.json(data);
}

export async function PATCH( request: Request, { params }: { params: Promise<{id: string}> }) {
    
    const body = await request.json();
    
    const {id} = await params;

    const res = await fetch(`${JSON_SERVER}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    
    const data = await res.json();
    
    return NextResponse.json(data);
}

export async function DELETE(_: Request, { params }: { params: Promise<{id: string}> }) {
    
    const {id} = await params;

    const res = await fetch(`${JSON_SERVER}/${id}`, { method: "DELETE" });
    
    const data = await res.json();
    
    return NextResponse.json(data);
}