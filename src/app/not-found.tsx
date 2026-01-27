import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-4xl font-bold mb-4 font-heading text-primary">404</h2>
            <p className="mb-8 text-gray-400 text-lg">Página não encontrada</p>
            <Link
                href="/"
                className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all hover:scale-105"
            >
                Voltar para o Início
            </Link>
        </div>
    );
}
