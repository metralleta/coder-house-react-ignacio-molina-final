import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { categoryId } = useParams() // Obtener categoryId de la URL

    useEffect(() => {
        const fetchItems = async () => {
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
            }
        }

        fetchItems()
    }, [categoryId]) // Añadir categoryId como dependencia del useEffect

    return (
        <section>
            <ItemList items={items} />
        </section>
    )
}

export default ItemListContainer
