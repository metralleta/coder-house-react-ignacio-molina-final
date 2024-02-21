import { Link } from 'react-router-dom'

function Item({ itemDetail }) {
    return (
        <div className="item">
            <h3>{itemDetail.title}</h3>
            <img src={itemDetail.image} alt={itemDetail.title} />
            <p>{itemDetail.price}</p>
            <Link className="button-cart" to={`/item/${itemDetail.id}`}>
                Ver detalles
            </Link>
        </div>
    )
}

export default Item
