
const getProductsWithSelectedCategory = ( availableProducts, categories ) => {

    if(categories.length>0)
    return availableProducts.filter(item=>categories.includes(item.categoryName))

return availableProducts;

}

export { getProductsWithSelectedCategory };