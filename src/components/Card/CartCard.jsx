import "./card.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";

export const CartCard = (props) => {
  const { title, subtitle, price, imgSrc, rating, _id, qty } = props;
  const { updateProductQty, deleteItemFromCart } = useCart();
  const { addItemToWishlist, wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  const [addBtnDisabled, setDisabled] = useState(false);
  const { authState } = useAuth();
  const navigate = useNavigate();

  const productInWishlist = (productId) => {
    let productExists = wishlist.length
      ? wishlist.findIndex((item) => item._id === productId)
      : -1;
    return productExists === -1;
  };

  const addToWishlistHandler = (product) => {
    if (authState.token && productInWishlist(product._id)) {
      addItemToWishlist(product);
    } else if (!authState.token && productInWishlist(product._id)) {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="card card-horizontal">
        <div className="card-header">
          <img src={imgSrc} alt="product" className="card-img" />
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <div className="card-quantity">
            <button
              className={`btn btn-secondary-outline btn-small qty-btn ${
                qty <= 1 ? "btn-disabled" : null
              }`}
              onClick={() => {
                setDisabled(true);
                updateProductQty(_id, "decrement", setDisabled);
              }}
              disabled={addBtnDisabled}
            >
              -
            </button>
            <p>{qty >= 1 ? qty : ""}</p>
            <button
              className="btn btn-secondary-outline btn-small qty-btn"
              onClick={() => {
                updateProductQty(_id, "increment", setDisabled);
              }}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToWishlistHandler(props);
              deleteItemFromCart(props);
            }}
          >
            <i className="fas fa-cart-plus"></i>Move to wishlist
          </button>
          <button
            className="btn btn-secondary-outline"
            onClick={() => {
              deleteItemFromCart(props);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
