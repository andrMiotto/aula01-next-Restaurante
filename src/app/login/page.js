"use client";

export default function PaginaLogin() {
  function fazerLogin() {
    // Simulando a criação de um cookie de acesso que expira em 1 hora
    document.cookie = "auth_token=logado; path=/; max-age=3600";
    alert("Acesso autorizado! Redirecionando...");
    window.location.href = "/admin";
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-4">Acesso Restrito</h1>
        <p className="text-gray-500 mb-8">Área exclusiva para gerentes do restaurante.</p>
        
        <button 
          onClick={fazerLogin}
          className="bg-orange-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all"
        >
          Simular Login de Gerente
        </button>
      </div>
    </main>
  );
}