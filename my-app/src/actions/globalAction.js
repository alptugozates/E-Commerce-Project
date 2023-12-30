import axiosInstance from "../axios/axiosInstance";

export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get("/categories");
      const categories = response.data;
      dispatch(setCategories(categories));
    } catch (error) {
      console.error("Kategoriler getirilirken bir hata oluştu:", error);
    }
  };
};
