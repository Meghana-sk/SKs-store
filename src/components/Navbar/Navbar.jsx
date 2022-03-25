import "./navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <h1 className="brand-name">SK's</h1>
            </Link>
            <div className="search-box">
                <input type="search" name="search" placeholder="search ..." />
                <i className="fas fa-search search-btn"></i>
            </div>
            <div className="open-menu"><i className="fas fa-bars"></i></div>
            <ul className="main-menu text-s fw-600">
                <li><Link to="/products">Men</Link></li>
                <li><Link to="/products">Women</Link></li>
                <li><Link to="/products">Accessories</Link></li>
                <li>
                    <Link to="/login">
                        <button className="btn btn-primary login-btn">Login</button>
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist">
                        <i className="fas fa-heart"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-cart-plus"></i>
                    </Link>
                </li>
                <div className="close-menu"><i className="fa fa-times"></i></div>
                <span className="socials">
                <li>
                    <a href="https://www.instagram.com/meghanaask/"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/meghana__sk"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://github.com/Meghana-sk"><i className="fab fa-github"></i></a>
                </li>
                </span>
            </ul>
        </nav>
    );
}