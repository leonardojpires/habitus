
import { Outlet } from 'react-router-dom';
import Container from './../../components/Container/Container';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

function BasePage() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default BasePage;
