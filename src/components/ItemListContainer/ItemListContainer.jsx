import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams() // Obtener categoryId de la URL

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
            try {
                let url = 'https://fakestoreapi.com/products'
                if (categoryId) {
                    url += `/category/${categoryId}`
                }
                const response = await fetch(url)
                const data = await response.json()
                setItems(data)
            } catch (error) {
                console.log('Error en el fetch a la API: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [categoryId]) // Añadir categoryId como dependencia del useEffect

    return (
        <section>
            {loading ? <Spinner /> : <ItemList items={items} />}
        </section>
    )
}

export default ItemListContainer
