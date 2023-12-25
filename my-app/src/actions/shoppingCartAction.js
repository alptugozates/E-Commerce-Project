export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const UPDATE_ADRESS = "UPDATE_ADRESS";
export const SET_SELLER_INFO = "SET_SELLER_INFO";

export const addToCart = (cart) => ({
  type: "ADD_TO_CART",
  payload: cart,
});

export const removeFromCart = (cart) => ({
  type: "REMOVE_FROM_CART",
  payload: cart,
});

export const updatePaymentInfo = (payment) => ({
  type: "UPDATE_PAYMENT",
  payload: payment,
});

export const updateAddressInfo = (adress) => ({
  type: "UPDATE_ADDRESS",
  payload: adress,
});
