import './index.css';
import { Mail } from "lucide-react";

function CTA() {
  return (
    <section className="w-full !px-10 lg:!px-20 !py-20 bg-cover bg-center bg-no-repeat relative bg-gradient-to-br from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/85 !mt-20">
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <h2 className="text-4xl text-white font-semibold text-headline lg:text-6xl">Receba Ofertas Exclusivas</h2>
        <p className="text-lg text-[var(--secondary)] font-medium font-body !mb-5 lg:text-2xl ">Inscreva-se e seja o primeiro a conhecer nossas novidades e promoções especiais</p>

        <form className="w-[50%] flex flex-col justify-center items-center gap-3 lg:flex-row lg:gap-5" id="form">

            <div className="input-wrapper flex-1 flex items-center">
                <Mail className="icon" />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="O Seu E-Mail"
                    className="input font-body"
                />
            </div>

            <button type="submit" className="text-white text-bold bg-[var(--highlight)] font-body !px-8 !py-2 rounded-lg cursor-pointer hover:text-[var(--highlight)] hover:bg-[var(--secondary)] transition-all ease-in-out duration-200">Inscrever</button>
        </form>

        <span className="text-[1rem] text-white/70 text-center font-body">Não enviamos spam. Cancele quando quiser.</span>
      </div>
    </section>
  );
}

export default CTA;