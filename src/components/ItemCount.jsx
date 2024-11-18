import { useState, useContext } from "react"
import { cartContext } from './../context/cartContext'

function ItemCount ({detail}){
    const [count, setCount] = useState (0)
    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    const { addToCart} = useContext(cartContext)

    const handleAddToCart = () => addToCart({...detail, qty: count})

    return(
    <>
        <p>{count}</p>
        <button onClick={handleSub}>-</button>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
        <button onClick={handleAdd}>+</button>
    </>
    )
}

export default ItemCount