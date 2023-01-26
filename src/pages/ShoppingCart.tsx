import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDataContext } from "../context/DataContext";

const ShoppingCart = () => {
  const { cart } = useDataContext();

  const totalLiters = cart.reduce((n, { quantity }) => n + quantity, 0);

  return (
    <div className="main-cart-container">
      <div className="store-header">
        <h1>Your Order</h1>
      </div>

      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      {totalLiters > 0 ? (
        <>
          <h3>
            Total amount of liters:{" "}
            <span className="total-liters">{totalLiters}</span>
          </h3>
          <button className="add-to-cart-button">Buy</button>
        </>
      ) : (
        <div className="cart-empty-container">
          <h3> Your cart is empty </h3>
          <Link to={"/milk-products"}>
            <button className="add-to-cart-button">Go shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;