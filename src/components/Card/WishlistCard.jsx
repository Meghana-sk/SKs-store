import "./card.css";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";

export const WishlistCard = (product) => {
  const { title, subtitle, price, imgSrc, rating, _id } = product;
  const { deleteItemFromWishlist } = useWishlist();
  const { authState } = useAuth();
  const { cartState, addItemToCart } = useCart();
  const { cart } = cartState;
  const navigate = useNavigate();
  const productInCart = (productId) => {
    let productExists = cart.findIndex((item) => item._id === productId);
    return productExists === -1;
  };
  const addToCartHandler = (props) => {
    if (authState.token && productInCart(props._id)) {
      addItemToCart(props);
    } else if (productInCart(props._id) && !authState.token) navigate("/login");
  };
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="card-badge">NEW</h6>
          <div
            className="wishlist"
            onClick={() => {
              deleteItemFromWishlist({ _id });
            }}
          >
            <i className="fas fa-times"></i>
          </div>
          <img src={imgSrc} alt="product" className="card-img" />
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          <div className="card-pricing">
            <p>Rs {price}</p>
            <p>{rating} ⭐</p>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCartHandler(product);
              deleteItemFromWishlist({ _id });
            }}
          >
            <i className="fas fa-cart-plus"></i>
            Move to cart
          </button>
        </div>
      </div>
    </>
  );
};
