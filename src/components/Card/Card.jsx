import "./card.css";

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h6 className="card-badge">NEW</h6>
                    <div className="wishlist"><i className="fas fa-times"></i></div>
                    <img src="" alt="cap" className="card-img" />
                    <h3 className="card-title">Card title</h3>
                    <p className="card-subtitle">Sub title</p>
                    <div className="card-pricing">
                        <p>Rs 500</p>
                        <strike>Rs 1000</strike>
                        <p className="small-font">(50% OFF)</p>
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

export default Card;