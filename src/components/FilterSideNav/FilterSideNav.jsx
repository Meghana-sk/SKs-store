import "./filter.css";

export const FilterSideNav = () => {
    return (
        <>
            <aside className="prod-filters">
                <div className="filter-header">
                    <h4 className="section-heading">FILTERS</h4>
                    <button className="btn btn-secondary-text text-s">Clear</button>
                </div>
                <div className="separator"></div>
                <h5 className="section-heading">Price range(Rs) {}</h5>
                <div className="slider-container">
                    <input id="slide" type="range" min="0" max="10000"/>
                    <div className="slider-range-value">
                        <p id="slider-min">0</p>
                        <p id="slider-max">10000</p>
                    </div>
                </div>
                <div className="separator"></div>
                <h5 className="section-heading">Sort price by</h5>
                <ul>
                    <li>
                        <input type="radio" name="price" id="sort-low-to-high"/><label htmlFor="sort-low-to-high"> Low to High</label>
                    </li>
                    <li>
                        <input type="radio" name="price" id="sort-high-to-low"/><label htmlFor="sort-high-to-low"> High to low</label>
                    </li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Ratings ⭐</h5>
                <ul>
                    <li><input type="radio" name="rating" id="rating-4"/><label htmlFor="rating-4"> 4 & above</label></li>
                    <li><input type="radio" name="rating" id="rating-3" /><label htmlFor="rating-3"> 3 & above</label></li>
                    <li><input type="radio" name="rating" id="rating-2"/><label htmlFor="rating-2"> 2 & above</label></li>
                    <li><input type="radio" name="rating" id="rating-1"/><label htmlFor="rating-1"> 1 & above</label></li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Categories</h5>
                <ul>
                    <li>
                        <input type="checkbox" name="category-1" id="category-1"/><label htmlFor="category-1"> Caps</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category-2" id="category-2"/><label htmlFor="category-2"> Glasses</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category-3" id="category-3"/><label htmlFor="category-3"> Shoes</label> 
                    </li>
                    <li>
                        <input type="checkbox" name="category-4" id="category-4"/><label htmlFor="category-4"> Party wear</label>
                    </li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Brands</h5>
                <ul>
                    <li><input type="checkbox" name="brand-1" id="brand-1"/><label htmlFor="brand-1"> Adidas</label></li>
                    <li><input type="checkbox" name="brand-2" id="brand-2"/><label htmlFor="brand-2"> H&M</label></li>
                    <li><input type="checkbox" name="brand-3" id="brand-3"/><label htmlFor="brand-3"> Ray Ban</label></li>
                    <li><input type="checkbox" name="brand-4" id="brand-4" /><label htmlFor="brand-4"> Nike</label></li>
                </ul>
                <div className="separator"></div>
                <h5 className="section-heading">Brands</h5>
                <ul>
                    <li><input type="checkbox" name="men" id="men"/><label htmlFor="men"> Men</label></li>
                    <li><input type="checkbox" name="women" id="women"/><label htmlFor="women"> Women</label></li>
                </ul>
            </aside>
        </>
    );
}