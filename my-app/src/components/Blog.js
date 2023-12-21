import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogImg from "../foto/blogimg.png";
import blogImg2 from "../foto/blogImg2.png";
import elipsNavy from "../foto/elipsNavy.png";
import elipsBlue from "../foto/elipsBlue.png";
import elipsGreen from "../foto/elipsGreen.png";
import elipsOrange from "../foto/elipsOrange.png";
import clockIcon from "../foto/clockicon.png";
import antDesignIcon from "../foto/ant-design.png";
import chartIcon from "../foto/carbon-chart.png";
import arrowRight from "../foto/arrow-right.png";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faCartShopping,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const Blog = () => {
  return (
    <div className="sm:flex hidden sm:flex-row flex-col justify-center items-center sm:px-52 w-full">
      <div className="container flex flex-col items-center gap-24 shrink-0 px-0 py-20">
        <div className="row flex flex-col items-center">
          <div className="main-content flex flex-col items-center gap-3">
            <h6 className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-[#23A6F0] ">
              Practice Advice
            </h6>
            <h3 className="font-montserrat font-bold text-[2.5rem] leading-[3.125rem] text-[#252B42] ">
              Featured Posts
            </h3>
          </div>
        </div>
        <div className="row flex sm:flex-row flex-col items-center sm:px-0 px-10 ">
          <div className="col-md-6 flex flex-col items-center">
            <div className="horizontal-product flex sm:flex-row flex-col items-center sm:items-start bg-custom-white relative">
              <div className="self-stretch relative">
                <img className="w-full" src={blogImg} />
                <div className="tag absolute top-5 left-5 inline-flex items-center py-1 px-3 bg-[#E74040] rounded">
                  <h6 className="font-montserrat font-bold tracking-[0.0125rem] text-sm text-custom-white">
                    Sale
                  </h6>
                </div>
              </div>
              <div className="product-actions absolute z-10 hidden sm:inline-flex flex-start gap-4 bottom-5 left-5">
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faCartShopping}
                />
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faEye}
                />
              </div>
              <div className="frame-3 flex items-start self-stretch flex-col pt-8 px-6 pb-6 gap-3 w-6/12">
                <div className="frame-1 flex justify-between items-center self-stretch gap-3">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-sm font-montserrat tracking-[0.0125rem] text-[#23A6F0] ">
                      English Department
                    </p>
                  </div>
                  <div className="frame-4 flex items-center gap-1.5 p-1.5 bg-[#252B42] rounded-3xl ">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffce31" }}
                    />
                    <p className="text-custom-white font-montserrat text-xs tracking-[0.0125rem] ">
                      4.9
                    </p>
                  </div>
                </div>
                <h5 className="font-montserrat font-bold text-base text-[#252B42] tracking-[0.0625rem]">
                  Graphic Design
                </h5>
                <p className="font-montserrat font-normal tracking-[0.0125rem] text-sm text-custom-gray ">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="sales flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ color: "#737373" }}
                  />
                  <p className="font-montserrat font-bold text-sm text-custom-gray">
                    15 Sales
                  </p>
                </div>
                <div className="prices flex items-start gap-6 px-1 py-2">
                  <p className="font-montserrat font-bold text-base tracking-[0.00625rem] w-[3rem] text-[#BDBDBD] text-center ">
                    $16.48
                  </p>
                  <p className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#23856D] text-center ">
                    $6.48
                  </p>
                </div>
                <div className="product-colors flex items-center gap-2.5">
                  <img src={elipsBlue} />
                  <img src={elipsGreen} />
                  <img src={elipsOrange} />
                  <img src={elipsNavy} />
                </div>
                <div className="frame-1 flex sm:flex-row flex-col items-center justify-start gap-4 px-0 py-4 self-stretch ">
                  <div className="frame flex items-center gap-1.5">
                    <div className="icon flex justify-center items-center">
                      <img src={clockIcon} />
                    </div>
                    <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                      22h...
                    </p>
                  </div>
                  <div className="frame flex items-center gap-1.5">
                    <div className="icon flex justify-center items-center">
                      <img src={chartIcon} />
                    </div>
                    <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                      64 Lessons
                    </p>
                  </div>
                  <div className="frame flex items-center gap-1.5">
                    <div className="icon flex justify-center items-center">
                      <img src={antDesignIcon} />
                    </div>
                    <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                      Progress
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2.5 py-2.5 px-5 border-2 border-[#23A6F0] rounded-3xl">
                  <p className="font-montserrat font-bold text-sm tracing-[0.0125rem] text-[#23A6F0]">
                    Learn More
                  </p>
                  <img src={arrowRight} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 flex flex-col items-center">
            <div className="horizontal-product flex items-start bg-custom-white relative">
              <div className="self-stretch relative">
                <img src={blogImg2} />
                <div className="tag absolute top-5 left-5 inline-flex items-center py-1 px-3 bg-[#E74040] rounded">
                  <h6 className="font-montserrat font-bold tracking-[0.0125rem] text-sm text-custom-white">
                    Sale
                  </h6>
                </div>
              </div>
              <div className="product-actions absolute z-10 inline-flex flex-start gap-4 bottom-5 left-5">
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faHeart}
                />
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faCartShopping}
                />
                <FontAwesomeIcon
                  style={{ color: "#252b42" }}
                  className="flex justify-center items-center p-3 border-2 rounded-[50%] bg-custom-white"
                  icon={faEye}
                />
              </div>
              <div className="frame-3 flex items-start self-stretch flex-col pt-8 px-6 pb-6 gap-3 w-6/12">
                <div className="frame-1 flex justify-between items-center self-stretch gap-3">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-sm font-montserrat tracking-[0.0125rem] text-[#23A6F0] ">
                      English Department
                    </p>
                  </div>
                  <div className="frame-4 flex items-center gap-1.5 p-1.5 bg-[#252B42] rounded-3xl ">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffce31" }}
                    />
                    <p className="text-custom-white font-montserrat text-xs tracking-[0.0125rem] ">
                      4.9
                    </p>
                  </div>
                </div>
                <h5 className="font-montserrat font-bold text-base text-[#252B42] tracking-[0.0625rem]">
                  Graphic Design
                </h5>
                <p className="font-montserrat font-normal tracking-[0.0125rem] text-sm text-custom-gray ">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="sales flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{ color: "#737373" }}
                  />
                  <p className="font-montserrat font-bold text-sm text-custom-gray">
                    15 Sales
                  </p>
                </div>
                <div className="prices flex items-start gap-6 px-1 py-2">
                  <p className="font-montserrat font-bold text-base tracking-[0.00625rem] w-[3rem] text-[#BDBDBD] text-center ">
                    $16.48
                  </p>
                  <p className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#23856D] text-center ">
                    $6.48
                  </p>
                </div>
                <div className="product-colors flex items-center gap-2.5">
                  <img src={elipsBlue} />
                  <img src={elipsGreen} />
                  <img src={elipsOrange} />
                  <img src={elipsNavy} />
                </div>
                <div className="frame-1 flex items-center justify-start gap-4 px-0 py-4 self-stretch ">
                  <div className="icon flex justify-center items-center">
                    <img src={clockIcon} />
                  </div>
                  <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                    22h...
                  </p>
                  <div className="frame flex items-center gap-1.5">
                    <div className="icon flex justify-center items-center">
                      <img src={chartIcon} />
                    </div>
                    <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                      64 Lessons
                    </p>
                  </div>
                  <div className="frame flex items-center gap-1.5">
                    <div className="icon flex justify-center items-center">
                      <img src={antDesignIcon} />
                    </div>
                    <p className="font-montserrat font-normal text-custom-gray tracking-[0.0125rem] text-xs ">
                      Progress
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2.5 py-2.5 px-5 border-2 border-[#23A6F0] rounded-3xl">
                  <p className="font-montserrat font-bold text-sm tracing-[0.0125rem] text-[#23A6F0]">
                    Learn More
                  </p>
                  <img src={arrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
