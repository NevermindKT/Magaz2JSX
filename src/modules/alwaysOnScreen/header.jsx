import { Link } from "react-router-dom";
import "../../CSS/header.css";
import Modal from "../modalBase/modal.jsx";
import Cart from "../cart.jsx";
import React, {useState} from "react";

function Header({
                    products,
                    addToCart,
                    removeFromCart,
                    decreaseFromCart,
                    clearCart,
                    search,
                    setSearch,
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className="logo">Magaz2</h1>

                <input
                    id="filter-bar-input"
                    type="text"
                    placeholder="Поиск товаров..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="header-buttons">
                    <nav className="nav-links">
                        <Link to="/">Главная</Link>
                        <Link to="/catalog">Каталог</Link>
                        {/*<Link to="/cart">Корзина</Link>*/}
                        <Link to="/register">Регистрация</Link>
                    </nav>

                    <button className="cart-button" onClick={() => setIsCartOpen(true)}>a</button>
                    {isCartOpen && (
                        <Modal onClose={() => setIsCartOpen(false)}>
                            <Cart
                                products={products}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                decreaseFromCart={decreaseFromCart}
                                clearCart={clearCart}
                                onClose={() => setIsCartOpen(false)}
                            />
                        </Modal>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
