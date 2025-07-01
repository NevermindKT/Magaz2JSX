import './CSS/global.css'
import MainPage from "./pages/mainPage.jsx";
import CatalogPage from "./pages/catalogPage.jsx";
import CartPage from "./pages/cartPage.jsx";
import ProductPage from "./pages/productPage.jsx";
import OrderForm from "./pages/forms/orderForm.jsx";
import RegistForm from "./pages/forms/registForm.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./modules/header.jsx";
import Footer from "./modules/footer.jsx";

function App() {
    return (
        <BrowserRouter>

            <Header />
            <Footer />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/order" element={<OrderForm />} />
                <Route path="/register" element={<RegistForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
