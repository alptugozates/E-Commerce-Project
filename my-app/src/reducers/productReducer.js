import {
  FETCH_PRODUCTS,
  SORT_BY_ALPHABETICAL,
  SORT_BY_PRICE_HIGH_TO_LOW,
  SORT_BY_PRICE_LOW_TO_HIGH,
  SORT_BY_RATING_DESCENDING,
  UPDATE_ACTIVE_PAGE,
  SORT_BY_STOCK,
  SEARCH_FILTER,
  UPDATE_PRODUCTS,
  SET_CATEGORY_PRODUCT,
  UPDATE_CATEGORY_PRODUCTS,
  CATEGORY_SEARCH_FILTER,
} from "../actions/productAction";

const initialState = {
  products: [],
  categoryProduct: [],
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
      const categoryProductSortedAlphabetical = state.categoryProduct
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return {
        ...state,
        products: sortedAlphabetical,
        categoryProduct: categoryProductSortedAlphabetical,
      };

    case SORT_BY_RATING_DESCENDING:
      const sortedByRating = state.products
        .slice()
        .sort((a, b) => b.rating - a.rating);
      const categorySortedByRating = state.categoryProduct
        .slice()
        .sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        products: sortedByRating,
        categoryProduct: categorySortedByRating,
      };

    case SORT_BY_PRICE_HIGH_TO_LOW:
      const sortedByPriceHighToLow = state.products
        .slice()
        .sort((a, b) => b.price - a.price);
      const categorySortedByPriceHighToLow = state.categoryProduct
        .slice()
        .sort((a, b) => b.price - a.price);

      return {
        ...state,
        products: sortedByPriceHighToLow,
        categoryProduct: categorySortedByPriceHighToLow,
      };

    case SORT_BY_PRICE_LOW_TO_HIGH:
      const sortedByPriceLowToHigh = state.products
        .slice()
        .sort((a, b) => a.price - b.price);
      const categorySortedByPriceLowToHigh = state.categoryProduct
        .slice()
        .sort((a, b) => a.price - b.price);

      return {
        ...state,
        products: sortedByPriceLowToHigh,
        categoryProduct: categorySortedByPriceLowToHigh,
      };
    case SORT_BY_STOCK:
      const sortedByStock = state.products
        .slice()
        .sort((a, b) => a.stock - b.stock);
      const categorySortedByStock = state.categoryProduct
        .slice()
        .sort((a, b) => a.stock - b.stock);
      return {
        ...state,
        products: sortedByStock,
        categoryProduct: categorySortedByStock,
      };
    case SEARCH_FILTER:
      const searchText = action.payload.text.toLowerCase();
      console.log("searchText", searchText);
      if (searchText === "") {
        return {
          ...state,
          products: initialState.products,
        };
      } else if (searchText) {
        const filteredProducts = state.products.filter((product) =>
          product.name.toLowerCase().includes(searchText)
        );
        return {
          ...state,
          products: filteredProducts,
        };
      }
    case CATEGORY_SEARCH_FILTER:
      const categorySearchText = action.payload.text.toLowerCase();

      if (categorySearchText === "") {
        return {
          ...state,
          categoryProduct: initialState.categoryProduct,
        };
      } else if (categorySearchText) {
        const filteredProducts = state.categoryProduct.filter((product) =>
          product.name.toLowerCase().includes(categorySearchText)
        );
        return {
          ...state,
          categoryProduct: filteredProducts,
        };
      }

    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case UPDATE_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProduct: [...state.categoryProduct, ...action.payload],
      };
    case SET_CATEGORY_PRODUCT:
      return {
        ...state,
        categoryProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
