import readerBook from "../foto/book-reader.png";
import carbonBook from "../foto/carbon-book.png";
import arrowImg from "../foto/arrow-growth.png";
const Features = () => {
  return (
    <div className="flex sm:px-52 sm:flex-row flex-col justify-center items-center">
      <div className="container flex flex-col shrink-0 items-center py-20 gap-20">
        <div className="row flex flex-col items-center">
          <div className="main-content flex flex-col items-center gap-4">
            <h2 className="font-montserrat text-xl font-normal tracking-[0.0125rem] text-custom-gray text-center ">
              Featured Products
            </h2>
            <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-center text-[#252B42] ">
              THE BEST SERVICES
            </h3>
            <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] text-custom-gray ">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
        <div className="row flex sm:flex-row flex-col justify-center items-center ">
          <div className="col-md-4 flex flex-col items-center sm:w-4/12">
            <div className="card flex flex-col items-center py-8 gap-6">
              <div className="icon flex items-center justify-center">
                <img src={readerBook} />
              </div>
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
                Easy Wins
              </h3>
              <p className="font-montserrat font-normal text-sm text-custom-gray tracking-[0.0125rem] text-center w-11/12 ">
                Get your best looking smile now!
              </p>
            </div>
          </div>
          <div className="col-md-4 flex flex-col items-center sm:w-4/12">
            <div className="card flex flex-col items-center py-8  gap-6">
              <div className="icon flex items-center justify-center">
                <img src={carbonBook} />
              </div>
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
                Concrete
              </h3>
              <p className="font-montserrat font-normal text-sm text-custom-gray tracking-[0.0125rem] text-center w-8/12 ">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
          </div>
          <div className="col-md-4 flex flex-col items-center sm:w-4/12">
            <div className="card flex flex-col items-center py-8 gap-6">
              <div className="icon flex items-center justify-center">
                <img src={arrowImg} />
              </div>
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
                Easy Wins
              </h3>
              <p className="font-montserrat font-normal text-sm text-custom-gray tracking-[0.0125rem] text-center w-9/12 ">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
