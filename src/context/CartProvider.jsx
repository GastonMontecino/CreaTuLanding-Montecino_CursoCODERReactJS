import {cartContext} from './cartContext'
import {useState} from 'react'

function CartProvider ({ children }) {
    const [cart, setCart] = useState ([])

    const addToCart = item => {
        const productInCart = cart.find(cartItem => cartItem.id === item.id)
        if (productInCart) {
            // Si el producto ya está en el carrito, incrementar la cantidad (qty)
            setCart(
              cart.map(cartItem =>
                cartItem.id === item.id
                  ? { ...cartItem, qty: cartItem.qty + item.qty }  // Incrementar qty
                  : cartItem
              )
            )
        } else {
            // Si el producto no está en el carrito, agregarlo con qty = 1
            setCart([...cart, { ...item, qty: item.qty }]);
          }
        }
    

    const getQuantity = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
        
    }
    const getTotal = () => {
        const priceOnly = cart.map(item => item.precio*item.qty)
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        return total
        
    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <cartContext.Provider value={{cart, addToCart, getQuantity, getTotal, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider