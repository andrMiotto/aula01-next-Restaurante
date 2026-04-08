import { editarPrato } from "@/app/admin/actions";

export default async function PaginaEditarPrato({ params }) {
  const { id } = await params;

  // 1. Busca os dados atuais do prato para preencher o form
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`);
  const prato = await res.json();

  // 2. Criamos uma versão da Action que já conhece o ID (usando bind)
  const editarPratoComId = editarPrato.bind(null, id);

  return (
    <main className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-3xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Editar Prato</h1>
      
      <form action={editarPratoComId} className="flex flex-col gap-4">
        <input name="nome" defaultValue={prato.nome} className="p-3 border rounded-xl" />
        <textarea name="descricao" defaultValue={prato.descricao} className="p-3 border rounded-xl h-32" />
        
        <select name="categoria" defaultValue={prato.categoria} className="p-3 border rounded-xl bg-white">
          <option value="Entradas">Entradas</option>
          <option value="Pratos Principais">Pratos Principais</option>
          <option value="Sobremesas">Sobremesas</option>
          <option value="Bebidas">Bebidas</option>
        </select>

        <input name="preco" type="number" step="0.01" defaultValue={prato.preco} className="p-3 border rounded-xl" />
        <input name="imagem" type="url" defaultValue={prato.imagem} className="p-3 border rounded-xl" />

        <label className="flex items-center gap-2 p-2">
          <input name="destacado" type="checkbox" defaultChecked={prato.destacado} className="w-5 h-5 accent-orange-600" />
          <span className="text-gray-700">Manter em Destaque?</span>
        </label>

        <button type="submit" className="bg-blue-600 text-white p-4 rounded-xl font-bold hover:bg-blue-700">
          Atualizar Prato
        </button>
      </form>
    </main>
  );
}