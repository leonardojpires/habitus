import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../Produtos/produtosData";

function Produto() {
    const params = useParams();
    const product = products.find(product => product.id === Number(params.id));
    if (!product) return (
        <div className="!py-40 !mb-40 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold font-headline text-[var(--primary)] text-center !mb-5">Produto não encontrado</h1>
            <p className="text-2xl font-body text-center text-[var(--text)]/50 !mb-5">O produto que procura não está disponível ou não existe.</p>
            <Link to="/" className="bg-[var(--highlight)] !px-8 !py-2 hover:bg-[var(--primary)] hover:text-white rounded-lg transition-all ease-in-out duration-300">Voltar</Link>
        </div>
    )

    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsAdded(saved.includes(product.id));
    }, [product.id])

    const toggleCart = () => {
        let saved = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (saved.includes(product.id)) {
            saved = saved.filter(id => id !== product.id);
            setIsAdded(false);
        } else {
            saved.push(product.id);
            setIsAdded(true);
        }

        localStorage.setItem('favorites', JSON.stringify(saved));
        window.dispatchEvent(new Event('cartUpdated'));
    }

    return (
        <section className="min-h-screen bg-[var(--background)] !px-6 !py-40 md:px-20 flex flex-col items-center font-body">
        
        <div className="w-full max-w-5xl flex flex-col-reverse items-center justify-between mb-10">
            <Link to="/produtos" className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--highlight)] transition !mb-10 cursor-pointer">
                ← Voltar
            </Link>
            <h1 className="text-4xl font-headline text-[var(--primary)] text-center font-bold !mb-5 lg:text-6xl">
                Detalhes do Produto
            </h1>
            <div></div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl bg-white !p-10 rounded-2xl shadow-md border border-[var(--borders)]">
            
            <div className="flex items-center justify-center">
            <img
                src={ product.image }
                alt={ `Produto ${ product.name }` }
                className="rounded-xl shadow-sm object-cover w-full max-w-[400px]"
            />
            </div>

            <div className="flex flex-col justify-between space-y-6">
            <div>
                <h2 className="text-3xl font-headline font-bold text-[var(--primary)] !mb-3">
                    { product.name }
                </h2>
                <p className="text-[var(--text-secondary)] !mb-4">
                    { product.description }
                </p>
                <p className="text-2xl font-semibold text-[var(--highlight)]">
                    { product.price }&euro;
                </p>
            </div>

            <div className="flex items-center gap-4 !mt-6">
                <button onClick={toggleCart} className={`${ isAdded ? 'bg-green-400' : 'bg-[var(--highlight)]'} hover:bg-[var(--hover)] text-white font-semibold !py-3 !px-6 rounded-lg transition-all shadow-sm cursor-pointer`}>
                    { isAdded ? 'Remover do Carrinho →' : 'Adicionar ao Carrinho 🛒' }
                </button>
            </div>

            <div className="!pt-8 border-t border-[var(--borders)] text-[var(--text-secondary)]">
                <p><strong>Categoria:</strong> <span className="uppercase">{ product.category }</span></p>
                <p><strong>Disponibilidade:</strong> Em stock</p>
                <p><strong>Envio:</strong> 3-5 dias úteis</p>
            </div>
            </div>
        </div>

        </section>
    );
}

export default Produto;
