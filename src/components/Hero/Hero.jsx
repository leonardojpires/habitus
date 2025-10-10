import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "/src/assets/hero-image.jpg";

function Hero() {
    return (
        <section className="w-full h-[600px] !px-10 !py-40 bg-cover bg-center bg-no-repeat relative md:!px-20" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-white/60 bg-gradient-to-b from-white/80 via-white/70 to-white/10" />

            <div className="relative w-full md:w-[75%] h-full flex flex-col items-start justify-center ">
                <h1 className="text-4xl color-[var(--text)] font-bold font-headline !mb-4 lg:text-7xl">Transforme O Seu Lar num <span className="text-[var(--highlight)]">Refúgio de Elegância</span></h1>
                <p className=" text-lg text-[var(--text)]/50 font-body !mb-5 lg:text-2xl">Móveis exclusivos que combinam design sofisticado, qualidade superior e conforto atemporal para cada ambiente da sua casa.</p>
                <div>
                    <Link to="/produtos" className="text-sm inline-flex flex-row justify-center items-center gap-2 bg-[var(--highlight)] text-white font-semibold uppercase rounded-xl font-body !py-3 !px-12 hover:bg-[var(--primary   )] transition-all ease-in-out duration-200">
                        Ver coleção
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;
