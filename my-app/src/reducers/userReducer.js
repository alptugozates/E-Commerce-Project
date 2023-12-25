import {
  UPDATE_EMAIL,
  UPDATE_NAME,
  UPDATE_PASSWORD,
} from "../actions/userAction";

const initialState = {
  name: {},
  email: {},
  password: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload.name };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
  }
  return state;
};

export default userReducer;
