import React from "react";
import ProductCard from "../../modules/productCard.jsx";
import products from "../../Data/Products.jsx";
import "../../CSS/catalog.css"

function CatalogPage( { addToCart } ) {

    return (
        <div className="catalog-grid">
            {!products || products.length === 0 ?
                <p>Товары не найдены.</p> :
                products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={ addToCart } />
                ))}
        </div>
    );
}

export default CatalogPage;
