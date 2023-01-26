import { IProduct } from "../types";
import milkImg from "../milk.jpg";

type ItemProps = {
  product: IProduct;
};
const Item = ({ product }: ItemProps) => {
  return (
    <div className="item-container">
      <div className="item-img-name-container">
        <div className="item-img-container">
          <img className="item-img" src={milkImg} alt="Milk-img" />
        </div>
        <div>
          <h4 className="item-name">{product.name}</h4>
        </div>
      </div>
      <div className="item-info-container">
        <h5>{product.type}</h5>
        <p>{product.storage} liters</p>
      </div>
    </div>
  );
};

export default Item;
