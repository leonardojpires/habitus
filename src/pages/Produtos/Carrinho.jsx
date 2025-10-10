import { useEffect, useState } from "react";
import products from "./produtosData";
import Toast from './../../components/Toast/Toast';
import ProductCard from './../../components/ProductCard/ProductCard.jsx';

function Carrinho() {
  const [favorites, setFavorites] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [ toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorites = (id) => {
    let updated = [];

    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id);
      setToastMessage("Produto removido do carrinho");
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setShowToast(true);
  };

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <>
      <section className="w-full !px-10 !pt-30 !pb-15 bg-black/5 bg-center bg-no-repeat md:!px-20">
        <h1 className="text-4xl text-[var(--primary)] text-headline !mb-4 lg:text-6xl">
          O Seu Carrinho
        </h1>
      </section>

      <section className="!mt-10 !px-5 bg-white flex flex-col justify-center items-center gap-10 !mb-20 md:!px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {favoriteProducts.length === 0 && (
            <p className="text-black/60 text-lg col-span-full text-center !mb-20">
              Nenhum produto adicionado ao carrinho.
            </p>
          )}
          {favoriteProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                favorites={favorites}
                toggleFavorites={toggleFavorites}
                isInCart={true}
              />
          ))}
        </div>
      </section>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
}

export default Carrinho;
