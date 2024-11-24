import { useContext} from 'react'
import { cartContext } from '../context/cartContext'
import {createOrder} from './../firebase/db'
import { serverTimestamp } from 'firebase/firestore'



function Cart (){
const { cart, getTotal } = useContext (cartContext)
    console.log(cart)

    const handleSubmit = (e) => {
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
        createOrder(order)
    }

    return (
        <>
            <div>
                {cart.map(prod=> (<div><img src={prod.imagen} alt={prod.nombre} /><p>{prod.nombre}x{prod.qty}{prod.descripcion}</p></div>))}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='name' requiered/>
                    <input type="email" placeholder='escriba su @ email' requiered/>
                    <input type="text"  placeholder='telefono' requiered/>
                    <button type="submit">Finalizar compra</button>

                </form>
            </div>  
        </>      
    )
}


export default Cart