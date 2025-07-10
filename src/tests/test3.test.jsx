import { describe, it, expect } from "vitest";
import { cartReducer, initialCart } from "../modules/reducers/cartReducer.jsx";

const sampleProduct = { id: 1, name: "Товар", price: 100 };

describe("cartReducer", () => {
    it("добавляет новый товар в корзину", () => {
        const action = { type: "ADD", product: sampleProduct };
        const result = cartReducer(initialCart, action);

        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({ ...sampleProduct, quantity: 1 });
    });

    it("увеличивает количество, если товар уже есть", () => {
        const state = [{ ...sampleProduct, quantity: 1 }];
        const action = { type: "ADD", product: sampleProduct };
        const result = cartReducer(state, action);

        expect(result).toHaveLength(1);
        expect(result[0].quantity).toBe(2);
    });

    it("удаляет товар по id", () => {
        const state = [{ ...sampleProduct, quantity: 1 }];
        const action = { type: "REMOVE", id: 1 };
        const result = cartReducer(state, action);

        expect(result).toHaveLength(0);
    });

    it("уменьшает количество товара", () => {
        const state = [{ ...sampleProduct, quantity: 2 }];
        const action = { type: "DECREASE", id: 1 };
        const result = cartReducer(state, action);

        expect(result[0].quantity).toBe(1);
    });

    it("удаляет товар при уменьшении до 0", () => {
        const state = [{ ...sampleProduct, quantity: 1 }];
        const action = { type: "DECREASE", id: 1 };
        const result = cartReducer(state, action);

        expect(result).toHaveLength(0);
    });

    it("очищает корзину", () => {
        const state = [
            { id: 1, name: "A", quantity: 1 },
            { id: 2, name: "B", quantity: 2 }
        ];
        const action = { type: "CLEAR" };
        const result = cartReducer(state, action);

        expect(result).toEqual([]);
    });
});
