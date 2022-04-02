import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const productsData = await axios.get("/api/products");
        if (productsData.status === 200)
          setAvailableProducts(productsData.data.products);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <ProductContext.Provider value={{ availableProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductsProvider };
