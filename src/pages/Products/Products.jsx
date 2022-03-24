import Card from "../../components/Card/Card";
import FilterSideNav from "../../components/FilterSideNav/FilterSideNav";
import "./products.css"

const Products = () => {
    return (
        <>
            <main className="prod-content">
                <FilterSideNav />
                <section className="prod-section">
                    <h3>Products</h3>
                    <div className="card-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Products;