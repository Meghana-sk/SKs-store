
const getProductsWithSelectedRatings = ( availableProducts, { rating } ) => {
    if (rating) {
        return [...availableProducts.filter(el => Number(el.rating) >= Number(rating))];
    }
    return availableProducts;
}

export { getProductsWithSelectedRatings };