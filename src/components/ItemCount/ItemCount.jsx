import { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    // Sumo uno al contador de items
    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    // Resto uno al contador de items
    const removeCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="counter">
            <button onClick={removeCount}>-</button>
            <p>{count}</p>
            <button onClick={addCount}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
