import "./index.css";
import categories from "./filtrosData";
import products from "./produtosData";
import { ShoppingCart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "./../../components/ProductCard/ProductCard";
import Toast from "./../../components/Toast/Toast";

function Produtos() {
  const [selectedFilters, setSelectedFilters] = useState(["todos"]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [favorites, setFavorites] = useState([]);

  const [showToast, setShowToast] = useState(false);

  const [ toastMessage, setToastMessage] = useState('');
  
  useEffect(() => {
    let filtered = products;
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);

    if (!(selectedFilters.includes("todos") || selectedFilters.length === 0)) {
      filtered = products.filter((product) =>
        selectedFilters.includes(product.category)
      );
    }

    filtered = filtered.filter((product) => {
      const meetsMin = minPrice ? product.price >= minPrice : true;
      const meetsMax = maxPrice ? product.price <= maxPrice : true;
      return meetsMin && meetsMax;
    });

    setFilteredProducts(filtered);
  }, [selectedFilters, minPrice, maxPrice]);

  const toggleFavorites = (id) => {
    let updated = [];
    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id);
      setToastMessage("Produto removido do carrinho");
    } else {
      updated = [...favorites, id];
      setToastMessage("Produto adicionado ao carrinho");
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));

    window.dispatchEvent(new CustomEvent("cartUpdated"));
    setShowToast(true);
  };
  
  return (
    <>
      <section className="w-full !px-10 !pt-30 !pb-15 bg-black/5 bg-center bg-no-repeat md:!px-20">
        <h1 className="text-4xl text-[var(--primary)] text-headline !mb-4 lg:text-6xl">
          A Nossa Coleção
        </h1>
        <p className="text-lg text-black/60 text-body">
          Descubra móveis exclusivos que transformam seu espaço num lugar único
        </p>
      </section>

      <section className="relative !mt-20 !px-5 bg-white flex flex-col gap-10 !mb-20 md:!px-20 md:flex-row">
        <aside className="w-full container mx-auto lg:flex-row gap-8 md:w-1/4">
          <h2 className="text-3xl text-[var(--primary)] font-headline">
            Filtros
          </h2>
          <div className="flex flex-col items-start">
            <span className="text-lg font-medium text-[var(--primary)]/80 font-body !mb-2">
              Categorias
            </span>
            <div className="w-full flex flex-row gap-2 justify-start items-start overflow-x-auto whitespace-nowrap lg:flex-col lg:justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (category.value === "todos") {
                      setSelectedFilters(["todos"]);
                    } else {
                      setSelectedFilters((prev) => {
                        const newFilters = prev.filter((f) => f !== "todos");
                        if (prev.includes(category.value)) {
                          return newFilters.filter((f) => f !== category.value);
                        } else {
                          return [...newFilters, category.value];
                        }
                      });
                    }
                  }}
                  className={`!px-5 !py-2 cursor-pointer hover:text-[var(--text)] hover:bg-black/5 ${
                    selectedFilters.includes(category.value)
                      ? "text-white bg-[var(--highlight)]"
                      : ""
                  } rounded-lg`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <span className="text-lg font-medium text-[var(--primary)]/80 font-body !mt-10 !mb-2">
              Preço
            </span>
            <div className="flex flex-col gap-2 justify-center items-start">
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                placeholder="Min."
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full bg-black/10 !p-2 border-none outline-0 hover:outline-1 hover:outline-[var(--highlight)] font-body lg:w-1/2"
              />

              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                placeholder="Max."
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full bg-black/10 !p-2 border-none outline-0 hover:outline-1 hover:outline-[var(--highlight)] font-body lg:w-1/2"
              />
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="flex-1">
          <span className="inline-flex flex-row gap-5 text-lg text-black/50 font-body !mb-10">{`${filteredProducts.length} produtos`}</span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            ))}
          </div>
        </div>
      </section>

      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}

export default Produtos;
