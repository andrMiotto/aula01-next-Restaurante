"use client"; // 👈 OBRIGATÓRIO: Avisa ao Next que este componente tem interatividade

import { useState } from 'react';

export default function BotaoFavorito() {
  const [favorito, setFavorito] = useState(false);


  console.log("Renderizei botao")
  return (
    <button 
      onClick={() => setFavorito(!favorito)}
      className={`mt-2 px-4 py-2 rounded-md transition-colors ${
        favorito 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {favorito ? '❤️ Favoritado' : '🤍 Favoritar'}
    </button>
  );
}