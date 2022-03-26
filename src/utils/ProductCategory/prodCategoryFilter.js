
const getProductsWithSelectedCategory = ( availableProducts, { catergoryName } ) => {
    if (catergoryName) {
        return [...availableProducts.filter(item => item.includes(catergoryName))];
    }
    return availableProducts;

//     if(categories.length>0)
//     return items.filter(item=>categories.includes(item.categoryName))

// return items;
}

export { getProductsWithSelectedCategory };