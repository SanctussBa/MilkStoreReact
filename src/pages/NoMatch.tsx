import { Link } from "react-router-dom"

const NoMatch = () => {
    return (
        <div className="cart-item-container flex-column center align-center">
            <h1>404 Not found</h1>
            <Link to={"/"}>
                <p className="add-to-cart-button">Go to Homepage</p>
            </Link>
            
        </div>
        
    )
}

export default NoMatch