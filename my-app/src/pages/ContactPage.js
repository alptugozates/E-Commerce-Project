import heroImg from "../foto/TeamFoto/contact-hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import OtherHeader from "../components/OtherHeader";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full">
      <OtherHeader />
      <div className="flex sm:flex-row flex-col w-full sm:items-start sm:text-start sm:justify-between items-center text-center sm:px-52 py-20">
        <div className="flex flex-col gap-14 sm:gap-10 sm:w-4/12">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-[#252B42]  ">
            CONTACT US{" "}
          </h5>
          <h1 className="font-montserrat font-bold text-5xl tracking-[0.0125rem] text-[#252B42] ">
            Get in touch today
          </h1>
          <p className="font-montserrat text-xl font-normal tracking-[0.0125rem] text-custom-gray">
            We know how large objects will act, but things on a small scale
          </p>
          <p className="font-montserrat font-bold text-2xl text-[#252B42] tracking-[0.0625rem] ">
            Phone ; +451 215 215
          </p>
          <p className="font-montserrat font-bold text-[#252B42] text-2xl ">
            Fax : +451 215 215
          </p>
          <div className="flex items-center justify-center sm:items-start sm:justify-start gap-6">
            <FontAwesomeIcon
              size="2xl"
              style={{ color: "#252B42" }}
              icon={faTwitter}
            />
            <FontAwesomeIcon
              size="2xl"
              style={{ color: "#252B42" }}
              icon={faFacebook}
            />
            <FontAwesomeIcon
              size="2xl"
              style={{ color: "#252B42" }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              size="2xl"
              style={{ color: "#252B42" }}
              icon={faLinkedin}
            />
          </div>
        </div>
        <div className="w-full pt-10 sm:pt-0 sm:w-1/2">
          <img className="w-full h-auto" src={heroImg} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-12 sm:px-52 gap-20">
        <div className="flex flex-col items-center gap-4 sm:w-5/12 ">
          <h6 className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-[#252B42] sm:w-full text-center ">
            VISIT OUR OFFICE
          </h6>
          <h2 className="font-montserrat font-bold text-4xl tracking-[0.0125rem] text-[#252B42] text-center ">
            We help small businesses with big ideas
          </h2>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 sm:bg-custom-white bg-[#FAFAFA] items-center w-full">
          <div className="flex flex-col items-center justify-start sm:py-0 py-10 gap-4 sm:w-1/3">
            <FontAwesomeIcon
              size="2xl"
              style={{ color: "#23A6F0" }}
              icon={faPhone}
            />
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] ">
              georgia.young@example.com
            </p>
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] ">
              georgia.young@ple.com
            </p>
            <h5 className="font-montserrat font-bold text-base tracking-[0.00625] text-[#252B42] ">
              Get Support
            </h5>
            <button className="border-2 border-turquoise rounded-3xl px-8 py-4 ">
              <p className="font-montserrat font-bold text-base text-turquoise text-center tracking-[0.0125rem]  ">
                Submit Request
              </p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 sm:w-1/3 bg-[#252B42] py-20 px-10 ">
            <FontAwesomeIcon
              size="2xl"
              sty
              icon={faLocationDot}
              style={{ color: "#23A6F0" }}
            />
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-custom-white ">
              georgia.young@example.com
            </p>
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-custom-white ">
              georgia.young@ple.com
            </p>
            <h5 className="font-montserrat font-bold text-base tracking-[0.00625] text-custom-white ">
              Get Support
            </h5>
            <button className="border-2 border-turquoise rounded-3xl px-8 py-4 ">
              <p className="font-montserrat font-bold text-base text-turquoise text-center tracking-[0.0125rem]  ">
                Submit Request
              </p>
            </button>
          </div>
          <div className="flex flex-col items-center justify-start sm:py-0 py-10 gap-4 sm:w-1/3">
            <FontAwesomeIcon
              size="2xl"
              sty
              icon={faEnvelope}
              style={{ color: "#23A6F0" }}
            />
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] ">
              georgia.young@example.com
            </p>
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] ">
              georgia.young@ple.com
            </p>
            <h5 className="font-montserrat font-bold text-base tracking-[0.00625] text-[#252B42] ">
              Get Support
            </h5>
            <button className="border-2 border-turquoise rounded-3xl px-8 py-4 ">
              <p className="font-montserrat font-bold text-base text-turquoise text-center tracking-[0.0125rem]  ">
                Submit Request
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center py-32 gap-8">
        <FontAwesomeIcon
          size="2xl"
          sty
          icon={faArrowDownLong}
          style={{ color: "#23A6F0" }}
        />
        <h5 className="font-montserrat font-bold text-base text-center text-[#252B42] tracking-[0.00625rem] ">
          WE Can't WAIT TO MEET YOU
        </h5>
        <h1 className="font-montserrat font-bold text-5xl text-[#252B42] tracking-[0.0125rem] text-center ">
          Let’s Talk
        </h1>
        <button className="bg-turquoise px-10 py-5 rounded ">
          <p className="font-montserrat font-bold text-custom-white tracking-[0.0125rem text-center] ">
            Try it free now
          </p>
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
