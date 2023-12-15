import sliderImg from "../foto/hero-slider.jpg";
const AnotherFluidContent = () => {
  return (
    <div className="relative mt-10 px-[3rem] ">
      <img src={sliderImg} alt="Image" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-start ">
        <div className=" flex flex-col pl-52 w-6/12 justify-center items-start h-auto shrink-0 gap-8 text-custom-white">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-custom-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-6xl leading-[5rem]">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat text-xl font-normal text-custom-white w-7/12">
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
