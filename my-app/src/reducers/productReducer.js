import { FETCH_PRODUCTS, UPDATE_ACTIVE_PAGE } from "../actions/productAction";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
        totalProductCount: action.payload,
        pageCount: action.payload,
        fetchState: action.payload,
      };
    case UPDATE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
