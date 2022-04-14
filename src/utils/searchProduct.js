const getProductsWithSearchQuery = (availableProducts, query) => {
  if (query) {
    return [
      ...availableProducts.filter((el) =>
        el.subtitle.toLowerCase().includes(query.toLowerCase())
      ),
    ];
  }
  return availableProducts;
};

export { getProductsWithSearchQuery };
