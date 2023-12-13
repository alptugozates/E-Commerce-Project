import faBrands1 from "../foto/fa-brands-1.png";
import faBrands2 from "../foto/fa-brands-2.png";
import faBrands3 from "../foto/fa-brands-3.png";
import faBrands4 from "../foto/fa-brands-4.png";
import faBrands5 from "../foto/fa-brands-5.png";
import faBrands6 from "../foto/fa-brands-6.png";
import headerFoto from "../foto/technology1.png";
import largeEllipse from "../foto/largeEllipse.png";
import smallEllipse from "../foto/smallEllipse.png";
import XsEllipse from "../foto/XsEllipse.png";

const ClientsContent = () => {
  return (
    <div>
      <div className="container-fluid flex justify-center w-11/12 ml-10 items-center mt-10 pb-1 rounded-[1.25rem] bg-gradient-to-r from-[#96E9FB] to-[#ABECD6]  ">
        <div className="row flex justify-center items-center  shrink-0 pl-52 h-auto ">
          <div className="col-md-6 flex flex-col w-6/12 justify-center items-start h-auto shrink-0 gap-8">
            <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#2A7CC7] ">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-6xl leading-[5rem] ">
              NEW COLLECTION
            </h1>
            <h4 className="font-montserrat text-xl font-normal text-custom-gray w-6/12">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex items-start gap-2.5">
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
                <img className="w-[50rem] z-[3] relative " src={headerFoto} />
                <img
                  className="z-[2] w-9/12 ml-32  absolute top-0"
                  src={largeEllipse}
                />
                <img
                  className="z-[1] w-[15%] h-auto absolute top-0"
                  src={smallEllipse}
                />
                <img
                  className="z-[0] w-4 mr-8 mt-32 absolute right-0 "
                  src={XsEllipse}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clients-1 flex px-52 w-full justify-center items-center bg-[#FFF] pt-10">
        <div className="container flex flex-col items-center shrink-0 ">
          <div className="row flex justify-center items-center gap-32 px-0 py-28">
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands1} />
            </div>
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands2} />
            </div>
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands3} />
            </div>
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands4} />
            </div>
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands5} />
            </div>
            <div className="col-md-2 flex flex-col items-center">
              <img src={faBrands6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClientsContent;
