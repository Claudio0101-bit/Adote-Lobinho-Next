import { Lobinho } from "@/types/lobinho";
import { LobinhosResponse } from "@/types/lobinhoResponse";
import { randomInt } from "@/utils/random";

// const API_URL = "http://localhost:3000" + "/api/lobinhos";
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/api/lobinhos";

async function handleResponse<T>(res: Response): Promise<T> {
    
    if (!res.ok) throw new Error(`Erro ${res.status}: ${res.statusText}`);

    const data = await res.json();
    
    return data;
}

export async function getLobinhos(
    _page: number = 1,
    _limit: number = 4,
    nome_like: string = "",
    adotado?: boolean
): Promise<LobinhosResponse> {

    console.log(API_URL);
    const url = new URL(API_URL);
    
    url.searchParams.set("_page", String(_page));
    url.searchParams.set("_limit", String(_limit));
    if (nome_like) url.searchParams.set("nome_like", nome_like);
    if (adotado !== undefined) url.searchParams.set("adotado", String(adotado));

    const res = await fetch(url.toString(), { cache: "no-store" });
    
    return handleResponse<LobinhosResponse>(res);
}

export async function getLobinhosAleatorios(limit: number = 2): Promise<Lobinho[]> {
    
    const { totalPages } = await getLobinhos(1, limit);
    
    const paginaAleatoria = randomInt(1, totalPages);
    
    const { data } = await getLobinhos(paginaAleatoria, limit);
    return data;
}

export async function getLobinhoById(id: number): Promise<Lobinho> {
    
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
    
    return handleResponse<Lobinho>(res);
}

export async function addLobinho(data: Omit<Lobinho, "id">): Promise<Lobinho> {
    
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    
    return handleResponse<Lobinho>(res);
}

export async function adotarLobinho(
    id: number,
    dadosDono: Pick<Lobinho, "nomeDono" | "idadeDono" | "emailDono">
): Promise<Lobinho> {
    
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adotado: true, ...dadosDono }),
    });
    
    return handleResponse<Lobinho>(res);
}

export async function deletarLobinho(id: number): Promise<void> {
  
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  
    handleResponse(res);
}