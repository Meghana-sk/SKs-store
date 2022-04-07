import "./wishlist.css";
import { Link } from "react-router-dom";
import { WishlistCard } from "../../components";
import { useWishlist } from "../../context/wishlist-context";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  return (
    <>
      {wishlistState.wishlist.length ? (
        <main className="prod-select-container">
          <section className="prod-section">
            <h3>
              Wishlisted Items<span> ({wishlistState.wishlist.length})</span>
            </h3>
            <div className="card-container">
              {wishlistState.wishlist.map((item) => (
                <WishlistCard {...item} />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <div className="prod-select-container column-flex">
          <p>Your wishlist is empty! :(</p>
          <Link to="/products">
            <button className="btn btn-primary text-s">
              Continue shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export { Wishlist };
