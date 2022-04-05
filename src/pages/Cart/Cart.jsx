import "./cart.css";
import { CartCard, PriceDetailsCard } from "../../components";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";
import { cartPriceCalculator } from "../../utils";

const Cart = () => {
  const { cartState } = useCart();
  const { authState } = useAuth();
  const { price } = cartPriceCalculator(cartState.cart);

  return (
    <>
      {cartState.cart.length ? (
        <main className="prod-select-container">
          <section className="prod-section">
            <h3>
              Items in your cart
              <span>
                ({authState.token && authState.user && cartState.cart.length})
              </span>
            </h3>
            <div className="card-container">
              {cartState.cart.map((item) => (
                <CartCard {...item} />
              ))}
            </div>
          </section>
          <PriceDetailsCard price={price} cart={cartState.cart} />
        </main>
      ) : (
        <p className="prod-select-container">Your cart is empty :(</p>
      )}
    </>
  );
};

export { Cart };
