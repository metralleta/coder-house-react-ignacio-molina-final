import { useState } from 'react'

/* Componente que muestra un contador y un botón para agregar al carrito
 * Props:
 * - stock: cantidad máxima de productos disponibles
 * - initial: cantidad inicial de productos
 * - onAdd: función que se ejecuta al hacer click en el botón de agregar al carrito
 */

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    // Sumo uno al contador
    const addCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    // Resto uno al contador
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
