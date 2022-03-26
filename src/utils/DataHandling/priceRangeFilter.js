const getProductsWithPriceRange = ( availableProducts, { priceRange} ) => {
    if (priceRange)
        return [...availableProducts.filter( (item) => Number(item.price) <= Number(priceRange) )]
    return availableProducts;
}

export { getProductsWithPriceRange };
