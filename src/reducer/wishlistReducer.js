import {
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  CLEAR_WISHLIST,
} from "../shared/types";

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
    case REMOVE_FROM_WISHLIST:
      return { ...state, wishlist: action.payload };
    case CLEAR_WISHLIST:
      return { ...state, wishlist: [] };
    case GET_WISHLIST_ITEMS:
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};

export { wishlistReducer };
