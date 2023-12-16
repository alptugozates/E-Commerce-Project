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

const Header = () => {
  return (
    <div className="shop-header-1 w-full h-auto ">
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
                  href="/"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Home
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/products"
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
                  href="/blog"
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
      </div>
    </div>
  );
};
export default Header;
