import "./filter.css";
import { useProductFilter } from "../../context/productFilter-context";
import {
  HIGH_TO_LOW,
  LOW_TO_HIGH,
  RATING,
  CATEGORIES,
  BRANDS,
  GENDER_SELECT,
  PRICE_RANGE_FILTER,
  CLEAR_FILTERS,
} from "../../shared/types";

export const FilterSideNav = () => {
  const { filterState, filterDispatch } = useProductFilter();
  const { sortBy, rating, priceRange } = filterState;
  return (
    <>
      <aside className="prod-filters">
        <div className="filter-header">
          <h4 className="section-heading">FILTERS</h4>
          <button
            className="btn btn-secondary-text text-s"
            onClick={() => filterDispatch({ type: CLEAR_FILTERS })}
          >
            Clear
          </button>
        </div>
        <div className="separator"></div>
        <h5 className="section-heading">Price range(Rs) {priceRange}</h5>
        <div className="slider-container">
          <input
            id="slide"
            type="range"
            min="0"
            max="10000"
            defaultValue={priceRange}
            className="slider"
            checked={filterState.priceRange}
            onChange={(event) =>
              filterDispatch({
                type: PRICE_RANGE_FILTER,
                payload: { priceRange: event.target.value },
              })
            }
          />
          <div className="slider-range-value">
            <p id="slider-min">0</p>
            <p id="slider-max">10000</p>
          </div>
        </div>
        <div className="separator"></div>
        <h5 className="section-heading">Sort price by</h5>
        <ul>
          <li>
            <input
              type="radio"
              name="price"
              id="sort-low-to-high"
              checked={sortBy === "LOW_TO_HIGH"}
              onChange={() => filterDispatch({ type: LOW_TO_HIGH })}
            />
            <label htmlFor="sort-low-to-high"> Low to High</label>
          </li>
          <li>
            <input
              type="radio"
              name="price"
              id="sort-high-to-low"
              checked={sortBy === "HIGH_TO_LOW"}
              onChange={() => filterDispatch({ type: HIGH_TO_LOW })}
            />
            <label htmlFor="sort-high-to-low"> High to low</label>
          </li>
        </ul>
        <div className="separator"></div>
        <h5 className="section-heading">Ratings ⭐</h5>
        <ul>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating-4"
              checked={rating === "4"}
              onChange={() =>
                filterDispatch({ type: RATING, payload: { rating: "4" } })
              }
            />
            <label htmlFor="rating-4"> 4 & above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating-3"
              checked={rating === "3"}
              onChange={() =>
                filterDispatch({ type: RATING, payload: { rating: "3" } })
              }
            />
            <label htmlFor="rating-3"> 3 & above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating-2"
              checked={rating === "2"}
              onChange={() =>
                filterDispatch({ type: RATING, payload: { rating: "2" } })
              }
            />
            <label htmlFor="rating-2"> 2 & above</label>
          </li>
          <li>
            <input
              type="radio"
              name="rating"
              id="rating-1"
              checked={rating === "1"}
              onChange={() =>
                filterDispatch({ type: RATING, payload: { rating: "1" } })
              }
            />
            <label htmlFor="rating-1"> 1 & above</label>
          </li>
        </ul>
        <div className="separator"></div>
        <h5 className="section-heading">Categories</h5>
        <ul>
          <li>
            <input
              type="checkbox"
              name="category-1"
              id="category-1"
              checked={filterState.categories.includes("caps")}
              onChange={(e) =>
                filterDispatch({
                  type: CATEGORIES,
                  payload: {
                    categoryName: "caps",
                    isSelected: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor="category-1"> Caps</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category-2"
              id="category-2"
              checked={filterState.categories.includes("glasses")}
              onChange={(e) =>
                filterDispatch({
                  type: CATEGORIES,
                  payload: {
                    categoryName: "glasses",
                    isSelected: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor="category-2"> Glasses</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="category-3"
              id="category-3"
              checked={filterState.categories.includes("shoes")}
              onChange={(e) =>
                filterDispatch({
                  type: CATEGORIES,
                  payload: {
                    categoryName: "shoes",
                    isSelected: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor="category-3"> Shoes</label>
          </li>
        </ul>
        <div className="separator"></div>
        <h5 className="section-heading">Brands</h5>
        <ul>
          <li>
            <input
              type="checkbox"
              name="brand-1"
              id="brand-1"
              checked={filterState.brands.includes("Adidas")}
              onChange={(e) =>
                filterDispatch({
                  type: BRANDS,
                  payload: { brand: "Adidas", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="brand-1"> Adidas</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="brand-2"
              id="brand-2"
              checked={filterState.brands.includes("H&M")}
              onChange={(e) =>
                filterDispatch({
                  type: BRANDS,
                  payload: { brand: "H&M", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="brand-2"> H&M</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="brand-3"
              id="brand-3"
              checked={filterState.brands.includes("Ray Ban")}
              onChange={(e) =>
                filterDispatch({
                  type: BRANDS,
                  payload: { brand: "Ray Ban", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="brand-3"> Ray Ban</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="brand-3"
              id="brand-4"
              checked={filterState.brands.includes("Nike")}
              onChange={(e) =>
                filterDispatch({
                  type: BRANDS,
                  payload: { brand: "Nike", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="brand-4"> Nike</label>
          </li>
        </ul>
        <div className="separator"></div>
        <h5 className="section-heading">Gender</h5>
        <ul>
          <li>
            <input
              type="checkbox"
              name="men"
              id="men"
              checked={filterState.genderSelect.includes("men")}
              onChange={(e) =>
                filterDispatch({
                  type: GENDER_SELECT,
                  payload: { gender: "men", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="men"> Men</label>
          </li>
          <li>
            <input
              type="checkbox"
              name="women"
              id="women"
              checked={filterState.genderSelect.includes("women")}
              onChange={(e) =>
                filterDispatch({
                  type: GENDER_SELECT,
                  payload: { gender: "women", isSelected: e.target.checked },
                })
              }
            />
            <label htmlFor="women"> Women</label>
          </li>
        </ul>
      </aside>
    </>
  );
};
