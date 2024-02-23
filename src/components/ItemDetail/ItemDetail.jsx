import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function ItemDetail({ itemDetail }) {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleAdd = (count) => {
        setQuantityAdded(count)

        const item = {
            id: itemDetail.id,
            title: itemDetail.title,
            price: itemDetail.price,
            image: itemDetail.image,
            description: itemDetail.description,
        }

        addItem(item, count)
    }

    return (
        <div className="item-detail">
            <h2>{itemDetail.title}</h2>
            <img src={itemDetail.image} alt={itemDetail.title} />
            <p>u$s {itemDetail.price}</p>
            <p>{itemDetail.description}</p>
            {quantityAdded > 0 ? (
                <Link className="button-cart" to="/cart">
                    Terminar mi compra
                </Link>
            ) : (
                <ItemCount stock={5} initial={1} onAdd={handleAdd} />
            )}
        </div>
    )
}

export default ItemDetail
