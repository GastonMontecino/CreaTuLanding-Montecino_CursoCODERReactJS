import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)



export const getProductos = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"))
    const items = []
querySnapshot.forEach((doc) => {
  items.push(doc.data())
})
return items
} 




export const getCategoryProducts = async (cat) => {
  const q = query(collection(db, "productos"), where("categoria", "==", cat));
  const items = []

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  items.push(doc.data())
})
return items
}