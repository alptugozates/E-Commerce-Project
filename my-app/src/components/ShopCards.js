import productCartImg from "../foto/productCartImg.jpg";
import productCartImg2 from "../foto/productCartImg2.jpg";
import productCartImg3 from "../foto/productCartImg3.jpg";

const ShopCards = () => {
  return (
    <div className="flex justify-center w-full pb-[8rem]">
      <div className="flex justify-center flex-wrap sm:px-24 px-8 w-full h-full gap-4 ">
        <div className="relative">
          <img
            src={productCartImg}
            alt="img1"
            className="object-cover w-full h-full min-h-[34rem]"
          />
          <div className="absolute bottom-0 left-0 text-custom-white bg-custom-bg-color bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-12 hover:bg-opacity-100">
            <h4 className="font-montserrat font-bold text-2xl tracking-wider sm:w-full w-8/12">
              Top Product Of the Week
            </h4>
            <button className=" font-montserrat font-bold text-sm border border-custom-white hover:font-black rounded-md p-2 w-48  shadow-black shadow-2xl">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 ">
          <div className="relative">
            <img
              src={productCartImg2}
              alt="img2"
              className="object-cover w-full max-w-lg min-h-[24rem]"
            />
            <div className="absolute bottom-0 left-0 text-custom-white bg-custom-bg-color bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
              <h4 className="text-2xl font-montserrat font-bold text-custom-white tracking-wider sm:w-full w-8/12">
                Top Product Of the Week
              </h4>
              <button className="border text-sm font-montserrat font-bold text-custom-white border-custom-white hover:font-black rounded-md p-2 w-48 shadow-black shadow-2xl">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={productCartImg3}
              alt="img3"
              className="object-cover w-full max-w-lg min-h-[24rem]"
            />
            <div className="absolute bottom-0 left-0 text-custom-white bg-custom-bg-color bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
              <h4 className="font-montserrat font-bold text-2xl tracking-wider sm:w-full w-8/12">
                Top Product Of the Week
              </h4>
              <button className="font-montserrat font-bold text-sm border border-custom-white hover:font-black rounded-md p-2 w-48 shadow-black shadow-2xl">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
