import productCartImg from "../foto/productCartImg.jpg";
import productCartImg2 from "../foto/productCartImg2.jpg";
import productCartImg3 from "../foto/productCartImg3.jpg";

const ShopCards = () => {
  return (
    <div className="flex items-center w-full pr-44 pl-44">
      <div className="container flex flex-col items-center px-0">
        <div className="row flex items-start gap-4">
          <div className="col-md-4 flex justify-center items-center h-auto ">
            <div className="card-item shrink-0 shadow-md relative">
              <div className="media-bg flex justify-center items-center shrink-0">
                <img className="z-[0]" src={productCartImg} />
                <div className="absolute left-0 bottom-0 flex w- flex-col justify-end items-start gap-6 bg-custom-bg-color pt-16 pr-12 pb-12 pl-16">
                  <h6 className="text-[#FFFFFF] font-montserrat font-bold tracking-[0.00625rem] w-8/12 text-2xl">
                    Top Product Of the Week
                  </h6>
                  <button className="btn flex font-bold font-montserrat tracking-[0.0125rem] text-base text-custom-white border-2 flex-col gap-3 items-center rounded-md py-4 px-10">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  flex flex-col justify-center items-start gap-6">
            <div className="card-item w-auto h-6/12 relative shadow-md">
              <div className=" media-bg flex justify-center items-center shrink-0">
                <img src={productCartImg2} />
                <div className="card-content absolute left-0 bottom-0 flex flex-col justify-end items-start gap-6 bg-custom-bg-color pt-12 pr-14 pb-6 pl-8">
                  <h6 className="text-[#FFFFFF] font-montserrat font-normal tracking-[0.00625rem] text-xl">
                    Top Product Of the Week
                  </h6>
                  <button className="btn flex font-bold font-montserrat tracking-[0.0125rem] text-base text-custom-white border-2 flex-col gap-3 items-center rounded-md py-4 px-10">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
            <div className="card-item w-auto h-6/12 relative shadow-md">
              <div className=" media-bg flex justify-center items-center shrink-0">
                <img src={productCartImg3} />
                <div className="card-content absolute left-0 bottom-0 flex flex-col justify-end items-start gap-6 bg-custom-bg-color pt-12 pr-14 pb-6 pl-8">
                  <h6 className="text-[#FFFFFF] font-montserrat font-normal tracking-[0.00625rem] text-xl">
                    Top Product Of the Week
                  </h6>
                  <button className="btn flex font-bold font-montserrat tracking-[0.0125rem] text-base text-custom-white border-2 flex-col gap-3 items-center rounded-md py-4 px-10">
                    EXPLORE ITEMS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
