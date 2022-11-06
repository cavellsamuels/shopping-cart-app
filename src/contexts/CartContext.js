import { createContext, useState } from "react";
import { productsArray } from "../productStore";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteAllCartItems: () => { },
    getTotalCost: () => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        cartProducts.find(product => product.id === id)?.quantity;

        if(quantity === undefined) {
            return 0;
        };

        return quantity;
    }

    function addItemToCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id
                    ? {...product, quantity: product.quantity} 
                    : product
                )
            )
        }
    }

    function deleteAllCartItems(id) {
        
    }

    const contextValue = {
        items: [],
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteAllCartItems,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}