import headerFoto from "../foto/technology1.png";
import largeEllipse from "../foto/largeEllipse.png";
import smallEllipse from "../foto/smallEllipse.png";
import XsEllipse from "../foto/XsEllipse.png";

const FluidContent = () => {
  return (
    <div className="container-fluid flex sm:flex-row flex-col justify-center sm:w-11/12 sm:ml-10 items-start sm:items-center sm:mt-10 pb-1 sm:px-0 px-4 rounded-[1.25rem] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]  ">
      <div className="row flex sm:flex-row flex-col justify-center items-center sm:gap-0 gap-10 shrink-0 sm:pl-52 sm:h-auto sm:pt-0 pt-[5rem] ">
        <div className="col-md-6 flex flex-col sm:w-6/12 justify-center items-center sm:items-start h-auto shrink-0 gap-10 sm:gap-8">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#2A7CC7] ">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl leading-[5rem] text-center sm:text-start ">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat text-xl font-normal text-custom-gray text-center sm:text-start w-9/12 sm:w-6/12">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex items-center sm:items-start gap-2.5">
            <button className="btn-primary flex flex-col items-center gap-2.5 py-4 px-10 bg-[#23A6F0] rounded-md ">
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625] text-custom-white ">
                SHOP NOW
              </h3>
            </button>
          </div>
        </div>
        <div className="col-md-6 flex justify-center items-center shrink-0 py-0 px-1.5">
          <div className="hero-cover-1 flex justify-center items-center shrink-0 pr-1 pl-1.5">
            <div className=" relative flex">
              <img
                className="w-[25rem] sm:w-[50rem] z-[3] relative "
                src={headerFoto}
              />
              <img
                className="z-[2] w-9/12 sm:ml-32 ml-10 sm:mt-0 mt-4  absolute top-0"
                src={largeEllipse}
              />
              <img
                className="z-[1] w-[15%] h-auto absolute top-0"
                src={smallEllipse}
              />
              <img
                className="z-[0] w-4 sm:mr-8 sm:mt-32 absolute right-0 "
                src={XsEllipse}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FluidContent;
