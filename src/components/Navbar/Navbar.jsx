import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import {
  LOGOUT,
  CLEAR_CART,
  CLEAR_WISHLIST,
  SEARCH_FILTER,
} from "../../shared/types";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useProductFilter } from "../../context/productFilter-context";

export const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { filterDispatch } = useProductFilter();
  const navigate = useNavigate();
  const location = useLocation();
  const userName = authState.token ? authState.user.firstName : "";

  const logoutHandler = () => {
    navigate("/");
    cartDispatch({ type: CLEAR_CART });
    wishlistDispatch({ type: CLEAR_WISHLIST });
    localStorage.removeItem("userAuthToken");
    localStorage.removeItem("user");
    authDispatch({ type: LOGOUT });
  };

  const loginBtnHandler = () => {
    if (authState.token) {
      logoutHandler();
    }
  };

  return (
    <nav className="nav">
      <Link to="/">
        <h1 className="brand-name text-m">SK's</h1>
      </Link>
      {location.pathname === "/products" ? (
        <div className="search-box">
          <input
            type="search"
            name="search"
            placeholder="search ..."
            onChange={(event) =>
              filterDispatch({
                type: SEARCH_FILTER,
                payload: { search: event.target.value },
              })
            }
          />
          <i className="fas fa-search search-btn"></i>
        </div>
      ) : null}
      <ul className="main-menu text-s fw-600">
        {authState.token && (
          <li>
            <p>{`Hi ${userName}`}</p>
          </li>
        )}
        <li>
          <Link to={authState.token ? "/logout" : "/login"}>
            <button
              className="btn btn-primary login-btn"
              onClick={loginBtnHandler}
            >
              {authState.token ? "Logout" : "Login"}
            </button>
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <div className="badge-container">
              <i className="fas fa-heart fa-2x"></i>
              {wishlistState.wishlist.length ? (
                <span className="badge badge-icon">
                  {wishlistState.wishlist.length}
                </span>
              ) : null}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="badge-container">
              <i className="fas fa-cart-plus fa-2x"></i>
              {cartState.cart.length ? (
                <span className="badge badge-icon">
                  {cartState.cart.length}
                </span>
              ) : null}
            </div>
          </Link>
        </li>
        <div className="close-menu">
          <i className="fa fa-times"></i>
        </div>
        <span className="socials">
          <li>
            <a href="https://www.instagram.com/meghanaask/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/meghana__sk">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Meghana-sk">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
};
