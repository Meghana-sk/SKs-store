import "./products.css"
import { Card, FilterSideNav } from "../../components";
import { useProducts } from "../../context/product-context";

const Products = () => {
    const { availableProducts } = useProducts();

    return (
        <>
            <main className="prod-content">
                <FilterSideNav />
                <section className="prod-section">
                    <h3>Showing Products { `${availableProducts.length} / ${availableProducts.length}` }</h3>
                    <div className="card-container">
                        {
                            availableProducts.map(({
                                _id,
                                title,
                                price, 
                                subtitle, 
                                rating, 
                                imgSrc
                                }) => (
                                <Card key={_id} price={price} title={title} subtitle={subtitle} rating={rating} imgSrc={imgSrc}/>
                            ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export { Products };