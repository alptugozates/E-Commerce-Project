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
          <div className="row flex items-center gap-[37rem] ">
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
    </div>
  );
};
export default Footer;
