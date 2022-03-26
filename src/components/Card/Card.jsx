import "./card.css";

export const Card = ({title, subtitle, price, rating = 1, categoryName}) => {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h6 className="card-badge">NEW</h6>
                    <div className="wishlist"><i className="fas fa-times"></i></div>
                    <img src="" alt="cap" className="card-img" />
                    <h3 className="card-title">{ title }</h3>
                    <p className="card-subtitle">{ subtitle }</p>
                    <div className="card-pricing">
                        <p>{ price }</p>
                        <strike>{categoryName}</strike>
                        <p className="small-font">(50% OFF)</p>
                        <p>{rating} ⭐</p>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">
                        <i className="fas fa-cart-plus"></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
}
