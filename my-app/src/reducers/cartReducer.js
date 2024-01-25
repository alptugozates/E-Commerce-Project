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
};

const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const loadFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return null;
  }
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
        const updatedCart = state.cart.map((item) =>
          item.product.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        saveToLocalStorage("cart", updatedCart);
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        const updatedCart = [
          ...state.cart,
          { count: 1, product: action.payload },
        ];
        saveToLocalStorage("cart", updatedCart);
        return {
          ...state,
          cart: updatedCart,
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
      saveToLocalStorage("cart", updatedCart);
      return {
        ...state,
        cart: updatedCart,
      };
    case REMOVE_FROM_CART:
      const removedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.id
      );
      saveToLocalStorage("cart", removedCart);
      return {
        ...state,
        cart: removedCart,
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };

    default:
      const savedCart = loadFromLocalStorage("cart");
      return savedCart ? { ...state, cart: savedCart } : state;
  }
};

export default cartReducer;
