import { createContext, useContext, useReducer } from "react";
import { prodFilterReducer } from "../reducer/prodFilterReducer";

const ProductFilterContext = createContext();

const ProductFilterProvider = ({ children }) => {
  const defaultFilter = {
    sortBy: "",
    rating: "",
    categories: [],
    priceRange: 0,
    brands: [],
    genderSelect: [],
    search: "",
  };
  const [filterState, filterDispatch] = useReducer(
    prodFilterReducer,
    defaultFilter
  );
  return (
    <ProductFilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

const useProductFilter = () => useContext(ProductFilterContext);

export { ProductFilterProvider, useProductFilter };
