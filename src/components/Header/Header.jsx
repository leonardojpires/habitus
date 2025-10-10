import './index.css';
import { useEffect, useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [ itemsInCart, setItemsInCart ] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
      setItemsInCart(saved.length);
    }

    updateCartCount();

    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    }
  }, []);

  return (
    <header className="w-full fixed bg-[#fcfbf7] shadow-sm !px-4 sm:px-6 lg:!px-16 font-body z-20">
      <div className="flex items-center justify-between h-16">
        
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#4b3a2f] text-white font-bold rounded-l-lg !px-2 !py-1">
            H
          </div>
          <span className="text-xl font-semibold text-gray-800">Habitus</span>
        </Link>

        
        <nav className="hidden md:flex items-center space-x-8 gap-10 font-medium text-gray-800">
          <Link to="/" className="links">Início</Link>
          <Link to="/produtos" className="links">Produtos</Link>
          <Link to="/contacto" className="links">Contacto</Link>
        </nav>

        
        <div className="flex items-center space-x-4 gap-10">
          <div className="relative">
            <Link to="/carrinho">
              <ShoppingCart className="w-6 h-6 text-gray-800 cursor-pointer links" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-[#4b3a2f] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {itemsInCart}
            </span>
          </div>

          
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-800 hover:text-[#4b3a2f] transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 !px-0 !py-4">
          <div className="flex flex-col space-y-4 gap-5 font-medium text-gray-800">
          <Link to="/" className="links py-2 rounded-lg">Início</Link>
          <Link to="/produtos" className="links py-2 rounded-lg">Produtos</Link>
          <Link to="/contacto" className="links py-2 rounded-lg">Contacto</Link>
          </div>
        </div>
      )}
    </header>
  );
}
