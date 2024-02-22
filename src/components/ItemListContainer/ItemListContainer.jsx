import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
// Importa los módulos necesarios de Firestore
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams() // Obtener categoryId de la URL

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
            const db = getFirestore()
            const itemsCollection = collection(db, 'articulos')
            try {
                let q
                if (categoryId) {
                    q = query(itemsCollection, where('category', '==', categoryId))
                } else {
                    q = query(itemsCollection)
                }
                const querySnapshot = await getDocs(q)
                const itemsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItems(itemsArray)
            } catch (error) {
                console.log('Error al consultar Firestore: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [categoryId]) // Añadir categoryId como dependencia del useEffect

    return <section>{loading ? <Spinner /> : <ItemList items={items} />}</section>
}

export default ItemListContainer
