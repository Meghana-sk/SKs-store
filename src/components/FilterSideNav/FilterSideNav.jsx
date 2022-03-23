import "./filter.css";

const FilterSideNav = () => {
    return (
        <>
            <aside className="prod-filters">
                <div className="filter-header">
                    <h4 className="section-heading">FILTERS</h4>
                    <button className="btn btn-secondary-text text-s">Clear</button>
                </div>
                <div className="separator"></div>
                <h5 className="section-heading">Price range(Rs)</h5>
                <div className="slider-container">
                    <input id="slide" type="range" min="100" max="2000" step="100" value="500" className="slider" />
                    <div className="slider-range-value">
                        <p id="slider-min">100</p>
                        <p id="slider-current">500</p>
                        <p id="slider-max">2000</p>
                    </div>
                </div>
                <div className="separator"></div>
                <h5 className="section-heading">Sort price by</h5>
                <ul>
                    <li>
                        <input type="radio" name="price" id="price-range-1" /><label> Low to High</label>
                    </li>
                    <li>
                        <input type="radio" name="price" id="price-range-2" /><label> High to low</label>
                    </li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Ratings ⭐</h5>
                <ul>
                    <li><input type="radio" name="rating" id="rating" /> 4 & above</li>
                    <li><input type="radio" name="rating" id="rating" /> 3 & above</li>
                    <li><input type="radio" name="rating" id="rating" /> 2 & above</li>
                    <li><input type="radio" name="rating" id="rating" /> 1 & above</li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Categories</h5>
                <ul>
                    <li>
                        <input type="checkbox" name="category-1" id="category-1" /> Caps
                    </li>
                    <li>
                        <input type="checkbox" name="category-2" id="category-2" /> Glasses
                    </li>
                    <li>
                        <input type="checkbox" name="category-3" id="category-3" /> Shoes
                    </li>
                    <li>
                        <input type="checkbox" name="category-3" id="category-4" /> Party wear
                    </li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Brands</h5>
                <ul>
                    <li><input type="checkbox" name="brand-1" id="brand-1" /> Adidas</li>
                    <li><input type="checkbox" name="brand-2" id="brand-2" /> H&M</li>
                    <li><input type="checkbox" name="brand-3" id="brand-3" /> Ray Ban</li>
                    <li><input type="checkbox" name="brand-3" id="brand-4" /> Nike</li>
                </ul>
                <div className="separator"></div>
            </aside>
        </>
    );
}

export default FilterSideNav;