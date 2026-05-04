"use server";

import { addLobinho, adotarLobinho, deletarLobinho } from "@/services/lobinhosService";
import { redirect } from "next/navigation";

export async function excluirLobinhoAction(id: number) {
  
    await deletarLobinho(id);
  
    redirect("/lobinhos");
}

export async function adotarLobinhoAction(id: number, formData: FormData) {
    
    await adotarLobinho(id, {
        nomeDono: formData.get("nomeDono") as string,
        idadeDono: formData.get("idadeDono") as string,
        emailDono: formData.get("emailDono") as string,
    });

    redirect("/lobinhos");
}

export async function adicionarLobinhoAction(formData: FormData) {
    await addLobinho({
        nome: formData.get("nome") as string,
        idade: Number(formData.get("idade")),
        descricao: formData.get("descricao") as string,
        imagem: formData.get("imagem") as string,
        adotado: false,
        nomeDono: null,
        idadeDono: null,
        emailDono: null,
    });

    redirect("/lobinhos");
}