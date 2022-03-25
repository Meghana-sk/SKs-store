import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
    const [ productCategories, setProductCategories] = useState([]);
    const getProductCategories = async() => {
        try {
            const productsData = await axios.get("/api/categories");
            setProductCategories(productsData.data.categories);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProductCategories()
    }, [])
    return (
        <div>
            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-content">
                            <h1 className="highlight-text text-xl fw-900">CLEARANCE SALE</h1>
                            <h3 className="fw-600">20th FEB - 2nd MAR</h3>
                            <Link to="/products">
                                <button className="btn btn-primary text-s">SHOP NOW</button>
                            </Link>
                            <h1 className="fw-600 text-l">40-70% OFF</h1>
                        </div>
                    </div>
                </section>

                <section className="featured">
                    <h2>Featured categories</h2>
                    <div className="featured-container fw-900">
                        { productCategories.map(({ categoryName }) => 
                            (
                                <Link to="/products">
                                    <div className="category cat-one">{ categoryName }</div>
                                </Link>
                            )) }
                    </div>
                </section>
            </main>
        </div>
    );
}

export { Home };