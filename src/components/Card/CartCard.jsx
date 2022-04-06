import "./card.css";
import { useCart } from "../../context/cart-context";
import { useState } from "react";
export const CartCard = (props) => {
  const { title, subtitle, price, imgSrc, rating, _id, qty } = props;
  const { updateProductQty, deleteItemFromCart } = useCart();
  const [addBtnDisabled, setDisabled] = useState(false);
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
          <button className="btn btn-primary">
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
