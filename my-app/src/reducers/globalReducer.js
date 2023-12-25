import {
  SET_CATEGORIES,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
} from "../actions/globalAction";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload.roles,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload.theme,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
  }
  return state;
};

export default globalReducer;
