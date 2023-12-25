export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";

export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  payload: { product, count },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updatePaymentInfo = (payment) => ({
  type: UPDATE_PAYMENT,
  payload: payment,
});

export const updateAddressInfo = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});
