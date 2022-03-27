import "./products.css"
import { Card, FilterSideNav } from "../../components";
import { useProducts } from "../../context/product-context";
import { getProductsWithSortLowToHigh, getProductsWithSelectedRatings, getProductsWithSelectedCategory, getProductsWithPriceRange, getProductsWithSelectedBrand, getProductsWithSelectedGender } from "../../utils";
import { useProductFilter } from "../../context/prodfilter-context";

const Products = () => {
    const { availableProducts } = useProducts();
    const { filterState } = useProductFilter();

    let filteredProducts = getProductsWithSortLowToHigh( availableProducts, filterState);
    filteredProducts = getProductsWithSelectedRatings(filteredProducts, filterState);
    filteredProducts = getProductsWithSelectedCategory(filteredProducts, filterState.categories);
    filteredProducts = getProductsWithPriceRange(filteredProducts, filterState);
    filteredProducts = getProductsWithSelectedBrand(filteredProducts, filterState.brands);
    filteredProducts = getProductsWithSelectedGender(filteredProducts, filterState.genderSelect)

    return (
        <>
            <main className="prod-content">
                <FilterSideNav />
                <section className="prod-section">
                    <h3>Showing Products { `${filteredProducts.length}` }</h3>
                    <div className="card-container">
                        {filteredProducts.map(({price, author, rating, _id, categoryName, brand}) => (
                            <Card key={_id} price={price} title={author} rating={rating} brand={brand} categoryName={categoryName}/>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export { Products };