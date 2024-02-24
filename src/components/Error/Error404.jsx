import { Link } from 'react-router-dom'

function Error404() {
    return (
        <div className="error404-container">
            <div className="error-code">404</div>
            <div className="error-message">Página no encontrada</div>
            <Link to="/" className="home-link">
                Volver al inicio
            </Link>
        </div>
    )
}

export default Error404
