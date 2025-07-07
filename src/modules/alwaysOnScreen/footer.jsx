import React from "react";
import "../../CSS/footer.css"
import Clock from "./clock.jsx";

function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Мой Магазин. Все права защищены.</p>
            <Clock />
        </footer>
    )
}

export default Footer;