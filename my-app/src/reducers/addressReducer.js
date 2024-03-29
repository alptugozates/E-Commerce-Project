import {
  ADD_USER_ADDRESS,
  GET_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
} from "../actions/addressAction";

export const addressData = {
  address: {
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  },
};

const addressReducer = (state = addressData, action) => {
  switch (action.type) {
    case GET_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    // case ADD_USER_ADDRESS:
    //   return {
    //     ...state,
    //     address: [...state, action.payload],
    //   };
    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        address: state.address.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    default:
      return state;
  }
};

export default addressReducer;
