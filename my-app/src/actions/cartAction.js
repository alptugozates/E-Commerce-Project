export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_PRODUCT_COUNT = "UPDATE_PRODUCT_COUNT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const updateProductCount = (productId, quantity) => ({
  type: UPDATE_PRODUCT_COUNT,
  payload: { productId, quantity },
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export const updatePaymentInfo = (payment) => ({
  type: UPDATE_PAYMENT,
  payload: payment,
});
