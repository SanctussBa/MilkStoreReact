import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import { RiShoppingCartLine } from "react-icons/ri";

const NavBar = () => {
  const { cleanLocalStorage, cart } = useDataContext();
  return (
    <div className="navbar-container">
      <div>
        <h1 className="navbar-logo">Milky Store</h1>
      </div>
      <div className="navbar-link-container">
        <Link to={"/"}>
          <h3 onClick={cleanLocalStorage} className="navbar-link">
            Home
          </h3>
        </Link>
        <Link to={"/milk-products"}>
          <h3 onClick={cleanLocalStorage} className="navbar-link">
            Our Products
          </h3>
        </Link>
        <Link to={"/about"}>
          <h3 onClick={cleanLocalStorage} className="navbar-link">
            About
          </h3>
        </Link>
        <Link to={"/shopping-cart"} >
          <div className="cart-container">
            <span className="navbar-link cart-icon">
              <RiShoppingCartLine />
            </span>
            {cart.length > 0 && (
              <span className="cart-counter">{cart.length}</span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
