import cart from './../assets/carrito-de-compras.png'

function CartWidget ({label}){
    return (
        <div>
            <img src={cart} alt="cart-widget"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget