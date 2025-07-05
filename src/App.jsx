import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./modules/header.jsx";
import Footer from "./modules/footer.jsx";

import MainPage from "./pages/mainPage.jsx";
import CatalogPage from "./pages/catalogPage.jsx";
import CartPage from "./pages/cartPage.jsx";
import ProductPage from "./pages/productPage.jsx";

import OrderForm from "./pages/forms/orderForm.jsx";
import RegistForm from "./pages/forms/registForm.jsx";

import ToastPortal from "./modules/toast.jsx";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [toastMessage, setToastMessage] = useState(null);

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 2000);
    };

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const found = prevItems.find(item => item.id === product.id);
            if (found) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });

        showToast(`${product.name} добавлен в корзину.`)
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const decreaseFromCart = (id) => {
        setCartItems(prevItems => {
            return prevItems
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0);
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <BrowserRouter>
            <Header />

            {typeof toastMessage === 'string' && <ToastPortal message={toastMessage} />}
            <Routes>
                <Route path="/" element={<MainPage addToCart={addToCart} />} />
                <Route path="/catalog" element={<CatalogPage addToCart={addToCart} />} />
                <Route path="/cart" element={
                    <CartPage
                        products={cartItems}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        decreaseFromCart={decreaseFromCart}
                        clearCart={clearCart}
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
