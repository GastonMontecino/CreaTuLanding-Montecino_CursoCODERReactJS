import { useContext, useState} from 'react'
import { cartContext } from '../context/cartContext'
import {createOrder} from './../firebase/db'
import { serverTimestamp } from 'firebase/firestore'




function Cart (){
const { cart, getTotal, clearCart} = useContext (cartContext)
const [isOrderComplete, setIsOrderComplete] = useState(false)
const [orderId, setOrderId] = useState(null)
    console.log(cart)
    const handleClear = () =>{
        clearCart()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const [nombre, email, phone] = form
        // const name = e.form[0].value
        // const mail = e.form[1].value
        // const phone = e.form[2].value

        const order = {
            buyer: {name: nombre.value, email:email.value, phone:phone.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        }
        const orderDocId = await createOrder(order)
        setOrderId(orderDocId) 
        setIsOrderComplete(true)
        clearCart()
        
    }

    return (
        <>
            {isOrderComplete ? (
            <div>
                <h2>Gracias por su compra</h2>
                <p>El número de orden es: {orderId}</p>
            </div>) : 
            (
            <>    
            <div>
                {cart.map(prod=> (<div><img src={prod.imagen} alt={prod.nombre} /><p>{prod.nombre}x{prod.qty}{prod.descripcion}</p></div>))}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='name' required/>
                    <input type="email" placeholder='escriba su @ email' required/>
                    <input type="text"  placeholder='telefono' required/>
                    <button type="submit">Finalizar compra</button>
                    <button onClick={handleClear}> Vaciar carrito</button>

                </form>
            </div>
            </>)}
            
        </>      
    )
}


export default Cart