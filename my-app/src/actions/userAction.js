export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  payload: password,
});
