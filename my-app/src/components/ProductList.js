import Footer from "./Footer";
import Header from "./Header";
import rightArrow from "../foto/gray-arrow-right.png";
const ProductList = () => {
  return (
    <div>
      <Header />
      <div className="container flex items-center justify-evenly  bg-[#FAFAFA] w-full">
        <div className="row flex justify-center items-center">
          <div className="col-md-6 flex items-center">
            <h2 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
              Shop
            </h2>
          </div>
        </div>
        <div className="col-md-6 flex items-end">
          <div className="scrumb flex items-center gap-4">
            <a
              href="/"
              className="font-montserrat font-bold text-[#252B42] tracking-[0.0125rem] text-sm "
            >
              Home
            </a>
            <img className="w-2 h-auto " src={rightArrow} />
            <h6 className="font-montserrat text-sm font-bold tracking-[0.0125rem] text-[#BDBDBD] ">
              Shop
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductList;
