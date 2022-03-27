
const getProductsWithSelectedBrand = ( availableProducts, brands ) => {

    if(brands.length>0)
    return availableProducts.filter(item=>brands.includes(item.brand))

return availableProducts;

}

export { getProductsWithSelectedBrand };