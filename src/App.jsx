import {useReducer, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./modules/alwaysOnScreen/header.jsx";
import Footer from "./modules/alwaysOnScreen/footer.jsx";

import MainPage from "./htmlElements/pages/mainPage.jsx";
import CatalogPage from "./htmlElements/pages/catalogPage.jsx";
import CartPage from "./htmlElements/pages/cartPage.jsx";
import ProductPage from "./htmlElements/pages/productPage.jsx";

import OrderForm from "./htmlElements/forms/orderForm.jsx";
import RegistForm from "./htmlElements/forms/registForm.jsx";

import ToastPortal from "./modules/portals/toast.jsx";

import {cartReducer, initialCart} from "./modules/reducers/cartReducer.jsx";

function App() {
    const [toastMessage, setToastMessage] = useState(null);
    const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 2000);
    };

    const handleAddToCart = (product) => {
        dispatch({ type: "ADD", product });
        showToast(`${product.name} добавлен в корзину.`);
    }

    const handleRemoveFromCart = (id) => {
        const item = cartItems.find(item => item.id === id)
        dispatch({type: "REMOVE", id});

        if (item) {
        showToast(`${item.name} удален.`);
        }
    }

    const hadleDecreseFromCart = (id) => {
        dispatch({type: "DECREASE", id});
    }

    const handleClearCart = () => {
        dispatch({type: "CLEAR"});
        showToast("Корзина была очищенна.");
    }

    return (
        <BrowserRouter>
            <Header />

            {typeof toastMessage === 'string' && <ToastPortal message={toastMessage} />}
            <Routes>
                <Route path="/" element={<MainPage addToCart={handleAddToCart} />} />
                <Route path="/catalog" element={<CatalogPage addToCart={handleAddToCart} />} />
                <Route path="/cart" element={
                    <CartPage
                        products={cartItems}
                        addToCart={handleAddToCart}
                        removeFromCart={handleRemoveFromCart}
                        decreaseFromCart={hadleDecreseFromCart}
                        clearCart={handleClearCart}
                    />
                }/>
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/order" element={<OrderForm />} />
                <Route path="/register" element={<RegistForm />} />
            </Routes>

            <Footer />
        </BrowserRouter>

    );
}

export default App;
