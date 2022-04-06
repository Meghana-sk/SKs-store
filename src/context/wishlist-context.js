import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "./auth-context";

import {
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../shared/types";

const WishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlist: [],
  });
  const { authState } = useAuth();

  useEffect(() => {
    const getWishlistItems = async () => {
      try {
        const response = await axios.get("/api/user/wishlistt", {
          headers: {
            authorization: authState.token,
          },
        });
        if (response.status === 200)
          wishlistDispatch({
            type: GET_WISHLIST_ITEMS,
            payload: response.data.wishlist,
          });
      } catch (err) {}
    };
    if (authState.token !== null) getWishlistItems();
  }, [authState.token]);

  const addItemToWishlist = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: item },
        {
          headers: { authorization: authState.token },
        }
      );
      wishlistDispatch({
        type: ADD_TO_WISHLIST,
        payload: response.data.wishlist,
      });
    } catch (err) {
      alert(err);
    }
  };

  const deleteItemFromWishlist = async ({ _id }) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: { authorization: authState.token },
      });
      wishlistDispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: response.data.wishlist,
      });
    } catch (err) {
      alert(err.response);
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addItemToWishlist,
        deleteItemFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
