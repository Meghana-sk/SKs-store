import "./card.css";
export const PriceDetailsCard = () => {
  return (
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
  );
};
