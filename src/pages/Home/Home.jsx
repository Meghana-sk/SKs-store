import "./home.css"

const Home = () => {
    return (
        <div>
            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <h1 className="highlight-text text-xl fw-900">CLEARANCE SALE</h1>
                            <h3 className="fw-600">20th FEB - 2nd MAR</h3>
                            <a href="./pages/products/products.html" className="fw-600">
                                <button className="btn btn-primary text-s">SHOP NOW</button>
                                </a>
                            <h1 className="fw-600 text-l">40-70% OFF</h1>
                        </div>
                    </div>
                </section>

                <section className="featured">
                    <h2>Featured categories</h2>
                    <div className="featured-container fw-900">
                        <a href="./pages/products/products.html">
                            <div className="category cat-one">Caps</div>
                        </a>
                        <a href="./pages/products/products.html">
                            <div className="category cat-two">Glasses</div>
                        </a>
                        <a href="./pages/products/products.html">
                            <div className="category cat-three">Shoes</div>
                        </a>
                        <a href="./pages/products/products.html">
                            <div className="category cat-four">Party wear</div>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;