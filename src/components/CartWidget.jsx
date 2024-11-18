import carrito from './../assets/carrito-de-compras.png'
import { useContext} from 'react'
import { cartContext } from '../context/cartContext'

function CartWidget ({label}){
    const {getQuantity} = useContext(cartContext)

    return (
        <div>
            <img src={carrito} alt="cart-widget"/>
            <p>{getQuantity()}</p>
        </div>
    )
}

export default CartWidget