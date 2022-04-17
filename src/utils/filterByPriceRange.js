const getProductsWithinPriceRange = (availableProducts, { priceRange }) => {
  if (priceRange)
    return [...availableProducts].filter(
      (item) => Number(item.price) <= Number(priceRange)
    );
  return availableProducts;
};

export { getProductsWithinPriceRange };
