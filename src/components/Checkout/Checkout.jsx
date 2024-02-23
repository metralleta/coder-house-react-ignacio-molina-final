import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

function Checkout() {
    const { cart, clearCart } = useContext(CartContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [orderId, setOrderId] = useState('')

    const db = getFirestore()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const totalAmount = cart.reduce((acc, item) => acc + item.item.price * item.quantity, 0)

        const order = {
            buyer: {
                name: name,
                email: email,
            },
            items: cart,
            total: totalAmount,
        }

        const ordersCart = collection(db, 'orders')

        try {
            const docRef = await addDoc(ordersCart, order)
            setOrderId(docRef.id)
            clearCart()
            setName('')
            setEmail('')
        } catch (error) {
            console.error('Error adding document: ', error)
        }
    }

    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit} className="checkout-form">
                <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Enviar</button>
            </form>
            <div className="order-id">
                <h3>Order id: {orderId}</h3>
            </div>
        </div>
    )
}
export default Checkout
