import React from "react";
import { Link } from "react-router-dom";
import "../CSS/productCard.css"

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-price">{product.price} ₴</p>
            <Link to={`/product/${product.id}`} className="product-button">Подробнее</Link>
            <button className="product-button" onClick={() => addToCart(product)}>Добавить в корзину</button>
        </div>
    );
}

export default ProductCard;
