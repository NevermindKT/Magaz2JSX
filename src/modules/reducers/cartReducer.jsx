export const initialCart = [];

export function cartReducer(state, action) {
    switch (action.type) {
        case "ADD": {
        const existing = state.find(item => item.id === action.product.id);
            if (existing) {
                return state.map(item =>
                    item.id === action.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.product, quantity: 1 }];
        }

        case "REMOVE":
            return state.filter(item => item.id !== action.id);

        case "DECREASE":
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);

        case "CLEAR":
            return [];

        default:
            return state;
    }
}