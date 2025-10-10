import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage from './../pages/BasePage/BasePage';
import Home from './../pages/Home/Home';
import Produtos from './../pages/Produtos/Produtos';
import Carrinho from '../pages/Produtos/Carrinho';
import Contacto from './../pages/Contacto/Contacto';
import Produto from "../pages/Produto/Produto";
import NotFound from './../pages/NotFound/NotFound';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/produtos" element={<Produtos />}></Route>
                    <Route path="/produtos/:id" element={<Produto />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/carrinho" element={<Carrinho />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
