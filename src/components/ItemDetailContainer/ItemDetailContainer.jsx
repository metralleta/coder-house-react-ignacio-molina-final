import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true)
            const db = getFirestore()
            const itemRef = doc(db, 'articulos', itemId)
            try {
                const docSnap = await getDoc(itemRef)
                if (docSnap.exists()) {
                    setItem({ id: docSnap.id, ...docSnap.data() })
                } else {
                    console.log('No se encontró el documento!')
                }
            } catch (error) {
                console.log('Error al obtener los detalles del producto desde Firestore: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchItem()
    }, [itemId])

    return <div className="detail-container">{loading ? <Spinner /> : <ItemDetail itemDetail={item} />}</div>
}

export default ItemDetailContainer
