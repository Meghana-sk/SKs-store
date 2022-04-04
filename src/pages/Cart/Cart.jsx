import "./cart.css";
import { CartCard } from "../../components";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";

const Cart = () => {
  const { cartState } = useCart();
  const { authState } = useAuth();

  return (
    <>
      <main className="prod-select-container">
        <section className="prod-section">
          <h3>
            Items in your cart
            <span>
              ({authState.token && authState.user && cartState.cart.length})
            </span>
          </h3>
          {cartState.cart.length && (
            <div className="card-container">
              {cartState.cart.map((item) => (
                <CartCard {...item} />
              ))}
            </div>
          )}
        </section>
        <section className="price-details-container">
          <div className="price-container">
            <h4 className="text-center">Price details</h4>
            <div className="price-details">
              <div className="price-detail-row">
                <div>
                  Price<span>(2 item)</span>
                </div>
                <div>Rs 1300</div>
              </div>
              <div className="price-detail-row">
                <div>Discount</div>
                <div>-Rs 300</div>
              </div>
              <div className="price-detail-row">
                <div>Delivery Charges</div>
                <div>FREE</div>
              </div>
              <div className="separator"></div>
              <div className="price-detail-row">
                <div>Total</div>
                <div>Rs 1000</div>
              </div>
              <div className="separator"></div>
              <div>
                You will save Rs<span>300</span> on this order
              </div>
              <button className="btn btn-primary text-s">Place order</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { Cart };
