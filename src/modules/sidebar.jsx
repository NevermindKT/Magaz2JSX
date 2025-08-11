import React, { useState, useEffect } from "react";
import products from "../Data/Products.jsx";
import "../CSS/sidebar.css";

function Sidebar({ selectedCategory, onCategoryChange, filters, onFilterChange }) {
    const categories = [...new Set(products.map(p => p.category))];

    const [availableFilters, setAvailableFilters] = useState({});

    useEffect(() => {
        if (selectedCategory && selectedCategory !== "all") {
            const categoryProducts = products.filter(p => p.category === selectedCategory);
            const properties = {};
            const blacklist = ["name", "id", "price", "category", "image", "description", "quantity"];

            categoryProducts.forEach(product => {
                Object.entries(product).forEach(([key, value]) => {
                    if (blacklist.includes(key)) return;

                    if (!properties[key]) properties[key] = {};

                    if (properties[key][value]) {
                        properties[key][value]++;
                    } else {
                        properties[key][value] = 1;
                    }
                });
            });

            setAvailableFilters(properties);
        } else {
            setAvailableFilters({});
        }
    }, [selectedCategory]);

    return (
        <div className="sidebar-inner">
            <h3>Категории</h3>
            <ul>
                <li onClick={() => onCategoryChange("all")} className={selectedCategory === "all" ? "active" : ""}>Все</li>
                {categories.map(cat => (
                    <li key={cat} onClick={() => onCategoryChange(cat)} className={selectedCategory === cat ? "active" : ""}>
                        {cat}
                    </li>
                ))}
            </ul>

            {Object.entries(availableFilters).map(([property, values]) => (
                <div key={property}>
                    <strong>{property}</strong>
                    {Object.entries(values).map(([val, count]) => (
                        <div key={val}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={filters[property]?.includes(val) || false}
                                    onChange={(e) => {
                                        const isChecked = e.target.checked;
                                        const updated = { ...filters };

                                        if (!updated[property]) updated[property] = [];

                                        if (isChecked) {
                                            updated[property].push(val);
                                        } else {
                                            updated[property] = updated[property].filter(v => v !== val);
                                            if (updated[property].length === 0) delete updated[property];
                                        }

                                        onFilterChange(updated);
                                    }}
                                />
                                {val} ({count})
                            </label>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
