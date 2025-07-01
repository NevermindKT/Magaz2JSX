import React from "react";
import ProductCard from "../modules/productCard.jsx";
import products from "../Data/Catalog.jsx";
import "../CSS/catalog.css"

function CatalogPage() {

    return (
        <div className="catalog-grid">
            {!products || products.length === 0 ?
                <p>Товары не найдены.</p> :
                products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
        </div>
    );
}

export default CatalogPage;
