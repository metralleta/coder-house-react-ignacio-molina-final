import cartIcon from '../../assets/icons/cart_x96.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartWidget() {
    const { cart } = useContext(CartContext)

    return (
        <div className="widget">
            <Link to="/cart">
                <img src={cartIcon} alt="Cart Icon" width={45} height={45} />
                {cart.length === 0 ? null : <span>{cart.length}</span>}
            </Link>
        </div>
    )
}

export default CartWidget
