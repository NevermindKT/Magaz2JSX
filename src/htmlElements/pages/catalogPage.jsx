import React, {useEffect, useState} from "react";
import ProductCard from "../../modules/productCard.jsx";
import products from "../../Data/Products.jsx";
import "../../CSS/catalog.css"

function CatalogPage( { addToCart } ) {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const filteredProducts = products.filter((product) =>
        product.name &&
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = filteredProducts.slice(startIndex, endIndex);

    const categories = ["all", ...new Set(products.map(p => p.category))];

    useEffect(() => {
        setCurrentPage(1);
    }, [search, category]);

    return (
        <div>
            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            <div className="catalog-grid">
                {!visibleProducts || visibleProducts.length === 0 ?
                    <p>Товары не найдены.</p> :
                    visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                    ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default CatalogPage;
