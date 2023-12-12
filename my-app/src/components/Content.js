import FeaturedImg from "../foto/FeaturedImg.png";
import FeaturedImg2 from "../foto/FeaturedImg2.png";
const Content = () => {
  return (
    <div className="content flex px-52 py-0 justify-center items-center">
      <div className="container flex py-20 flex-col items-center shrink-0">
        <div className="row flex items-center self-stretch gap-20">
          <div className="col-md-6 flex items-start gap-8 w-6/12">
            <div className="hero-cover flex items-start justify-center gap-4 h-auto">
              <img src={FeaturedImg} />
              <img src={FeaturedImg2} />
            </div>
          </div>
          <div className="row-md-5 flex flex-col items-start gap-4">
            <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#23A6F0] ">
              Featured Products
            </h5>
            <h2 className="font-montserrat font-bold text-5xl text-[#252B42] tracking-[0.0125rem] ">
              We love what we do
            </h2>
            <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] w-[55%]  ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] w-[55%] ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
