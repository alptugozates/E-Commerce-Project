import Footer from "./Footer";
import Header from "./Header";
import { productsData } from "../data/ProductsData";
import rightArrow from "../foto/gray-arrow-right.png";
import category1 from "../foto/foto ProductList/card-cover-1.jpg";
import category2 from "../foto/foto ProductList/card-cover-2.jpg";
import category3 from "../foto/foto ProductList/card-cover-3.jpg";
import category4 from "../foto/foto ProductList/card-cover-4.jpg";
import category5 from "../foto/foto ProductList/card-cover-5.jpg";
import productIcon from "../foto/foto ProductList/product-icon.png";
import vectorIcon from "../foto/foto ProductList/Vector.png";
import elipsNavy from "../foto/elipsNavy.png";
import elipsBlue from "../foto/elipsBlue.png";
import elipsGreen from "../foto/elipsGreen.png";
import elipsOrange from "../foto/elipsOrange.png";
import ClientsContent from "./ClientsContent";

const ProductList = () => {
  return (
    <div>
      <Header />
      <div className="background bg-[#FAFAFA] w-full py-6 ">
        <div className="container flex items-center justify-evenly">
          <div className="row flex justify-center items-center">
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
      <div className="category flex py-0 px-44 items-center justify-center self-stretch bg-[#FAFAFA] ">
        <div className="container flex flex-col items-center pb-12">
          <div className="row flex items-start gap-4">
            <div className="col-md-4 flex flex-col justify-center items-center">
              <div className="card-item shrink-0 relative">
                <div className="absolute inset-0 bg-[#212121] bg-opacity-25"></div>
                <img src={category1} className="w-full h-auto" alt="Category" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-base text-custom-white">
                    CLOTHS
                  </h5>
                  <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-white">
                    5 Items
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 flex flex-col justify-center items-center">
              <div className="card-item shrink-0 relative">
                <div className="absolute inset-0 bg-[#212121] bg-opacity-25"></div>
                <img src={category2} className="w-full h-auto" alt="Category" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-base text-custom-white">
                    CLOTHS
                  </h5>
                  <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-white">
                    5 Items
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 flex flex-col justify-center items-center">
              <div className="card-item shrink-0 relative">
                <div className="absolute inset-0 bg-[#212121] bg-opacity-25"></div>
                <img src={category3} className="w-full h-auto" alt="Category" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-base text-custom-white">
                    CLOTHS
                  </h5>
                  <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-white">
                    5 Items
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 flex flex-col justify-center items-center">
              <div className="card-item shrink-0 relative">
                <div className="absolute inset-0 bg-[#212121] bg-opacity-25"></div>
                <img src={category4} className="w-full h-auto" alt="Category" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-base text-custom-white">
                    CLOTHS
                  </h5>
                  <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-white">
                    5 Items
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 flex flex-col justify-center items-center">
              <div className="card-item shrink-0 relative">
                <div className="absolute inset-0 bg-[#212121] bg-opacity-25"></div>
                <img src={category5} className="w-full h-auto" alt="Category" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-base text-custom-white">
                    CLOTHS
                  </h5>
                  <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-white">
                    5 Items
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter flex py-0 px-52 justify-between items-center self-stretch bg-custom-white">
        <div className="container flex justify-between items-center gap-20 px-0 py-6">
          <div className="sort flex items-center gap-4 text-custom-gray">
            <p className="font-montserrat text-sm font-bold tracking-[0.0125rem]">
              Showing 12 results
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
              <select
                className="border-2 bg-[#F9F9F9] border-[#DDDDDD] text-custom-gray px-5 py-2.5 font-montserrat font-normal text-sm tracking-[0.0125rem] "
                id="dropdown"
              >
                <option value="">Popularity</option>
                <option value="option1">Increasing price</option>
                <option value="option2">Decreasing price</option>
                <option value="option3">Alphabetical A-Z</option>
                <option value="option4">Top sellers</option>
              </select>
            </div>
            <button className="btn flex items-center py-3 px-6 border-2 bg-[#23A6F0] rounded-md">
              <p className="font-montserrat text-custom-white font-bold text-sm tracking-[0.0125rem]">
                Filter
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-wrap gap-8 justify-center w-full px-52 py-20">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="product-card flex flex-col items-start"
              >
                <div className="flex flex-col justify-center items-center">
                  <img src={product.image} alt="Product Image" />
                </div>
                <div className="flex flex-col items-center self-stretch gap-5 px-6 pt-6 pb-9">
                  <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42] ">
                    {product.name}
                  </h5>
                  <p className="font-montserrat font-bold text-custom-gray text-sm ">
                    {product.description}
                  </p>
                  <div className="flex flex-start items-start gap-2">
                    <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#BDBDBD] ">
                      {product.price}
                    </h5>
                    <h5 className="font-montserrat font-bold tracking-[0.00625rem] text-center text-sm text-[#23856D] ">
                      {product.price2}
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
export default ProductList;
