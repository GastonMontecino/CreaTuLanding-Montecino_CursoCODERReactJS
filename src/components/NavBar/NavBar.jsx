import CartWidget from './../CartWidget/CartWidget'

function NavBar (){
    return (
        <nav>
            <h3>Tienda PHAGO</h3>
            <ul style>
                <li>
                    <a>Servicios</a>
                </li>
                <li>
                    <a>Soluciones informaticas</a>
                </li>
                <li>
                    <a>Insumos</a>
                </li>
                <li>
                    <a>Merchandising</a>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar