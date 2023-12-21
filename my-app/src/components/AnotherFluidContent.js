import sliderImg from "../foto/hero-slider.jpg";
const AnotherFluidContent = () => {
  return (
    <div className="relative mt-10 sm:px-[3rem] ">
      <img
        src={sliderImg}
        alt="Image"
        className="sm:w-full sm:h-auto w-auto h-[40rem] object-cover "
      />
      <div className="absolute inset-0 flex items-center justify-center sm:justify-start ">
        <div className=" flex flex-col sm:pl-52 sm:w-6/12 justify-center items-center sm:items-start h-auto shrink-0 gap-8 text-custom-white">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-custom-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-5xl sm:w-full w-6/12 text-center sm:text-start leading-[3rem] sm:leading-[5rem]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat text-xl font-normal text-custom-white text-center sm:text-start w-5/12 sm:w-7/12">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex items-start gap-2.5">
            <button className="btn-primary flex flex-col items-center gap-2.5 py-4 px-10 bg-[#2DC071] rounded-md ">
              <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625] text-custom-white">
                SHOP NOW
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnotherFluidContent;
