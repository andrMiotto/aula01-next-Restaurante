import Image from 'next/image';
import Link from 'next/link';
import BotaoFavorito from "@/components/BotaoFavorito";

export default async function DetalhePrato({ params }) {
  // 1. Capturamos o ID da URL (aguardamos o params pois ele é assíncrono no Next 15+)
  const { id } = await params;

  // 2. Buscamos os dados desse prato específico
  const res = await fetch(`https://api-restaurante-5iqb.onrender.com/api/produtos/${id}`, {
    cache: 'no-store' // SSR: Sempre buscar detalhes atualizados
  });
  
  const prato = await res.json();

  return (
    <main className="max-w-5xl mx-auto p-10">
      {/* Botão de Voltar */}
      <Link href="/cardapio" className="text-orange-600 hover:underline mb-6 inline-block">
        ← Voltar para o Cardápio
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        {/* Lado Esquerdo: Imagem Otimizada */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <Image 
            src={prato.imagem} 
            alt={prato.nome} 
            fill 
            className="object-cover"
            priority 
          />
        </div>

        {/* Lado Direito: Informações da API */}
        <div className="flex flex-col justify-center">
          <span className="text-orange-600 font-semibold uppercase tracking-widest text-sm">
            {prato.categoria}
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mt-2">{prato.nome}</h1>
          
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            {prato.descricao}
          </p>

          <div className="mt-8 p-6 bg-gray-50 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-xs uppercase font-bold">Preço Individual</p>
              <span className="text-4xl font-bold text-green-700">
                R$ {prato.preco.toFixed(2)}
              </span>
            </div>
            <BotaoFavorito />
          </div>
          
          <p className="text-[10px] text-gray-300 mt-4 font-mono uppercase">
            ID do Sistema: {prato.id}
          </p>
        </div>
      </div>
    </main>
  );
}