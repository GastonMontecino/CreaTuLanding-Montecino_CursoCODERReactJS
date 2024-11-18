import { getFirestore, collection, getDocs } from "firebase/firestore"
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