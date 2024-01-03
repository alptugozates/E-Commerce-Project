import { FETCH_PRODUCTS, UPDATE_ACTIVE_PAGE } from "../actions/productAction";

const initialState = {
  products: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
  images: [
    {
      url: "",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        totalProductCount: action.payload.totalProductCount,
        pageCount: action.payload.pageCount,
        fetchState: action.payload.fetchState,
        images: action.payload.images,
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
