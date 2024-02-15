import axiosInstance from "../axios/axiosInstance";
export const GET_USER_ADDRESS = "GET_USER_ADDRESS";
// export const ADD_USER_ADDRESS = "ADD_USER_ADDRESS";
export const UPDATE_USER_ADDRESS = "UPDATE_USER_ADDRESS";

export const getUserAddress = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get("/user/address");
    dispatch({ type: GET_USER_ADDRESS, payload: response.data });
  } catch (error) {
    console.error("Error getting user address", error);
  }
};

// export const addUserAddress = (addressData) => async (dispatch) => {
//   try {
//     const response = await axiosInstance.post("/user/address", addressData);
//     dispatch({ type: ADD_USER_ADDRESS, payload: { address: response.data } });
//   } catch (error) {
//     // console.error("Error adding address", error);
//   }
// };

export const updateUserAddress =
  (addressId, updatedData) => async (dispatch) => {
    try {
      const response = await axiosInstance.put(
        `/user/address/${addressId}`,
        updatedData
      );
      dispatch({ type: UPDATE_USER_ADDRESS, payload: response.data });
    } catch (error) {}
  };
