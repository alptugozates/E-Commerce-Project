import {
  FETCH_PRODUCTS,
  SORT_BY_ALPHABETICAL,
  SORT_BY_PRICE_HIGH_TO_LOW,
  SORT_BY_PRICE_LOW_TO_HIGH,
  SORT_BY_RATING_DESCENDING,
  UPDATE_ACTIVE_PAGE,
  SORT_BY_STOCK,
} from "../actions/productAction";

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
    case SORT_BY_ALPHABETICAL:
      const sortedAlphabetical = state.products
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        products: sortedAlphabetical,
      };

    case SORT_BY_RATING_DESCENDING:
      const sortedByRating = state.products
        .slice()
        .sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        products: sortedByRating,
      };

    case SORT_BY_PRICE_HIGH_TO_LOW:
      const sortedByPriceHighToLow = state.products
        .slice()
        .sort((a, b) => b.price - a.price);
      return {
        ...state,
        products: sortedByPriceHighToLow,
      };

    case SORT_BY_PRICE_LOW_TO_HIGH:
      const sortedByPriceLowToHigh = state.products
        .slice()
        .sort((a, b) => a.price - b.price);
      return {
        ...state,
        products: sortedByPriceLowToHigh,
      };
    case SORT_BY_STOCK:
      const sortedByStock = state.products
        .slice()
        .sort((a, b) => a.stock - b.stock);
      return {
        ...state,
        products: sortedByStock,
      };
    default:
      return state;
  }
};

export default productReducer;
