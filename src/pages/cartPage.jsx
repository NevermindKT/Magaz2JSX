import React, {useState} from "react";
import ConfirmDialog from "../modules/confirmDialog.jsx";

function CartPage({products, addToCart, removeFromCart, decreaseFromCart, clearCart}) {

    const [confirm, setConfirm] = useState({visible: false, action: null});

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

    return (
        <div>
            <h2>Корзина</h2>
            {products.length === 0 && <p>Корзина пуста.</p>}

            <ul className="cart-list">
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.quantity} шт.
                        <button onClick={() => {
                            if (product.quantity === 1) {
                                askConfirmation(
                                    `Удалить ${product.name} из корзины?`,
                                    () => removeFromCart(product.id)
                                );
                            } else {
                                decreaseFromCart(product.id);
                            }
                        }}>-</button>
                        <button onClick={() => addToCart(product)}>+</button>
                        <button onClick={() =>
                            askConfirmation(
                                `Удалить ${product.name} из корзины?`,
                                () => removeFromCart(product.id)
                            )
                        }>Удалить
                        </button>
                    </li>
                ))}
            </ul>

            {products.length > 0 && (
                <button onClick={() =>
                    askConfirmation(
                        "Очистить корзину?",
                        () => clearCart()
                    )
                }>Очистить корзину</button>
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

export default CartPage;
