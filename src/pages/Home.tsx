import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1 className="home-text-title">
          Vegan Milks!
        </h1>
        <p className="home-text-content">
          Woah, what a massive selection of vegan milks! Browse through our huge
          range of non-dairy milks, including: oat, coconut, soya, almond, hemp,
          cashew, rice, hazelnut and pea milks. Giving up dairy has never been
          easier!
        </p>
        <Link className="add-to-cart-button link-shop-now" to="/milk-products">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Home;
