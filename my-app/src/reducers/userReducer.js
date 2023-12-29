import { LOGGED_IN, LOGGED_OUT } from "../actions/userAction";
import axiosInstance from "../axios/axiosInstance";

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

    case LOGGED_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        loggedIn: false,
        name: "",
        email: "",
      };
  }
  return state;
};

export default userReducer;
