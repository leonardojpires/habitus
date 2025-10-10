import categories from "./categoriasData.js";

function Categorias() {
  return (
    <section className="w-full !px-20 bg-cover bg-center bg-no-repeat relative bg-[var(--background))] !mt-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-5xl text-[var(--text)] font-semibold font-headline">
          Ambientes Complexos
        </h2>
        <p className="text-xl text-[var(--text-secondary)] font-bpdy">
          Descubra as nossas coleções exclusivas para cada espaço do seu lar
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 !mt-10">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl animate-scale-in cursor-pointer "
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute bottom-[20px] left-0 right-0 p-6 text-white text-center">
              <h3 className="font-serif text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                {category.title}
              </h3>
              <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                {category.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
