import { Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './assets/css/app.scss'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
                <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route path="*" element={<h1>404 No se encuentra la página</h1>} />
            </Routes>
        </>
    )
}

export default App
