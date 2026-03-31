import Image from 'next/image';
import BotaoFavorito from "@/components/BotaoFavorito";

export default function PaginaCardapio() {
  // Dados reais extraídos da sua lista para teste de interface
  const pratos = [
    {
      id: "58997c7c-65d0-444c-818c-8d57eb8b0d19",
      nome: "Bruschetta Caprese",
      descricao: "Fatias de pão italiano tostado com tomate fresco, mussarela de búfala e manjericão",
      preco: 120,
      imagem: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800",
    },
    {
      id: "4d2bad25-5ec9-4535-aad1-435119af1d2a",
      nome: "Filé Mignon ao Molho Madeira",
      descricao: "Filé mignon grelhado ao ponto, servido com molho madeira e batatas rústicas",
      preco: 78.9,
      imagem: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    }
  ];

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-serif text-gray-800">Nosso Cardápio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pratos.map((prato) => (
          <div key={prato.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            
            {/* 💡 Container da Imagem Otimizada */}
            <div className="relative h-64 w-full">
              <Image 
                src={prato.imagem} 
                alt={prato.nome}
                fill // Preenche o container pai
                className="object-cover" // Garante que a foto não estique
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={prato.nome === "Bruschetta Caprese"} // Carrega o primeiro item mais rápido
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{prato.nome}</h2>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">{prato.descricao}</p>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  R$ {prato.preco.toFixed(2)}
                </span>
                <BotaoFavorito />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}