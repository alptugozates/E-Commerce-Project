import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import elipsNavy from "../foto/elipsNavy.png";
import elipsBlue from "../foto/elipsBlue.png";
import elipsGreen from "../foto/elipsGreen.png";
import elipsOrange from "../foto/elipsOrange.png";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import axiosInstance from "../axios/axiosInstance";
import ClientsContent from "../components/ClientsContent";

const ProductDetailPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const history = useHistory();
  console.log("productId", product_id);

  useEffect(() => {
    axiosInstance
      .get(`/products/${product_id}`)
      .then((response) => {
        setProduct(response.data);
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [product_id]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Header />
      <div className="flex sm:px-52 px-8 justify-center py-28 items-center self-stretch bg-[#FAFAFA] ">
        <div className="container flex flex-col items-start pb-12">
          <div className="row flex sm:flex-row flex-col flex-start gap-8">
            <div>
              <button
                className="flex items-center border-2 rounded-md bg-turquoise px-6 py-3 hover:bg-[#63c6ff] duration-300 "
                onClick={handleGoBack}
              >
                <h6 className="font-montserrat font-bold text-custom-white text-sm tracking-[0.0125rem] ">
                  Go Back
                </h6>
              </button>
            </div>

            <div className="carousel-2 row flex flex-col items-start gap-8 ">
              <div className="carousel-inner col-md-6 flex flex-col items-center pt-1 pr-0 sm:pr-1">
                <div className="carousel-item flex justify-start items-center sm:justify-center sm:items-center sm:w-[32rem] rounded-md shrink-0 ">
                  <img
                    className="w-[25rem] h-[35rem] object-cover "
                    src={product?.images[0].url}
                    alt={`Product ${product?.id}`}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 flex flex-col justify-start items-start gap-4 sm:w-[33%] w-9/12 ">
              <h4 className="font-montserrat text-lg font-normal tracking-[0.0125rem] text-[#252B42] ">
                {product?.name}
              </h4>
              <div className="frame-3 inline-flex justify-center items-center gap-2">
                <div className="stars flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={
                        index < product?.rating ? faStar : "fa-regular fa-star"
                      }
                      style={{
                        color: index < product?.rating ? "#f3cd03" : "#ccccc",
                      }}
                    />
                  ))}
                  <p className="font-montserrat font-bold text-sm">
                    {product?.rating}
                  </p>
                </div>
                <h6 className="font-montserrat text-sm text-custom-gray font-bold tracking-[0.0125rem] ">
                  10 Reviews
                </h6>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-center text-[#252B42] tracking-[0.00625rem] ">
                {product?.price} ₺
              </h3>
              <div className="inline-flex items-center gap-2">
                <h6 className="font-montserrat text-sm font-bold text-custom-gray tracking-[0.0125rem] ">
                  Availability :
                </h6>
                <h6 className="font-montserrat text-sm font-bold text-turquoise tracking-[0.0125rem]">
                  In Stock
                </h6>
              </div>
              <p className="font-montserrat font-normal text-sm text-[#858585] tracking-[0.0125rem]">
                {product?.description}
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
      <ClientsContent />
      <Footer />
    </div>
  );
};
export default ProductDetailPage;
