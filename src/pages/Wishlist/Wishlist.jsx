import "./wishlist.css";
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
        <p className="prod-select-container">Your wishlist is empty! :(</p>
      )}
    </>
  );
};

export { Wishlist };
