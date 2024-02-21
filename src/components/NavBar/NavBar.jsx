import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'

function NavBar() {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Mercadito Las Lechuzas" />
                        </Link>
                    </div>
                    <div className="list-menu">
                        <ul>
                            <li>
                                <Link to="/category/jewelery">Electronics</Link>
                            </li>
                            <li>
                                <Link to="/category/electronics">Jewelery</Link>
                            </li>
                            <li>
                                <Link to="/category/men's clothing">Men's Clothing</Link>
                            </li>
                            <li>
                                <Link to="/category/women's clothing">Women's Clothing</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default NavBar
