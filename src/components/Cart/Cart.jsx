import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

function Cart() {
    const { cart, clearCart, removeItem } = useContext(CartContext)

    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito</h1>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>No hay items en el carrito</p>
                    <Link to="/" className="cart-checkout-link">
                        Volver a la tienda
                    </Link>
                </div>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div className="cart-item" key={item.item.id}>
                            <h3>{item.item.title}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <button onClick={() => removeItem(item.item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="cart-actions">
                        <button onClick={clearCart}>Vaciar carrito</button>
                        <Link to="/checkout" className="button-cart">
                            Terminar compra
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart
