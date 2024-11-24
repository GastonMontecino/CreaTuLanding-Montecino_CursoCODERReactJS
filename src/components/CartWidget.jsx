import carrito from './../assets/carrito-de-compras.png'
import { useContext} from 'react'
import { cartContext } from '../context/cartContext'
import {Link} from 'react-router-dom'
import  Badge  from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
function CartWidget ({label}){
    const {getQuantity} = useContext(cartContext)

    return (
        <Button as={Link} to='/cart' variant="outline-light">
            <img src={carrito} alt="cart-widget"/>
            <Badge bg="secondary">{getQuantity()}</Badge>
        </Button>
    )
}

export default CartWidget