import "./wishlist.css";
import { Card } from "../../components";

const Wishlist = () => {
  return (
    <>
      <main className="prod-select-container">
        <section className="prod-section">
          <h3>
            Wishlisted Items<span>(2)</span>
          </h3>
          <div className="card-container">
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
};

export { Wishlist };
