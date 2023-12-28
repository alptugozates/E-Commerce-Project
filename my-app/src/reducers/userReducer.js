import { LOGGED_IN } from "../actions/userAction";

const loginData = {
  name: "",
  email: "",
  password: "",
  role: "",
  photo: "",
  loggedIn: false,
};

export function writeToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function readToLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

const userReducer = (state = loginData, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
        photo: action.payload.photo,
        loggedIn: true,
      };
  }
  return state;
};

export default userReducer;
