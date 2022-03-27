
const getProductsWithSelectedGender = ( availableProducts, genderSelect ) => {

    if(genderSelect.length>0)
    return availableProducts.filter(item => genderSelect.includes(item.gender))

    return availableProducts;

}

export { getProductsWithSelectedGender };