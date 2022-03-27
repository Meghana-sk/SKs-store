import "./products.css"
import { Card, FilterSideNav } from "../../components";
import { useProducts } from "../../context/product-context";

const Products = () => {
    const { availableProducts } = useProducts();
    console.log("Hey", availableProducts)
    
    return (
        <>
            <main className="prod-content">
                <FilterSideNav />
                <section className="prod-section">
                    <h3>Products</h3>
                    <div className="card-container">
                        {
                            availableProducts.map(({
                                price, 
                                subtitle, 
                                rating, 
                                _id, 
                                categoryName, 
                                brand}) => (
                                <Card key={_id} price={price} title={subtitle} rating={rating} brand={brand} categoryName={categoryName}/>
                            ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export { Products };