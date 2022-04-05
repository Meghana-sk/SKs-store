import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "./auth-context";
import { GET_CART_ITEMS } from "../shared/types";

import {
  ADD_TO_CART,
  DECREMENT_ITEM,
  INCREMENT_ITEM,
  REMOVE_FROM_CART,
} from "../shared/types";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });
  const { authState } = useAuth();

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: authState.token,
          },
        });
        if (response.status === 200)
          cartDispatch({ type: GET_CART_ITEMS, payload: response.data.cart });
      } catch (err) {}
    };
    if (authState.token !== null) getCartItems();
  }, [authState.token]);
  const addItemToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: { authorization: authState.token },
        }
      );
      cartDispatch({ type: ADD_TO_CART, payload: response.data.cart });
    } catch (err) {
      alert(err);
    }
  };
  const updateProductQty = async (_id, actionType, setBtnDisabled) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: {
            type: actionType,
          },
        },
        {
          headers: { authorization: authState.token },
        }
      );
      cartDispatch({
        type: actionType === "increment" ? INCREMENT_ITEM : DECREMENT_ITEM,
        payload: response.data.cart,
      });
      setBtnDisabled(false);
    } catch (err) {
      alert(err);
      setBtnDisabled(false);
    }
  };

  const deleteItemFromCart = async ({ _id }) => {
    try {
      const response = await axios.delete(`/api/user/cart/${_id}`, {
        headers: { authorization: authState.token },
      });
      cartDispatch({
        type: REMOVE_FROM_CART,
        payload: response.data.cart,
      });
    } catch (err) {
      alert(err.response);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addItemToCart,
        updateProductQty,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
