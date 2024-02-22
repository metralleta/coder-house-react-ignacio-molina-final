import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Spinner/Spinner'

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        const fetchItem = async () => {
            setLoading(true)
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${itemId}`)
                const data = await response.json()
                setItem(data)
            } catch (error) {
                console.log('Error al obtener los detalles del producto: ', error)
            } finally {
                setLoading(false)
            }   
        }

        fetchItem()
    }, [itemId])

    return (

        <div className="detail-container">
            {loading ? <Spinner /> : <ItemDetail itemDetail={item} />}
        </div>
    )
}

export default ItemDetailContainer
