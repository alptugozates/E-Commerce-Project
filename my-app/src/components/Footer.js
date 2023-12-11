import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="h-auto self-stretch mt-16">
      <div className="flex jutify-center items-center px-52 bg-[#FAFAFA] ">
        <div className="container flex w-9/12 items-start flex-col shrink-0 py-10 px-0">
          <div className="row flex items-center gap-[50rem] ">
            <div className="col-md-3 flex flex-col items-start gap-3.5 ">
              <nav className="flex items-center py-4 px-20">
                <a className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
                  Bandage
                </a>
              </nav>
            </div>
            <div className="col-md-3 flex items-center">
              <div className="social-media flex justify-center items-center gap-6">
                <a href="">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faFacebook}
                    style={{ color: "#23A6F0" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faInstagram}
                    style={{ color: "#23A6F0" }}
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    size="xl"
                    icon={faTwitter}
                    style={{ color: "#23A6F0" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full bg-[#E6E6E6] h-[0.07rem] "></hr>
      <div className="flex justify-center items-center px-52 bg-[#FFF]  ">
        <div className="container flex flex-col items-start shrink-0 py-14 px-0">
          <div className="row flex items-start gap-20">
            <div className="col-md-2 flex flex-col items-start gap-5 w-44 ">
              <h5 className="font-montserrat font-bold text-lg">
                Company Info
              </h5>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  About Us
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Carrier
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  We are hiring
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Block
                </a>
              </div>
            </div>
            <div className="col-md-2 flex flex-col items-start gap-5 w-44 ">
              <h5 className="font-montserrat font-bold text-lg">Features</h5>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  About Us
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Carrier
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  We are hiring
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Block
                </a>
              </div>
            </div>
            <div className="col-md-2 flex flex-col items-start gap-5 w-44 ">
              <h5 className="font-montserrat font-bold text-lg">Features</h5>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Business Marketing
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  User Analytic
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Live Chat
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Unlimited Support
                </a>
              </div>
            </div>
            <div className="col-md-2 flex flex-col items-start gap-5 w-32 ">
              <h5 className="font-montserrat font-bold text-lg">Resources</h5>
              <div className="flex flex-col items-start gap-3.5">
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  IOS & Android
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Watch a Demo
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  Customers
                </a>
                <a
                  href=""
                  className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-gray "
                >
                  API
                </a>
              </div>
            </div>
            <div className="col-md-4 flex flex-col items-start gap-6">
              <h5 className="font-montserrat font-bold text-base tracking-[0.00625] text-[#252B42] ">
                Get In Touch
              </h5>
              <div className="custom-form ">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 font-montserrat font-normal text-sm tracking-[0.0125rem] bg-[#F9F9F9] border-2  border-[#E6E6E6] rounded-md flex items-center py-4 pr-20 pl-5"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center shrink-0 py-4 px-6 bg-[#23A6F0] text-custom-white border-2 border-solid border-[#E6E6E6] rounded-r-md"
                  >
                    <p className="font-montserrat font-normal text-sm tracking-[0.0125rem] ">
                      Subscribe
                    </p>
                  </button>
                </form>
                <p className="font-montserrat font-normal text-xs tracking-[0.0125rem] text-custom-gray leading-8">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#FAFAFA] py-0 px-52">
        <div className="container flex flex-col items-start shrink-0 px-0 py-8">
          <p className="font-montserrat font-bold tracking-[0.0125rem] text-base text-custom-gray ">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
