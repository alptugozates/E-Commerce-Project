import axiosInstance from "../axios/axiosInstance";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const UPDATE_ACTIVE_PAGE = "UPDATE_ACTIVE_PAGE";
export const SORT_BY_ALPHABETICAL = "SORT_BY_ALPHABETICAL";
export const SORT_BY_RATING_DESCENDING = "SORT_BY_RATING_DESCENDING";
export const SORT_BY_PRICE_HIGH_TO_LOW = "SORT_BY_PRICE_HIGH_TO_LOW";
export const SORT_BY_PRICE_LOW_TO_HIGH = "SORT_BY_PRICE_LOW_TO_HIGH";
export const SORT_BY_STOCK = "SORT_BY_STOCK";
export const SEARCH_FILTER = "SEARCH_FILTER";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const SET_CATEGORY_PRODUCT = "SET_CATEGORY_PRODUCT";
export const UPDATE_CATEGORY_PRODUCTS = "UPDATE_CATEGORY_PRODUCTS";
export const CATEGORY_SEARCH_FILTER = "CATEGORY_SEARCH_FILTER";
export const fetchProducts = (
  products,
  totalProductCount,
  pageCount,
  images,
  fetchState
) => ({
  type: FETCH_PRODUCTS,
  payload: { products, totalProductCount, pageCount, images, fetchState },
});

export const updateActivePage = (activePage) => ({
  type: UPDATE_ACTIVE_PAGE,
  payload: { activePage },
});

export const filterProductsByText = (text) => ({
  type: SEARCH_FILTER,
  payload: { text },
});
export const categoryFilterProductsByText = (text) => ({
  type: CATEGORY_SEARCH_FILTER,
  payload: { text },
});

export const sortByAlphabetical = () => ({
  type: SORT_BY_ALPHABETICAL,
});

export const sortByRatingDescending = () => ({
  type: SORT_BY_RATING_DESCENDING,
});

export const sortByPriceHighToLow = () => ({
  type: SORT_BY_PRICE_HIGH_TO_LOW,
});

export const sortByPriceLowToHigh = () => ({
  type: SORT_BY_PRICE_LOW_TO_HIGH,
});
export const sortByStock = () => ({
  type: SORT_BY_STOCK,
});

export const updateCategoryProducts = (categoryProduct) => ({
  type: UPDATE_CATEGORY_PRODUCTS,
  payload: categoryProduct,
});

export const fetchProductsData = (category, filter, sort) => {
  return async (dispatch) => {
    let url = "/products";

    if (category) {
      url += `?category=${category}`;
    }

    if (filter) {
      url += category ? `&filter=${filter}` : `?filter=${filter}`;
    }

    if (sort) {
      const separator = category || filter ? "&" : "?";
      url += `${separator}sort=${sort}`;
    }

    try {
      const response = await axiosInstance.get(url);
      console.log("response", response);
      dispatch(
        fetchProducts(
          response.data.products,
          response.data.totalProductCount,
          response.data.pageCount,
          "FETCHED"
        )
      );
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

export const fetchMoreProducts = (page, limit = 25, offset = 0) => {
  return async (dispatch) => {
    let url = `/products?page=${page}&limit=${limit}&offset=${offset}`;

    try {
      const response = await axiosInstance.get(url);
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: response.data.products,
      });
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  };
};

export const FetchCategoryProducts = (
  page,
  limit = 25,
  offset = 0,
  category
) => {
  return async (dispatch) => {
    let url = `/products?page=${page}&limit=${limit}&offset=${offset}&category=${category}`;

    try {
      const response = await axiosInstance.get(url);
      console.log("response.data", response.data.products);

      dispatch(updateCategoryProducts(response.data.products));
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  };
};

export const fetchCategoryProduct = (category) => {
  return async (dispatch) => {
    try {
      const queryParams = new URLSearchParams();
      if (category) {
        queryParams.append("category", category);
      }

      const response = await axiosInstance.get(`/products?${queryParams}`);
      const data = response.data;
      dispatch(setCategoryProduct(response.data.products));
      return response.data.products;
    } catch (err) {
      console.log("fetch edilirken hata oluştu", err);
    }
  };
};

export const setCategoryProduct = (categoryProduct) => {
  return {
    type: "SET_CATEGORY_PRODUCT",
    payload: categoryProduct,
  };
};
