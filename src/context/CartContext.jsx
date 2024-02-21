import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
})

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { item, quantity }])
        } else {
            console.log('El item ya está en el carrito')
        }
    }

    const removeItem = (itemId) => {
        setCart(cart.filter((item) => item.item.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.item.id === id)
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>
}

export default CartProvider
