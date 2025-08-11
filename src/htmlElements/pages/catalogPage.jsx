import React, { useEffect, useState } from "react";
import ProductCard from "../../modules/productCard.jsx";
import Sidebar from "../../modules/sidebar.jsx";
import products from "../../Data/Products.jsx";
import "../../CSS/catalog.css";

function CatalogPage({ addToCart, search, category }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(category || "all");
    const [filters, setFilters] = useState({});

    const itemsPerPage = 15;

    const filteredProducts = products.filter(product => {
        if (selectedCategory !== "all" && product.category !== selectedCategory) {
            return false;
        }

        for (const [property, values] of Object.entries(filters)) {
            if (!values.includes(product[property])) {
                return false;
            }
        }

        return true;
    });


    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [search, selectedCategory, filters]);

    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="catalog-wrapper">
            <div className="catalog-layout">
                <aside className="sidebar">
                    <Sidebar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        filters={filters}
                        onFilterChange={setFilters}
                    />
                </aside>
                <div className="catalog">
                    <div className="catalog-grid" key={currentPage}>
                        {!visibleProducts || visibleProducts.length === 0 ? (
                            <p>Товары не найдены.</p>
                        ) : (
                            visibleProducts.map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                            ))
                        )}
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            {Array.from({length: totalPages}, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={currentPage === index + 1 ? "active" : ""}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CatalogPage;
