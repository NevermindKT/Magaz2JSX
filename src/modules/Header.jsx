import { Link } from "react-router-dom";
import "../CSS/header.css";

function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className="logo">Magaz2</h1>
                <nav className="nav-links">
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/cart">Корзина</Link>
                    <Link to="/order">Заказ</Link>
                    <Link to="/register">Регистрация</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
