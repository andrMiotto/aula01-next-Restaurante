"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Busca() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(termo) {
    const params = new URLSearchParams(searchParams);
    if (termo) {
      params.set('busca', termo);
    } else {
      params.delete('busca');
    }
    // Atualiza a URL sem recarregar a página (ex: /cardapio?busca=pizza)
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="🔍 Buscar um prato..."
        className="w-full p-4 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('busca')?.toString()}
      />
    </div>
  );
}