import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({
  product,
  favorites,
  toggleFavorites,
  isInCart = false,
}) {
  const [count, setCount] = useState(1);

  const handleIncrement = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setCount((prev) => ({ ...prev, [id]: Math.max([prev[id] || 1] - 1, 1) }));
  };

  return (
    <div className="product">
      <Link to={`/produtos/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="flex flex-col !p-4">
        <h3 className="text-xl text-[var(--text)] font-headline">
          {product.name}
        </h3>
        <span className="text-sm text-[var(--text)]/70 font-body !mb-5">
          {product.description}
        </span>
        <div className="flex flex-row justify-between">
          <span className="text-2xl text-[var(--highlight)] font-medium font-body">
            {product.price}&#8364;
          </span>
          <div className="flex flex-row justify-center items-center gap-4">
            {isInCart && (
              <>
                <button
                  onClick={() => handleIncrement(product.id)}
                  className="text-[var(--highlight)] font-bold hover:text-[var(--hover)] transition cursor-pointer mb-1"
                >
                  ▲
                </button>

                <p className="text-lg font-semibold text-[var(--text)] mb-1 text-center">
                  {count[product.id] || 1}
                </p>

                <button
                  onClick={() => handleDecrement(product.id)}
                  className="text-[var(--highlight)] font-bold hover:text-[var(--hover)] transition cursor-pointer"
                >
                  ▼
                </button>
              </>
            )}

            <button
              onClick={() => toggleFavorites(product.id)}
              title={
                favorites.includes(product.id)
                  ? "Remover do carrinho"
                  : "Adicionar ao carrinho"
              }
              className={`text-white ${
                favorites.includes(product.id)
                  ? "bg-green-400"
                  : "bg-[var(--highlight)]"
              } rounded-lg !p-2 cursor-pointer`}
            >
              {favorites.includes(product.id) ? (
                <ShoppingBag />
              ) : (
                <ShoppingCart />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
