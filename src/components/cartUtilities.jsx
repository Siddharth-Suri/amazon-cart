import { cartItems } from "../store/ItemCartState";

export function addQuantity(product, setCurrentCart) {
    setCurrentCart((prevCart) => {
        const existingProduct = prevCart[product.id];

        if (existingProduct) {
            return {
                ...prevCart,
                [product.id]: {
                    ...existingProduct,
                    quantity: existingProduct.quantity + 1,
                },
            };
        } else {
            return {
                ...prevCart,
                [product.id]: {
                    ...product,
                    quantity: 1,
                },
            };
        }
    });
}
export function subQuantity(product, setCurrentCart) {
    setCurrentCart((prevCart) => {
        const existingProduct = prevCart[product.id];

        if (existingProduct && product.quantity > 1) {
            return {
                ...prevCart,
                [product.id]: {
                    ...existingProduct,
                    quantity: existingProduct.quantity - 1,
                },
            };
        } else {
            const { [product.id]: _, ...remainingCart } = prevCart;
            return remainingCart;
        }
    });
}
export function updateSumCartAdd(sum, setCurrentSumCart) {
    setCurrentSumCart((prevCart) => prevCart + sum);
}
export function updateSumCartSub(sum, setCurrentSumCart) {
    setCurrentSumCart((prevCart) => prevCart - sum);
}

export function itemCountAdd(setCurrentItemCount) {
    setCurrentItemCount((prevCart) => prevCart + 1);
}
export function itemCountSub(setCurrentItemCount) {
    setCurrentItemCount((prevCart) => prevCart - 1);
}
