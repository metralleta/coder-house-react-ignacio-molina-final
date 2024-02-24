import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)

            const db = getFirestore()

            const itemsCollection = collection(db, 'articulos')

            try {
                let query
                if (categoryId) {
                    query = query(itemsCollection, where('category', '==', categoryId))
                } else {
                    query = query(itemsCollection)
                }
                const querySnapshot = await getDocs(q)
                const itemsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItems(itemsArray)
            } catch (error) {
                console.log('Error al consultar Firestore: ', error)
                // TODO: Mostrar mensaje de error al usuario en un componente Error
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [categoryId])

    return <section>{loading ? <Spinner /> : <ItemList items={items} />}</section>
}

export default ItemListContainer
