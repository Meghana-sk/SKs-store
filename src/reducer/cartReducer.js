import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from "../shared/types";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    case INCREMENT_ITEM:
    case DECREMENT_ITEM:
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "GET_CART_ITEMS":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export { cartReducer };
