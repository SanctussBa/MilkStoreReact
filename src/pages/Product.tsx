import { useNavigate, useLocation } from "react-router-dom";
import milkImg from "../milk.jpg";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useState } from "react";
import { useDataContext } from "../context/DataContext";
// import { useDataContext } from "../context/DataContext";

const Product = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const [liter, setLiter] = useState<number>(0);
  const { increaseCartQuantity } = useDataContext();

  const handleLiterCount = (e: any) => {
    e.preventDefault();
    setLiter(e.target.value);
  };
  const goBack = () => {
    navigate(-1);
  };

  const addProduct = (id: string, quantity: number) => {
    var num: number = +quantity;
    increaseCartQuantity(id, num);
  };
  return (
    <div className="product">
      <div className="product-button-container">
        <button className="product-back-button" onClick={goBack}>
          <RiArrowGoBackLine />
        </button>
      </div>
      <div className="product-container">
        <div className="product-img-container">
          <img className="product-img" src={milkImg} alt="Milk-img" />
        </div>
        <div className="product-container-right">
          <div>
            <h2>{product.name} </h2>
            <h3 className="product-type">{product.type}</h3>
            <p>{product.storage - liter} liters</p>
          </div>
          <div>
            <input
              type="range"
              min="0"
              max={product.storage}
              onChange={handleLiterCount}
              value={liter}
            />
            <p>
              Order <span className="span-liter">{liter}</span> liters
            </p>
          </div>
          <div className="add-to-cart-button-container">
            <button
              onClick={() => addProduct(product.id, liter)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
