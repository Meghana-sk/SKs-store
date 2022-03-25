import "./products.css"
import { Card, FilterSideNav } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
    const [ availableProducts, setAvailableProducts] = useState([]);
    const getAvailableProducts = async() => {
        try {
            const productsData = await axios.get("/api/products");
            setAvailableProducts(productsData.data.products);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAvailableProducts()
    }, [])
    return (
        <>
            <main className="prod-content">
                <FilterSideNav />
                <section className="prod-section">
                    <h3>Showing Products { `${availableProducts.length} / ${availableProducts.length}` }</h3>
                    <div className="card-container">
                        {availableProducts.map(item => (
                            <Card { ...item }/>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export { Products };