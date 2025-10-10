import benefits from "./beneficiosData.js";

function Beneficios() {
  return (
    <section className="w-full !px-20 bg-cover bg-center bg-no-repeat relative bg-[var(--background)] !mt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-secondary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--highlight)]/10 !mb-4 transition-transform duration-300 hover:scale-110">
                <Icon className="w-8 h-8 text-[var(--highlight)]" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2 font-body">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Beneficios;
