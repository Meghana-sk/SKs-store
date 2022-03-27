const HIGH_TO_LOW = "HIGH_TO_LOW";
const LOW_TO_HIGH = "LOW_TO_HIGH";

const getSortedProducts = (availableProducts, { sortBy }) => {
  switch (sortBy) {
    case LOW_TO_HIGH:
      return [
        ...availableProducts.sort(
          (item1, item2) => Number(item1.price) - Number(item2.price)
        ),
      ];

    case HIGH_TO_LOW:
      return [
        ...availableProducts.sort(
          (item1, item2) => Number(item2.price) - Number(item1.price)
        ),
      ];

    default:
      return availableProducts;
  }
};

export { getSortedProducts };
