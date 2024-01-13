import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import rightArrow from "../foto/gray-arrow-right.png";
import productIcon from "../foto/foto ProductList/product-icon.png";
import vectorIcon from "../foto/foto ProductList/Vector.png";
import elipsNavy from "../foto/elipsNavy.png";
import elipsBlue from "../foto/elipsBlue.png";
import elipsGreen from "../foto/elipsGreen.png";
import elipsOrange from "../foto/elipsOrange.png";
import ClientsContent from "../components/ClientsContent";
import OtherHeader from "../components/OtherHeader";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchMoreProducts,
  fetchProductsData,
  filterProductsByText,
  sortByAlphabetical,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
  sortByRatingDescending,
  sortByStock,
} from "../actions/productAction";
import {
  Link,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const ProductListPage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.globalReducer.categories);
  const history = useHistory();
  const location = useLocation();
  const products = useSelector((state) => state.productReducer.products);
  console.log("PRODUCTS", products);
  console.log("categories", categories);

  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMoreData = () => {
    if (products.length > 0) {
      setLoading(true);
      const currentPage = Math.ceil(dataLength / 25);
      const newOffset = currentPage * 25;

      dispatch(fetchMoreProducts(currentPage + 1, 25, newOffset));
      setLoading(false);
    }
  };
  const dataLength = products.length;

  const topCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  const handleSortAlphabetical = () => {
    dispatch(sortByAlphabetical());
  };

  const handleSortRatingDescending = () => {
    dispatch(sortByRatingDescending());
  };

  const handleSortPriceHighToLow = () => {
    dispatch(sortByPriceHighToLow());
  };

  const handleSortPriceLowToHigh = () => {
    dispatch(sortByPriceLowToHigh());
  };
  const handleSortByStock = () => {
    dispatch(sortByStock());
  };

  const handleFilter = () => {
    if (selectedValue === "popularity") {
      handleSortRatingDescending();
    }
    if (selectedValue === "increasingPrice") {
      handleSortPriceLowToHigh();
    }
    if (selectedValue === "decreasingPrice") {
      handleSortPriceHighToLow();
    }
    if (selectedValue === "alphabetical") {
      handleSortAlphabetical();
    }
    if (selectedValue === "topSellers") {
      handleSortByStock();
    }
    if (searchText !== "") {
      dispatch(filterProductsByText(searchText));
    }

    const queryParams = new URLSearchParams(location.search);
    queryParams.set("filter", searchText);
    queryParams.set("sort", selectedValue);
    history.push({ search: queryParams.toString() });
  };

  const handleSearchInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const navigateToProductDetail = (category, productId, productNameSlug) => {
    history.push(`/product/${category}/${productId}/${productNameSlug}`);
  };

  return (
    <div className="flex flex-col px-0">
      <Header />
      <div className="sm:hidden flex">
        <OtherHeader />
      </div>
      <div className="background bg-[#FAFAFA] w-full py-6 ">
        <div className="container flex  sm:flex-row flex-col sm:gap-0 gap-10  items-center justify-evenly">
          <div className="row flex sm:flex-row flex-col justify-center items-center">
            <h2 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42]">
              Shop
            </h2>
          </div>

          <div className="scrumb flex items-center gap-4">
            <a
              href="/"
              className="font-montserrat font-bold text-[#252B42] tracking-[0.0125rem] text-sm"
            >
              Home
            </a>
            <img className="w-2 h-auto" src={rightArrow} alt="Right Arrow" />
            <h6 className="font-montserrat text-sm font-bold tracking-[0.0125rem] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>
      <div className="category flex sm:flex-row flex-col py-0 sm:px-44 items-center justify-center self-stretch bg-[#FAFAFA] ">
        <div className="container flex flex-col items-center pb-12">
          <div className="row flex sm:flex-row flex-col items-start gap-4">
            {topCategories.map((category) => (
              <div
                key={category.id}
                className="col-md-4 flex flex-col justify-center items-center hover:scale-110 duration-300"
              >
                <div className="card-item shrink-0 relative">
                  <Link
                    to={`/shop/${category.id}/${
                      category.gender === "k" ? "Kadin" : "Erkek"
                    }/${category.title}`}
                    key={category.id}
                    className="absolute inset-0 bg-[#212121] bg-opacity-30 hover:bg-opacity-10 ease-in-out duration-300 cursor-pointer"
                  ></Link>
                  <img
                    src={category.img}
                    className="w-[20rem] object-cover sm:w-full h-[20rem]"
                    alt="Category"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="font-montserrat font-bold tracking-[0.00625rem] hover:text-[#23A6F0] duration-300 text-base text-custom-white">
                      {category.title.toUpperCase()}
                    </p>
                    <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] hover:text-[#23A6F0] duration-300 text-custom-white">
                      {category.rating} Rating
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="filter flex py-0 sm:px-52 justify-between items-center self-stretch bg-custom-white">
        <div className="container flex sm:flex-row flex-col justify-between items-center gap-20 px-0 py-6">
          <div className="sort flex items-center gap-4 text-custom-gray">
            <p className="font-montserrat text-sm font-bold tracking-[0.0125rem]">
              Showing {products.length} results
            </p>
          </div>
          <div className="sort flex items-center gap-4">
            <div className="frame flex items-center gap-4">
              <h6 className="font-montserrat font-bold tex-sm tracking-[0.0125rem] text-custom-gray">
                Views:
              </h6>
              <button className="flex items-center p-4 border-2 border-[#ECECEC] rounded-md">
                <img className="w-4 h-4" src={productIcon} alt="Product Icon" />
              </button>
              <button className="flex items-center p-4 border-2 border-[#ECECEC] rounded-md">
                <img className="w-4 h-4" src={vectorIcon} alt="Vector Icon" />
              </button>
            </div>
          </div>
          <div className="sort flex items-center gap-4">
            <div className="select flex justify-center items-center shrink-0">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchInputChange}
                className="border-2 bg-[#F9F9F9] border-[#DDDDDD] text-custom-gray px-5 py-2.5 font-montserrat font-normal text-sm tracking-[0.0125rem] "
              />
              <select
                className="border-2 bg-[#F9F9F9] border-[#DDDDDD] text-custom-gray px-5 py-2.5 font-montserrat font-normal text-sm tracking-[0.0125rem] "
                id="dropdown"
                onChange={(e) => setSelectedValue(e.target.value)}
                value={selectedValue}
              >
                <option value="popularity">Popularity</option>
                <option value="increasingPrice">Increasing price</option>
                <option value="decreasingPrice">Decreasing price</option>
                <option value="alphabetical">Alphabetical A-Z</option>
                <option value="topSellers">Top sellers</option>
              </select>
            </div>
            <button
              onClick={handleFilter}
              className="btn flex items-center py-3 px-6 border-2 bg-[#23A6F0]  duration-300 rounded-md hover:bg-[#6ec8fc]"
            >
              <p className="font-montserrat text-custom-white font-bold text-sm tracking-[0.0125rem]">
                Filter
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-8 justify-center w-full px-12 sm:px-52 py-20">
            <InfiniteScroll
              dataLength={products.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<h4>Loading...</h4>}
              endMessage={<p>No more products</p>}
              className="flex flex-wrap gap-8 justify-center w-full px-12 sm:px-28 py-20"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card border-2 shadow-lg rounded hover:scale-110 duration-300 cursor-pointer "
                  onClick={() =>
                    navigateToProductDetail(
                      product.category_id,
                      product.id,
                      product.name.replace(/\s+/g, "-")
                    )
                  }
                >
                  <div className="flex flex-col justify-center items-center ">
                    {product.images.length > 0 && (
                      <img
                        className="sm:w-[20rem] sm:h-auto sm:top-0 sm:object-cover w-[20rem]"
                        src={product.images[0].url}
                        alt={`Product ${product.id}`}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-center gap-5 px-6 pt-6 pb-9">
                    <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                      {product.name}
                    </h5>
                    <p
                      className="font-montserrat font-bold text-custom-gray text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[17rem]"
                      title={product.description}
                    >
                      {product.description}
                    </p>
                    <div className="flex flex-start items-start gap-2">
                      <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                        {product.price} ₺
                      </h5>
                    </div>
                    <div className="product-colors flex items-center gap-2.5">
                      <img src={elipsBlue} />
                      <img src={elipsGreen} />
                      <img src={elipsOrange} />
                      <img src={elipsNavy} />
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
          <div className="flex items-center justify-center ">
            <div className="flex flex-start">
              <button className="prev flex justify-center items-center border-2 p-7 border-[#E9E9E9] bg-[#F3F3F3] ">
                <p className="font-montserrat text-[#BDBDBD] text-sm font-bold tracking-[0.0125rem]  ">
                  First
                </p>
              </button>
              <button className="flex items-center justify-center px-5 py-6 border-[#E9E9E9] border-2 bg-custom-white] ">
                <p className="text-[#23A6F0] font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                  1
                </p>
              </button>
              <button className="flex items-center justify-center px-5 py-6 border-[#E9E9E9] border-2 bg-[#23A6F0] ">
                <p className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                  2
                </p>
              </button>
              <button className="flex items-center justify-center px-5 py-6 border-[#E9E9E9] border-2 bg-custom-white] ">
                <p className="text-[#23A6F0] font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                  3
                </p>
              </button>
              <button className="prev flex justify-center items-center border-2 p-7 border-[#E9E9E9] bg-custom-white ">
                <p className="text-[#23A6F0] font-montserrat font-bold text-sm tracking-[0.0125rem]   ">
                  Next
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ClientsContent />
      <Footer />
    </div>
  );
};
export default ProductListPage;
