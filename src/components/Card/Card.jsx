import "./card.css";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Card = (props) => {
  const { title, subtitle, price, imgSrc, rating } = props;
  const { addItemToCart, cartState } = useCart();
  const { cart } = cartState;
  const { authState } = useAuth();
  const navigate = useNavigate();
  const [cartCTABtnText, setCartCTABtnText] = useState("Add to cart");
  const productInCart = (productId) => {
    let productExists = cart.findIndex((item) => item._id === productId);
    return productExists === -1;
  };

  const addToCartHandler = (props) => {
    if (
      authState.token &&
      cartCTABtnText === "Add to cart" &&
      productInCart(props._id)
    ) {
      addItemToCart(props);
    } else if (cartCTABtnText !== "Go to cart" && !authState.token)
      navigate("/login");
    else if (cartCTABtnText === "Go to cart" && authState.token) {
      navigate("/cart");
    }
  };

  useEffect(() => {
    productInCart(props._id)
      ? setCartCTABtnText("Add to cart")
      : setCartCTABtnText("Go to cart");
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="card-badge">NEW</h6>
          <div className="wishlist">
            <i className="far fa-heart"></i>
          </div>
          <img src={imgSrc} alt="cap" className="card-img" />
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          <div className="card-pricing">
            <p>Rs.{price}</p>
            <p>{rating} ⭐</p>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCartHandler(props);
            }}
          >
            <i className="fas fa-cart-plus cart-icon"></i>
            {cartCTABtnText}
          </button>
        </div>
      </div>
    </>
  );
};
