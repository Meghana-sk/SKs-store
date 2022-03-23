import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="./index.html">
                <h1 className="brand-name">SK's</h1>
            </a>
            <div className="search-box">
                <input type="search" name="search" placeholder="search ..." />
                <i className="fas fa-search search-btn"></i>
            </div>
            <div className="open-menu"><i className="fas fa-bars"></i></div>
            <ul className="main-menu text-s fw-600">
                <li><a href="./pages/products/products.html">Men</a></li>
                <li><a href="./pages/products/products.html">Women</a></li>
                <li><a href="./pages/products/products.html">Accessories</a></li>
                <li>
                    <a href="./pages/authentication/login.html">
                        <button className="btn btn-primary login-btn">Login</button>
                    </a>
                </li>
                <li>
                    <a href="./pages/cart-mgmt/wishlist.html"><i className="fas fa-heart"></i></a>
                </li>
                <li>
                    <a href="./pages/cart-mgmt/cart.html"><i className="fas fa-cart-plus"></i></a>
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

export default Navbar;