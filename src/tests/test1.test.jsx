import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import {BrowserRouter} from "react-router-dom";

import ProductCard from "../modules/productCard.jsx";

describe("ProductCard", () => {
    it("renders correctly", () => {
        const product = { name: "Test", price: 100 };

        render(
            <BrowserRouter>
                <ProductCard product={product} addToCart={() => {}}/>
            </BrowserRouter>
        );

        expect(screen.getByText("Test")).toBeDefined();
        expect(screen.getByText("100 ₴")).toBeDefined();
        expect(screen.getByText("Подробнее")).toBeDefined();
    });
});
