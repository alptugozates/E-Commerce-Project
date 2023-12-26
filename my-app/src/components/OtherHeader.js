import {
  faArrowRight,
  faCartShopping,
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const OtherHeader = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  };
  return (
    <div className="navbar-light sm:bg-white bg-[#F6F6F6] flex w-full sm:flex-row  flex-col sm:justify-start sm:items-start items-center justify-center gap-20 sm:pr-5 sm:px-28 px-16 pt-6 pb-20 sm:pb-0">
      <div className="navbar-brand flex sm:h-16 h-auto items-center py-4 sm:pr-0 sm:gap-0 gap-16 ">
        <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
          Bandage
        </h3>
        <div className="flex sm:hidden gap-8">
          <FontAwesomeIcon
            size="xl"
            icon={faMagnifyingGlass}
            style={{ color: "#737373" }}
          />
          <FontAwesomeIcon
            size="xl"
            icon={faCartShopping}
            style={{ color: "#737373" }}
          />
          <FontAwesomeIcon
            size="xl"
            icon={faList}
            style={{ color: "#737373" }}
          />
        </div>
      </div>
      <div className="navbar-collapse flex sm:flex-row flex-col justify-center items-center sm:gap-[25rem] py-0.5 px-0 sm:h-[3.625rem] ">
        <nav className="flex sm:flex-row flex-col items-center justify-center sm:items-start gap-10">
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              Home
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/products"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              Shop
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/about"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              About
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/product-page"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              Product
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href=""
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              Pricing
            </a>
          </li>
          <li className="flex w-11 h-6 justify-center items-center">
            <a
              href="/contact"
              className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-3xl sm:text-base "
            >
              Contact
            </a>
          </li>
        </nav>
        <div className="sm:flex hidden items-center gap-8">
          <a
            className=" text-[#23A6F0] p-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
            href=""
          >
            Login
          </a>
          <button
            onClick={handleClick}
            className="border-2 bg-[#23A6F0] rounded-md flex items-center py-3 px-6 "
          >
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
