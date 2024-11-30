import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore"
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

export const createOrder = async (order)=>{
  try {
  const docRef = await addDoc(collection(db, "orders"), order)
  console.log("Document written with ID: ", docRef.id)
  const idCompra = docRef.id

  return docRef.id
} catch (e) {
  console.error("Error adding document: ", e);
}
}
