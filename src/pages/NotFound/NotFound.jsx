import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center font-body !px-6">
      <h1 className="text-6xl font-headline text-[var(--primary)] !mb-6">404</h1>
      <h2 className="text-3xl font-headline text-[var(--highlight)] !mb-4">Página não encontrada</h2>
      <p className="text-[var(--text-secondary)] !mb-8 text-center max-w-md">
        A página que procura não existe ou foi removida. 
        Volte à página inicial para continuares a navegar pelo nosso catálogo.
      </p>
      <Link
        to="/"
        className="bg-[var(--highlight)] hover:bg-[var(--hover)] text-white font-semibold !py-3 !px-6 rounded-lg transition-all shadow-sm"
      >
        Voltar para a página inicial
      </Link>
    </section>
  );
}

export default NotFound;
