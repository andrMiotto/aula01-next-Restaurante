import Image from 'next/image';
import Link from 'next/link';
import Busca from "@/components/Busca";
import BotaoExcluir from "@/components/BotaoExcluir"; // Componente Client

export default async function PaginaAdmin({ searchParams }) {
  // [+] ADICIONADO: Captura de busca idêntica ao cardápio
  const query = (await searchParams)?.busca || "";

  const resposta = await fetch('https://api-restaurante-5iqb.onrender.com/api/produtos', {
    next: { revalidate: 0 } // Admin precisa de dados sempre frescos
  });
  const produtos = await resposta.json();

  // [+] ADICIONADO: Filtro para facilitar encontrar o prato a editar
  const produtosFiltrados = produtos.filter(prato => 
    prato.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gerenciar Cardápio</h1>
          <p className="text-gray-500">Edite ou remova pratos da base de dados.</p>
        </div>
        {/* Link para criar novo prato (visto no tópico anterior) */}
        <Link href="/admin/novo" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition-colors">
          + Novo Prato
        </Link>
      </div>

      <div className="mb-6">
        <Busca />
      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Prato</th>
              <th className="p-4 font-semibold text-gray-600">Categoria</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.map((prato) => (
              <tr key={prato.id} className="border-b last:border-none hover:bg-gray-50 transition-colors">
                <td className="p-4 flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden border">
                    <Image src={prato.imagem} alt={prato.nome} fill className="object-cover" />
                  </div>
                  <span className="font-medium text-gray-800">{prato.nome}</span>
                </td>
                <td className="p-4">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-bold uppercase">
                    {prato.categoria}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-4">
                    {/* [+] ADICIONADO: Botão de Edição (Link) */}
                    <Link 
                      href={`/admin/editar/${prato.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Editar
                    </Link>
                    
                    {/* [+] ADICIONADO: Componente de Exclusão com confirmação */}
                    <BotaoExcluir id={prato.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {produtosFiltrados.length === 0 && (
          <div className="p-10 text-center text-gray-400">
            Nenhum prato encontrado para "{query}".
          </div>
        )}
      </div>
    </main>
  );
}