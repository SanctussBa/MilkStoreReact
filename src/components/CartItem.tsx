import { useDataContext } from "../context/DataContext";
import milkImg from "../milk.jpg";
import { ImCross } from "react-icons/im";

type CartItemProps = {
  id: string;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { listOfProducts, removeFromCart } = useDataContext();

  const item = listOfProducts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cart-item-container">
        <div className="item-img-container">
          <img className="item-img" src={milkImg} alt="Milk-img" />
        </div>
        <div className="flex-column cart-left">
            <div className="flex-row cart-left-top">
                <h3>{item.name}</h3>
                <button onClick={() => removeFromCart(item.id)} className="remove-button"><ImCross /></button>

            </div>
            <div className="flex-row cart-left-bottom">
                <p>{item.type}</p>
                <p><span className="span-quantity">{quantity}</span> liters</p>
            </div>

        </div>
      
    </div>
  );
};

export default CartItem;
