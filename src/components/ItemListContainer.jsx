import { useState , useEffect, useContext } from 'react'
import productos from '../data/products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {cartContext} from './../context/cartContext'
import {getProductos, getCategoryProducts} from './../firebase/db'
import Loader from './Loader'


function ItemListContainer (){
    const [items, setItems] = useState([])
    const {cat} = useParams()
    
    const {} = useContext (cartContext)
   
    // const getProductos = () => new Promise ((res, rej) => {
    //     if (productos.length === 0) {
    //         rej("No se han cargado el array productos")
    //     }

    //     setTimeout (() =>{
    //         res(productos)
    //         }, 2000)
    // })

    useEffect( () => {

        if (!cat){
            getProductos()
            .then(res => setItems(res))
    }
        else {
            getCategoryProducts(cat)
            .then(res=> setItems(res))

        }

        
    //     .then(res => {const filteredItems = cat ? res.filter(item => item.categoria === cat) : res
    //     setItems(filteredItems)})
    }, [cat])
    return (
        <div>
            {items.length > 0 ? <ItemList items={items}/> : <Loader/>}
        </div>
     )
}

export default ItemListContainer