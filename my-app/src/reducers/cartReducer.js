import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_ADDRESS,
  UPDATE_PAYMENT,
  UPDATE_PRODUCT_COUNT,
} from "../actions/cartAction";

const initialState = {
  cart: [],
  payment: {},
  adress: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
      const existingProduct = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingProduct) {
        // If product exists, increase the count
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        // If product is not in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { count: 1, product: action.payload }],
        };
      }
    case UPDATE_PRODUCT_COUNT:
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload.productId
          ? {
              ...item,
              count: Math.max(1, item.count + action.payload.quantity),
            }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.id
        ),
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
