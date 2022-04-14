import "./products.css";
import { Card, FilterSideNav } from "../../components";
import { useProducts } from "../../context/product-context";
import { useProductFilter } from "../../context/productFilter-context";
import {
  getSortedProducts,
  getProductsWithSelectedRatings,
  getProductsWithinPriceRange,
  getProductsWithSelectedBrand,
  getProductsWithSelectedCategory,
  getProductsWithSelectedGender,
  getProductsWithSearchQuery,
} from "../../utils";

const Products = () => {
  const { availableProducts } = useProducts();
  const { filterState } = useProductFilter();

  let filteredProducts = getSortedProducts(availableProducts, filterState);
  filteredProducts = getProductsWithSelectedRatings(
    filteredProducts,
    filterState
  );
  filteredProducts = getProductsWithSelectedCategory(
    filteredProducts,
    filterState.categories
  );
  filteredProducts = getProductsWithinPriceRange(filteredProducts, filterState);
  filteredProducts = getProductsWithSelectedBrand(
    filteredProducts,
    filterState.brands
  );
  filteredProducts = getProductsWithSelectedGender(
    filteredProducts,
    filterState.genderSelect
  );
  filteredProducts = getProductsWithSearchQuery(
    filteredProducts,
    filterState.search
  );

  return (
    <>
      <main className="prod-content">
        <FilterSideNav />
        <section className="prod-section">
          <h3>
            Showing Products{" "}
            {`${filteredProducts.length} / ${availableProducts.length}`}
          </h3>
          <div className="card-container">
            {filteredProducts.map((item) => (
              <Card key={item._id} {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export { Products };
