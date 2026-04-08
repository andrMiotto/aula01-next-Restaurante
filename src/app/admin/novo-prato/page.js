import { cadastrarPrato } from "../actions";

export default function PaginaNovoPrato() {
  return (
    <main className="max-w-2xl mx-auto p-10 bg-white shadow-xl rounded-3xl mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Novo Prato no Cardápio</h1>
      
      {/* 💡 A "mágica": passamos a Action diretamente para o atributo 'action' */}
      <form action={cadastrarPrato} className="flex flex-col gap-4">
        <input name="nome" placeholder="Nome do Prato" required className="p-3 border rounded-xl" />
        
        <textarea name="descricao" placeholder="Descrição completa" required className="p-3 border rounded-xl h-32" />
        
        <select name="categoria" required className="p-3 border rounded-xl bg-white">
          <option value="Entradas">Entradas</option>
          <option value="Pratos Principais">Pratos Principais</option>
          <option value="Sobremesas">Sobremesas</option>
          <option value="Bebidas">Bebidas</option>
        </select>

        <input name="preco" type="number" step="0.01" placeholder="Preço (R$)" required className="p-3 border rounded-xl" />
        
        <input name="imagem" type="url" placeholder="URL da imagem (Unsplash)" required className="p-3 border rounded-xl" />

        <label className="flex items-center gap-2 cursor-pointer p-2">
          <input name="destacado" type="checkbox" className="w-5 h-5 accent-orange-600" />
          <span className="text-gray-700">Destaque da Casa?</span>
        </label>

        <button type="submit" className="bg-orange-600 text-white p-4 rounded-xl font-bold hover:bg-orange-700 transition-all">
          Salvar no Cardápio
        </button>
      </form>
    </main>
  );
}