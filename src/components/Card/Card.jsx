import "./card.css";
import { useState } from "react";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export const Card = (props) => {
  const { title, subtitle, price, imgSrc, rating } = props;
  const { addItemToCart, cartState } = useCart();
  const { cart } = cartState;
  const { addItemToWishlist, deleteItemFromWishlist, wishlistState } =
    useWishlist();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const navigate = useNavigate();
  const [wishlistBtnDisabled, setWishlistBtnDisabled] = useState(false);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

  const productInCart = (productId) => {
    let productExists = cart.findIndex((item) => item._id === productId);
    return productExists === -1 ? "Add to cart" : "Go to cart";
  };

  const addToCartHandler = (props) => {
    if (authState.token && productInCart(props._id) === "Add to cart") {
      setAddBtnDisabled(true);
      addItemToCart(props, setAddBtnDisabled);
    } else if (productInCart(props._id) === "Add to cart" && !authState.token)
      navigate("/login");
    else if (productInCart(props._id) === "Go to cart" && authState.token) {
      navigate("/cart");
    }
  };

  const productInWishlist = (productId) => {
    let productExists = wishlist.length
      ? wishlist.findIndex((item) => item._id === productId)
      : -1;
    return productExists === -1;
  };

  const addToWishlistHandler = (product) => {
    if (authState.token) {
      if (!productInWishlist(product._id)) {
        deleteItemFromWishlist(product);
      } else {
        setWishlistBtnDisabled(true);
        addItemToWishlist(product, setWishlistBtnDisabled);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="card-badge">NEW</h6>
          <button
            className="wishlist"
            disabled={wishlistBtnDisabled}
            onClick={() => {
              addToWishlistHandler(props);
            }}
          >
            <i
              className={`fa fa-heart ${
                productInWishlist(props._id)
                  ? "wishlist-icon"
                  : "wishlist-icon-clicked"
              }`}
            ></i>
          </button>
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
            disabled={addBtnDisabled}
            onClick={() => {
              addToCartHandler(props);
            }}
          >
            <i className="fas fa-cart-plus cart-icon"></i>
            {productInCart(props._id)}
          </button>
        </div>
      </div>
    </>
  );
};
