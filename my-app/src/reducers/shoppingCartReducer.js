import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ADRESS,
  UPDATE_PAYMENT,
} from "../actions/shoppingCartAction";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};
export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case UPDATE_ADRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
