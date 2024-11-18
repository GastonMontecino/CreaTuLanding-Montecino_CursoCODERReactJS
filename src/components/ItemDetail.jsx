import ItemCount from "./ItemCount"

function ItemDetail ({detail}) {
    if (!detail) {
        return <div>Cargando...</div>
    }
    return(
        <div>
            <img src={detail.imagen} alt={detail.nombre} />
            <h1>{detail.nombre}</h1>
            <p>{detail.descripcion}</p>
            <ItemCount detail={detail}/>
        </div>
    )
}

export default ItemDetail