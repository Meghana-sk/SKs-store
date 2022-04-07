import "./home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useProductFilter } from "../../context/productFilter-context";
import { CATEGORIES, CLEAR_FILTERS } from "../../shared/types";

const Home = () => {
  const [productCategories, setProductCategories] = useState([]);
  const { filterDispatch } = useProductFilter();

  const handleCategoryClick = (categoryName) => {
    console.log(categoryName.toLowerCase());
    filterDispatch({ type: CLEAR_FILTERS });
    filterDispatch({
      type: CATEGORIES,
      payload: {
        categoryName: categoryName.toLowerCase(),
        isSelected: true,
      },
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const catgeroiesData = await axios.get("/api/categories");
        if (catgeroiesData.status === 200)
          setProductCategories(catgeroiesData.data.categories);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
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
            {productCategories.map(({ categoryName, imgSrc }) => (
              <Link
                to="/products"
                onClick={() => handleCategoryClick(categoryName)}
              >
                <div className="category cat-one">
                  <img
                    src={imgSrc}
                    alt={categoryName}
                    className="category-img"
                  />
                  <span className="category-name">{categoryName}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export { Home };
