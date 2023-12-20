import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OtherHeader = () => {
  return (
    <div className="navbar-light flex w-full justify-start items-start gap-20 pr-5 px-28 pt-6 ">
      <div className="navbar-brand h-16 items-center py-4 pr-20 ">
        <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
          Bandage
        </h3>
      </div>
      <div className="navbar-collapse flex justify-center items-center gap-[29.4rem] py-0.5 px-0 h-[3.625rem] ">
        <nav className="flex items-start gap-12">
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
              href="/product-page"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
            >
              Product
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href=""
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
            >
              Pricing
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/contact"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
            >
              Contact
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/product-page"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
            >
              Pages
            </a>
          </li>
        </nav>
        <div className="flex items-center gap-8">
          <a
            className=" text-[#23A6F0] p-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
            href=""
          >
            Login
          </a>
          <button className="border-2 bg-[#23A6F0] rounded-md flex items-center py-3 px-6 ">
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#ffffff" }}
              />
              <p className="font-montserrat tex-sm font-bold tracking-[0.0125rem] text-custom-white ">
                Become a member
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default OtherHeader;
