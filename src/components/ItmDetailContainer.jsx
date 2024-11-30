import { useState , useEffect } from 'react'
import productos from './../data/products'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import {getProductos} from './../firebase/db'


function ItemDetailContainer (){
    const [detail, setDetail] = useState()
    const {id} = useParams ()

    // const getProductos = () => new Promise ((res, rej) => {
    //     if (productos.length === 0) {
    //         rej("No se han cargado el array productos")
    //     }

    //     setTimeout (() =>{
    //         res(productos)
    //         }, 2000)
    // })

    useEffect( () => { //Otra opcion es traer el documento de firebase con el id, creo una funcion en db.js getDetail y la importo aqui
        getProductos()
        .then(res => {const productDetail = res.find(detail => detail.id === id)
        setDetail(productDetail);
            })
    }, [id])
    return (
        <div>
            <ItemDetail detail={detail}/>
        </div>
     )
}

export default ItemDetailContainer