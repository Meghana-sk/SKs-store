import "./card.css";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";

export const Card = (props) => {
  const { title, subtitle, price, imgSrc, rating } = props;
  const { addItemToCart, cartState } = useCart();
  const { cart } = cartState;
  const { addItemToWishlist, wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  const { authState } = useAuth();
  const navigate = useNavigate();

  const productInCart = (productId) => {
    let productExists = cart.findIndex((item) => item._id === productId);
    return productExists === -1 ? "Add to cart" : "Go to cart";
  };

  const addToCartHandler = (props) => {
    if (authState.token && productInCart(props._id) === "Add to cart") {
      addItemToCart(props);
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
    if (authState.token && productInWishlist(product._id)) {
      addItemToWishlist(product);
    } else if (!authState.token && productInWishlist(product._id))
      navigate("/login");
    else if (!productInWishlist(product._id) && authState.token) {
      navigate("/wishlist");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h6 className="card-badge">NEW</h6>
          <div className="wishlist">
            <i
              className="far fa-heart"
              onClick={() => addToWishlistHandler(props)}
            ></i>
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
            {productInCart(props._id)}
          </button>
        </div>
      </div>
    </>
  );
};
