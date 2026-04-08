"use server"; // 👈 OBRIGATÓRIO: Indica que todas as funções aqui rodam no servidor
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 
// --- AÇÃO DE CADASTRAR ---
export async function cadastrarPrato(formData) {
  // 1. Extraímos os dados do formulário
  const dados = {
    nome: formData.get("nome"),
    descricao: formData.get("descricao"),
    categoria: formData.get("categoria"),
    preco: parseFloat(formData.get("preco")),
    imagem: formData.get("imagem"),
    destacado: formData.get("destacado") === "on",
  };

  // 2. Enviamos para a sua API Real (POST)
  const res = await fetch("https://api-restaurante-5iqb.onrender.com/api/produtos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    throw new Error("Falha ao cadastrar o prato na API.");
  }

  // 3. Limpamos o cache da página de cardápio para o novo prato aparecer
  revalidatePath("/cardapio");
  
  // 4. Redirecionamos o usuário de volta
  redirect("/cardapio");
}

// --- AÇÃO DE EDITAR ---
export async function editarPrato(id, formData) {
  const dados = {
    nome: formData.get("nome"),
    descricao: formData.get("descricao"),
    categoria: formData.get("categoria"),
    preco: parseFloat(formData.get("preco")),
    imagem: formData.get("imagem"),
    destacado: formData.get("destacado") === "on",
  };

  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    throw new Error("Falha ao editar o prato na API.");
  }

  revalidatePath("/cardapio");
  revalidatePath(`/cardapio/${id}`);
  redirect("/cardapio");
}

// --- AÇÃO DE EXCLUIR ---
export async function excluirPrato(id) {
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Falha ao excluir o prato na API.");
  }

  revalidatePath("/cardapio");
  // Não usamos redirect aqui pois a ação será chamada de dentro da lista
}