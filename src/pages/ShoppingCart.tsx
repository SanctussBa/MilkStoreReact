import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDataContext } from "../context/DataContext";


const ShoppingCart = () => {
  const { cart, sendOrder } = useDataContext();


  const totalLiters = cart.reduce((n, { quantity }) => n + quantity, 0);
  const orderProducts = () => {
    sendOrder();
  };

  return (
    <div className="main-cart-container">
      <div className="store-header">
        <h1>Your Order</h1>
      </div>

      {cart.map((item) => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}

      {totalLiters > 0 ? (
        <>
          <h3>
            Total amount of liters:{" "}
            <span className="total-liters">{totalLiters}</span>
          </h3>
          <Link to={"/checkout"}>
            <button onClick={orderProducts} className="add-to-cart-button">
              Buy
            </button>
          </Link>
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
