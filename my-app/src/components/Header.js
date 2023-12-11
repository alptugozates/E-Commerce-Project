import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
// import { faUser } from "@fortawesome/free-light-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import headerFoto from "../foto/technology1.png";
import largeEllipse from "../foto/largeEllipse.png";
import smallEllipse from "../foto/smallEllipse.png";
import XsEllipse from "../foto/XsEllipse.png";
const Header = () => {
  return (
    <div className="shop-header-1 w-full h-[53.25rem] ">
      <div className="navbar-style flex w-full pb-2 flex-col items-start gap-3 ">
        <div className="navbar-dark w-full h-[3.625rem] py-2.5 px-1 flex justify-center items-center bg-[#252B42] text-custom-white ">
          <div className="navbar-collapse flex w-full h-12 justify-center items-center ">
            <div className="container flex w-full justify-between items-start shrink-0 ">
              <div className="row flex w-full justify-between items-start shrink-0 py-0 px-6 ">
                <div className="col-md-4 flex h-12 items-center gap-2.5">
                  <div className="flex items-center p-2.5 gap-2.5">
                    <FontAwesomeIcon
                      style={{ color: "#FFFFFF" }}
                      icon={faPhone}
                    />
                    <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                      (225) 555-0118
                    </h6>
                  </div>
                  <div className="flex items-center p-2.5 gap-2.5">
                    <FontAwesomeIcon
                      style={{ color: "#FFFFFF" }}
                      icon={faEnvelope}
                    />
                    <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                      michelle.rivera@example.com
                    </h6>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2.5">
                  <h6 className="text-custom-white font-montserrat font-bold pt-1 text-sm tracking-[0.0125rem] ">
                    Follow Us and get a chance to win 80% off
                  </h6>
                </div>
                <div className="flex items-center p-2.5 gap-2.5 h-12 ">
                  <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                    Follow Us :
                  </h6>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-light flex w-full justify-start items-start gap-20 h-16 pr-5 pl-10 ">
          <div className="navbar-brand h-16 items-center py-[0.8125rem] pr-20 ">
            <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
              Bandage
            </h3>
          </div>
          <div className="navbar-collapse flex justify-center items-center gap-[29.4rem] py-0.5 px-0 h-[3.625rem] ">
            <nav className="flex items-start gap-6">
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Home
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Shop
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  About
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Blog
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Contact
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href=""
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Pages
                </a>
              </li>
            </nav>
            <div className="flex items-center">
              <nav className="flex">
                <a href="" className="p-4 pr-0">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    style={{ color: "#23A6F0" }}
                  />
                </a>
                <a
                  className=" text-[#23A6F0] p-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
                  href=""
                >
                  Login / Register
                </a>
                <a href="" className="p-4 flex items-center">
                  <FontAwesomeIcon
                    clas
                    icon={faMagnifyingGlass}
                    size="lg"
                    style={{ color: "#23A6F0" }}
                  />
                </a>
                <a href="" className="p-4 flex items-center">
                  <FontAwesomeIcon
                    size="lg"
                    className="pr-3"
                    icon={faCartShopping}
                    style={{ color: "#23A6F0" }}
                  />
                  <p className="text-base font-normal font-montserrat text-[#23A6F0]">
                    {" "}
                    1
                  </p>
                </a>
                <a href="" className="p-4 flex items-center">
                  <FontAwesomeIcon
                    size="lg"
                    className="pr-3"
                    icon={faHeart}
                    style={{ color: "#23A6F0" }}
                  />
                  <p className="text-base font-normal font-montserrat text-[#23A6F0] ">
                    1{" "}
                  </p>
                </a>
              </nav>
            </div>
          </div>
        </div>
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
                  <img className="w-[50rem] z-[2] relative " src={headerFoto} />
                  <img
                    className="z-[1] w-9/12 ml-32  absolute top-0"
                    src={largeEllipse}
                  />
                  <img
                    className="z-[0] w-[15%] h-auto absolute top-0"
                    src={smallEllipse}
                  />
                  <img
                    className="z-[0] w-[15%] h-auto absolute top-0"
                    src={XsEllipse}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
