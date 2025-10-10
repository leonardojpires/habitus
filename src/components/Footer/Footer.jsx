import { Link } from 'react-router-dom';
import './index.css';
import { Instagram, Linkedin } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-[var(--background)] font-body !px-6 lg:!px-20">
    <div className="max-w-7xl mx-auto !py-10 grid md:grid-cols-4 gap-8 border-b border-[rgba(255,255,255,0.1)]">

        <div>
          <h2 className="text-2xl font-headline font-semibold mb-3">
            Habitus
          </h2>
          <p className="text-[var(--secondary)] text-sm leading-relaxed">
            Transformamos espaços com elegância e sofisticação desde 2010
          </p>
        </div>


        <div>
          <h3 className="font-headline font-semibold mb-3">Links Rápidos</h3>
          <ul className="flex flex-col gap-2 space-y-2 text-[var(--secondary)] text-sm">
            <li><Link to="/" className="links">Home</Link></li>
            <li><Link to="/produtos" className="links">Produtos</Link></li>
            <li><Link to="/carrinho" className="links">Carrinho</Link></li>
            <li><Link to="/contacto" className="links">Contacto</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="font-headline font-semibold mb-3">Atendimento</h3>
          <ul className="flex flex-col gap-2 text-[var(--secondary)] text-sm space-y-2">
            <li className="atendment">
              <span>📞</span> (+351) 938 604 654
            </li>
            <li className="atendment">
              <span>✉️</span> conctato@habitus.com.pt
            </li>
            <li className="atendment">
              <span>📍</span> Porto
            </li>
          </ul>
        </div>


        <div>
          <h3 className="font-headline font-semibold mb-3">Redes Sociais</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="icons"
            >
              <span><Instagram /></span>
            </a>
            <a
              href="#"
              className="icons"
            >
              <span><Linkedin  /></span>
            </a>
          </div>
        </div>
    </div>


      <div className="text-center !py-4 text-[var(--secondary)] text-sm">
        © {currentYear} Habitus. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
