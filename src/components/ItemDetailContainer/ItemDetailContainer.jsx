import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    const navigate = useNavigate()

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
                    navigate('/404')
                }
            } catch (error) {
                navigate('/404')
            } finally {
                setLoading(false)
            }
        }

        fetchItem()
    }, [itemId, navigate])

    return <div className="detail-container">{loading ? <Spinner /> : <ItemDetail itemDetail={item} />}</div>
}

export default ItemDetailContainer
