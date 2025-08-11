import React, {useState} from "react";
import ConfirmDialog from "./portals/confirmDialog.jsx";
import "../CSS/cart.css";
import {Link, useNavigate} from "react-router-dom";

function Cart({products, addToCart, removeFromCart, decreaseFromCart, clearCart, onClose}) {

    const [confirm, setConfirm] = useState({visible: false, action: null});
    const navigate = useNavigate();

    const askConfirmation = (message, action) => {
        setConfirm({
            visible: true,
            message,
            action,
        });
    };

    const handleConfirm = () => {
        if (confirm.action) confirm.action();
        setConfirm({visible: false, action: null});
    };

    const handleCancel = () => {
        setConfirm({visible: false, action: null});
    };

    const handlePurchase = () => {
        onClose();
        navigate("/order");
    };

    return (
        <div className="cart-wrapper">
            <h2>Корзина</h2>
            {products.length === 0 && <p>Корзина пуста.</p>}

            <ul className="cart-list">
                {products.map((product) => (
                    <li key={product.id}>
                        <div className="cart-item-info">
                            <img src={product.image} alt={product.name}/>
                            <Link to={`/product/${product.id}`} className="cart-product-link">{product.name}</Link>
                            {/*{product.name}: {product.quantity} шт.*/}
                        </div>
                        <div className="cart-item-func">
                            <div className="cart-item-value">
                                {product.quantity}
                            </div>
                            <div className="cart-item-buttons">
                                <div className="incriment-dicrement">
                                    <button onClick={() => {
                                        if (product.quantity === 1) {
                                            askConfirmation(
                                                `Удалить ${product.name} из корзины?`,
                                                () => removeFromCart(product.id)
                                            );
                                        } else {
                                            decreaseFromCart(product.id);
                                        }
                                    }}>-
                                    </button>
                                    <button onClick={() => addToCart(product)}>+</button>
                                </div>
                                <button className="delete-button" onClick={() =>
                                    askConfirmation(
                                        `Удалить ${product.name} из корзины?`,
                                        () => removeFromCart(product.id)
                                    )
                                }>Удалить
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {products.length > 0 && (
            <div className="buttons-after">
                <button className="purchase-button" onClick={handlePurchase}>Заказ</button>

                <button className="delete-button" onClick={() =>
                    askConfirmation(
                        "Очистить корзину?",
                        () => clearCart()
                    )
                }>Очистить корзину</button>
            </div>
            )}


            {confirm.visible && (
                <ConfirmDialog
                    message={confirm.message}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
}

export default Cart;
