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
        productList: action.payload.productList,
        totalProductCount: action.payload.totalProductCount,
        pageCount: action.payload.pageCount,
        fetchState: "FETCHED" | "FAILED" | "FETCHING" | "NOT_FETCHED",
      };
    case UPDATE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload.activePage,
      };
    default:
      return state;
  }
};

export default productReducer;
