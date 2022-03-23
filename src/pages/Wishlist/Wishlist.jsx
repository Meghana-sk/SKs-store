import Card from "../../components/Card/Card";
import "./wishlist.css";

const Wishlist = () => {
    return (
        <>
            <main className="prod-select-container">
                <section className="prod-section">
                    <h3>Wishlisted Items<span>(2)</span></h3>
                    <div className="card-container">
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Wishlist;