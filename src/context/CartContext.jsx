import { useEffect } from "react";
import { createContext, useState } from "react";

 export const addCartItem = (cartItems, productToAdd) => {
    // search if an item is already added to cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // if the product is already added, increment quantity by 1.
    // if not added just return the original cart item
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setisCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}