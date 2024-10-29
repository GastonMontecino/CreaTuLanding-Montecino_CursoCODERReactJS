import { useState , useEffect } from 'react'
import productos from '../data/products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer (){
    const [items, setItems] = useState([])
    const {cat} = useParams()
    
   
    const getProductos = () => new Promise ((res, rej) => {
        if (productos.length === 0) {
            rej("No se han cargado el array productos")
        }

        setTimeout (() =>{
            res(productos)
            }, 2000)
    })

    useEffect( () => {
        getProductos()
        .then(res => {const filteredItems = cat ? res.filter(item => item.categoria === cat) : res
        setItems(filteredItems)})
    }, [cat])
    return (
        <div>
            <ItemList items={items}/>
        </div>
     )
}

export default ItemListContainer