import Header from "./Header";
import rightArrow from "../foto/gray-arrow-right.png";
import productFoto2 from "../foto/ProductPageFoto/single-product-1-cover-2.jpg";
import productFoto1 from "../foto/ProductPageFoto/single-product-1-cover-1.jpg";
import thumbProduct1 from "../foto/ProductPageFoto/single-product-1-thumb-1.jpg";
import thumbProduct2 from "../foto/ProductPageFoto/single-product-1-thumb-2.jpg";
import elipsNavy from "../foto/elipsNavy.png";
import elipsBlue from "../foto/elipsBlue.png";
import elipsGreen from "../foto/elipsGreen.png";
import elipsOrange from "../foto/elipsOrange.png";
import descImg from "../foto/ProductPageFoto/descImg.png";
import ClientsContent from "./ClientsContent";
import Footer from "./Footer";
import {
  faCartShopping,
  faStar,
  faEye,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { ProductPageData } from "../data/ProductPageData";
import OtherHeader from "./OtherHeader";

const ProductPage = () => {
  return (
    <div>
      <div className="sm:flex hidden">
        <Header />
      </div>
      <div className="sm:hidden flex">
        <OtherHeader />
      </div>
      <div className="bg-[#FAFAFA] w-full h-auto">
        <div className="container flex justify-center items-start w-screen sm:px-52 py-6 ">
          <div className="flex py-3 justify-center items-start gap-4">
            <a
              href="/"
              className="font-montserrat text-sm font-bold tracking-[0.0125rem] text-[#252B42] "
            >
              Home
            </a>
            <img src={rightArrow} />
            <h6 className="font-montserrat text-sm font-bold tracking-[0.0125rem] text-[#BDBDBD] ">
              Shop
            </h6>
          </div>
        </div>
      </div>
      <div className="flex sm:px-52 px-8 justify-center items-center self-stretch bg-[#FAFAFA] ">
        <div className="container flex flex-col items-start pb-12">
          <div className="row flex sm:flex-row flex-col flex-start gap-8">
            <div className="col-md-6 flex flex-col items-center ">
              <div className="carousel-2 row flex flex-col items-start gap-8 ">
                <div className="carousel-inner col-md-6 flex flex-col items-center pt-1 pr-0 sm:pr-1">
                  <div className="carousel-item flex justify-start items-center sm:justify-center sm:items-center sm:w-[32rem] rounded-md shrink-0 ">
                    <img className="w-full" src={productFoto2} />
                  </div>
                </div>
                <div className="carousel-indicators flex justify-start items-center gap-5 shrink-0">
                  <div className="carouselCaptions flex justify-center items-center shrink-0">
                    <img src={thumbProduct1} />
                  </div>
                  <div className="carouselCaptions flex justify-center items-center shrink-0">
                    <img src={thumbProduct2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 flex flex-col justify-start items-start gap-4 sm:w-[33%] w-9/12 ">
              <h4 className="font-montserrat text-lg font-normal tracking-[0.0125rem] text-[#252B42] ">
                Floating Phone
              </h4>
              <div className="frame-3 inline-flex justify-center items-center gap-2">
                <div className="stars flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f3cd03" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f3cd03" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f3cd03" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f3cd03" }} />
                  <FontAwesomeIcon
                    icon="fa-regular fa-star"
                    style={{ color: "#f3cd03" }}
                  />
                </div>
                <h6 className="font-montserrat text-sm text-custom-gray font-bold tracking-[0.0125rem] ">
                  10 Reviews
                </h6>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-center text-[#252B42] tracking-[0.00625rem] ">
                $1,139.33
              </h3>
              <div className="inline-flex items-center gap-2">
                <h6 className="font-montserrat text-sm font-bold text-custom-gray tracking-[0.0125rem] ">
                  Availability :
                </h6>
                <h6 className="font-montserrat text-sm font-bold text-[#23A6F0] tracking-[0.0125rem]">
                  In Stock
                </h6>
              </div>
              <p className="font-montserrat font-normal text-sm text-[#858585] tracking-[0.0125rem]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr className="h-0.5 bg-[#BDBDBD] my-4 sm:w-[25rem] w-[20rem]"></hr>
              <div className="ellipse inline-flex items-center gap-3">
                <img className="w-7 h-7" src={elipsBlue} />
                <img className="w-7 h-7" src={elipsGreen} />
                <img className="w-7 h-7" src={elipsOrange} />
                <img className="w-7 h-7" src={elipsNavy} />
              </div>
              <div className="product-actions inline-flex items-center pt-16 gap-3">
                <button className="flex items-center border-2 rounded-md bg-custom-bg-color px-6 py-3 ">
                  <h6 className="font-montserrat font-bold text-custom-white text-sm tracking-[0.0125rem] ">
                    Select Options
                  </h6>
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-2 border-[#E8E8E8] bg-custom-white rounded-[50%] ">
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "#000000" }}
                  />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-2 border-[#E8E8E8] bg-custom-white rounded-[50%] ">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "#000000" }}
                  />
                </button>
                <button className="flex justify-center items-center w-10 h-10 border-2 border-[#E8E8E8] bg-custom-white rounded-[50%] ">
                  <FontAwesomeIcon icon={faEye} style={{ color: "#000000" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description w-full flex-col justify-center items-center gap-5 self-stretch  bg-custom-white ">
        <div className="navbar-light w-full flex flex-col items-center py-3">
          <nav className="h-16 w-full flex justify-center gap-4 sm:gap-10">
            <a className="font-montserrat font-semibold text-sm tracking-[0.0125rem] text-custom-gray">
              Description
            </a>
            <a className="font-montserrat font-semibold text-sm tracking-[0.0125rem] text-custom-gray">
              Additional Information
            </a>
            <a className="font-montserrat font-semibold text-sm tracking-[0.0125rem] text-custom-gray">
              Reviews (0)
            </a>
          </nav>
          <hr className="w-11/12 h-2 text-[#ECECEC]"></hr>
        </div>
        <div className="flex flex-col w-full items-center px-10 sm:px-52">
          <div className="container flex flex-col py-12">
            <div className="row flex sm:flex-row flex-col sm:gap-0 gap-8 items-start w-full">
              <div className="col-md-4 flex flex-col items-start w-full h-auto">
                <img src={descImg} className="rounded-md" />
              </div>
              <div className="col-md-4 flex flex-col items-start w-full">
                <div className="card-item flex sm:w-11/12 flex-col items-start gap-6 sm:gap-3 pb-7">
                  <h3 className="font-montserrat font-bold text-2xl text-[#252B42] tracking-[0.00625rem] ">
                    the quick fox jumps over
                  </h3>
                  <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                  <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <div className="col-md-4 flex flex-col items-start w-full">
                <div className="card-item flex flex-col items-start gap-3 pb-7">
                  <h3 className="font-montserrat font-bold text-2xl text-[#252B42] tracking-[0.00625rem] ">
                    the quick fox jumps over
                  </h3>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="card-item flex flex-col items-start gap-3 pb-7">
                  <h3 className="font-montserrat font-bold text-2xl text-[#252B42] tracking-[0.00625rem] ">
                    the quick fox jumps over
                  </h3>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                  <p className="font-montserrat w-full text-sm text-custom-gray tracking-[0.0125rem] font-normal ">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#737373" }}
                    />{" "}
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center pt-28 bg-[#FAFAFA] ">
        <h2 class="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
          BESTSELLER PRODUCTS
        </h2>
        <div class="flex flex-wrap gap-8 justify-center w-full sm:px-52 py-20 ">
          {ProductPageData.map((product) => (
            <div
              key={product.id}
              className="product-card flex flex-col items-start border border-gray-200 shadow-md bg-custom-white"
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
              </div>
            </div>
          ))}
        </div>
      </div>
      <ClientsContent />
      <Footer />
    </div>
  );
};
export default ProductPage;
