import { useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle, X } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fields = ["nome", "email", "mensagem"];

  useEffect(() => {
    const savedData = {};
    fields.forEach((f) => {
      const val = localStorage.getItem(`contact_${f}`);
      if (val) savedData[f] = val;
    });
    setFormData((prev) => ({ ...prev, ...savedData }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    localStorage.setItem(`contact_${name}`, value);
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) error = "Introduza um email válido.";
    } else {
      if (!value.trim()) error = `Campo obrigatório.`;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateAll = () => fields.every((f) => validateField(f, formData[f]));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsSubmitting(true);
    setFeedback("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFeedback("A sua mensagem foi enviada com sucesso!");
    fields.forEach((f) => localStorage.removeItem(`contact_${f}`));
    setFormData({ nome: "", email: "", mensagem: "" });
    setErrors({});
    setIsSubmitting(false);
  };

  return (
    <section
      id="contacto"
      className="!py-30 !md:py-28 flex justify-center items-start bg-[var(--background)] !px-4 !sm:px-6 !lg:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-headline text-[var(--primary)] mb-4 font-bold">
            Vamos conversar 👋
          </h2>
          <p className="text-[var(--text-secondary)] font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed !mb-10">
            Preencha o formulário abaixo e entraremos em contacto o mais rápido possível.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[var(--borders)] shadow-lg md:shadow-xl rounded-2xl !p-6 !md:p-8 !lg:p-12 space-y-6 md:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" size={20} />
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder=" "
                value={formData.nome}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`peer w-full !pl-12 !pr-4 !py-4 border rounded-xl font-body bg-transparent placeholder-transparent focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent outline-none transition-all duration-200 ${
                  errors.nome ? "border-red-500" : "border-[var(--borders)] hover:border-[var(--highlight)]"
                }`}
              />
              <label
                htmlFor="nome"
                className="absolute left-12 top-1/2 -translate-y-1/2 bg-white px-2 text-[var(--text-secondary)] text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-secondary)] peer-focus:top-0 peer-focus:text-sm peer-focus:text-[var(--highlight)] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[var(--highlight)]"
              >
                Nome *
              </label>
              {errors.nome && <p className="mt-2 text-sm text-red-500 font-medium">{errors.nome}</p>}
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" size={20} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`peer w-full !pl-12 !pr-4 !py-4 border rounded-xl font-body bg-transparent placeholder-transparent focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent outline-none transition-all duration-200 ${
                  errors.email ? "border-red-500" : "border-[var(--borders)] hover:border-[var(--highlight)]"
                }`}
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-1/2 -translate-y-1/2 bg-white px-2 text-[var(--text-secondary)] text-sm transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-secondary)] peer-focus:top-0 peer-focus:text-sm peer-focus:text-[var(--highlight)] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[var(--highlight)]"
              >
                Email *
              </label>
              {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="relative !mt-5">
            <MessageSquare className="absolute left-4 top-4 text-[var(--text-secondary)] pointer-events-none" size={20} />
            <textarea
              name="mensagem"
              id="mensagem"
              rows="5"
              placeholder=" "
              value={formData.mensagem}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`peer w-full !pl-12 !pr-4 !pt-4 !pb-4 border rounded-xl font-body bg-transparent placeholder-transparent focus:ring-2 focus:ring-[var(--highlight)] focus:border-transparent outline-none resize-vertical transition-all duration-200 min-h-[120px] ${
                errors.mensagem ? "border-red-500" : "border-[var(--borders)] hover:border-[var(--highlight)]"
              }`}
            />
            <label
              htmlFor="mensagem"
              className="absolute left-12 top-4 bg-white !px-2 text-[var(--text-secondary)] text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-secondary)] peer-focus:top-0 peer-focus:text-sm peer-focus:text-[var(--highlight)] peer-valid:top-0 peer-valid:text-sm peer-valid:text-[var(--highlight)]"
            >
              Mensagem *
            </label>
            {errors.mensagem && <p className="mt-2 text-sm text-red-500 font-medium">{errors.mensagem}</p>}
          </div>

          <div className="pt-4 md:pt-6 flex justify-center items-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full md:w-auto bg-[var(--highlight)] text-white font-headline !px-8 !py-4 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-[var(--hover)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--highlight)] transition-all duration-200 font-semibold shadow-md !mt-5"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensagem
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {feedback && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4 rounded-xl shadow-xl border border-green-300/60 backdrop-blur-md bg-white/90 px-5 py-4 max-w-sm">
          <CheckCircle className="text-green-600" size={24} />
          <div className="flex-1 text-sm md:text-base text-green-800 font-medium leading-snug">
            {feedback}
          </div>
          <button
            onClick={() => setFeedback("")}
            className="text-green-500 hover:text-green-700 transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
