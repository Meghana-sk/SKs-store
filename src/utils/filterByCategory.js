const getProductsWithSelectedBrand = (availableProducts, brands) => {
  if (brands.length > 0)
    return availableProducts.filter((item) => brands.includes(item.brand));
  return availableProducts;
};

const getProductsWithSelectedCategory = (availableProducts, categories) => {
  if (categories.length > 0)
    return availableProducts.filter((item) =>
      categories.includes(item.categoryName)
    );

  return availableProducts;
};

const getProductsWithSelectedGender = (availableProducts, genderSelect) => {
  if (genderSelect.length > 0)
    return availableProducts.filter((item) =>
      genderSelect.includes(item.gender)
    );
  return availableProducts;
};

export {
  getProductsWithSelectedBrand,
  getProductsWithSelectedCategory,
  getProductsWithSelectedGender,
};
