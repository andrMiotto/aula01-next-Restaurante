import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-6 bg-white shadow-md">
            <h2 className="text-2xl font-bold text-orange-600">Sabor & Arte</h2>
            <nav className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Início</Link>
                <Link href="/cardapio" className="text-gray-700 hover:text-orange-600 font-medium">Cardápio</Link>
                <Link href="/categorias" className="text-gray-700 hover:text-orange-600 font-medium">Categorias</Link>
            </nav>
        </header>
    );
}