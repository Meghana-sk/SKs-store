const getProductsWithSortLowToHigh = ( availableProducts, { sortBy} ) => {
    switch (sortBy) {
        case "LOW TO HIGH": 
            return [...availableProducts.sort((item1, item2) => Number(item1.price) - Number(item2.price))]

        case "HIGH TO LOW": 
            return [...availableProducts.sort((item1, item2) => Number(item2.price) - Number(item1.price))]

        default: 
            return availableProducts;
    }
}

export { getProductsWithSortLowToHigh};
