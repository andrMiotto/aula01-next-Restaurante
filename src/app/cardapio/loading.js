export default function LoadingCardapio() {
    // Criamos um array de 6 itens para simular os cards carregando
    const skeletons = Array.from({ length: 6 });
  
    return (
      <main className="p-10 max-w-7xl mx-auto">
        <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-md mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skeletons.map((_, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm bg-white">
              {/* Bloco da Imagem */}
              <div className="h-56 bg-gray-200 animate-pulse w-full"></div>
              
              <div className="p-6">
                {/* Bloco do Título e Categoria */}
                <div className="flex justify-between mb-4">
                  <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-16 bg-gray-100 animate-pulse rounded-full"></div>
                </div>
                
                {/* Bloco da Descrição */}
                <div className="space-y-2 mb-6">
                  <div className="h-3 w-full bg-gray-100 animate-pulse rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-100 animate-pulse rounded"></div>
                </div>
                
                {/* Bloco do Preço e Botão */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <div className="h-8 w-24 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-10 w-28 bg-gray-200 animate-pulse rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }