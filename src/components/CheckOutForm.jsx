import { createOrder } from "../firebase/db"


function CheckOut (){
    const ordenDeCompra = createOrder(order)

    return(
        <>
          <h2>Muchas gracias por su compra!</h2>
        <p>{ordenDeCompra}</p>  
        </>
        
    )
}

export default CheckOut