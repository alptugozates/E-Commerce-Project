import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImg from "../foto/AboutFoto/aboutHeroImg.png";
import videoCard from "../foto/AboutFoto/VideoCard.png";
import user1 from "../foto/AboutFoto/team-1-user-1.jpg";
import user2 from "../foto/AboutFoto/team-1-user-2.jpg";
import user3 from "../foto/AboutFoto/team-1-user-3.jpg";
import workImg from "../foto/AboutFoto/workImg.png";
import Footer from "./Footer";
import ClientsContent from "./ClientsContent";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import OtherHeader from "./OtherHeader";
import TeamPage from "./TeamPage";
const AboutPage = () => {
  return (
    <div className="flex flex-col sm:w-full  ">
      <OtherHeader />
      <div className="flex sm:w-full py-20 sm:px-52 sm:flex-row flex-col items-center justify-center">
        <div className="flex flex-col gap-10 justify-center items-center sm:justify-start sm:items-start text-center sm:text-start w-6/12 sm:w-4/12">
          <h5 className="font-montserrat text-base font-bold tracking-[0.00625rem] text-[#252B42] ">
            ABOUT COMPANY
          </h5>
          <h1 className="font-montserrat font-bold text-5xl text-[#252B42] ">
            ABOUT US
          </h1>
          <h4 className="font-montserrat text-custom-gray text-xl font-normal tracking-[0.0125rem] ">
            We know how large objects will act, but things on a small scale
          </h4>
          <button className="border-2 bg-[#23A6F0] rounded-md px-8 py-4 hover:bg-[#86c3ea] duration-300 ">
            <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-custom-white ">
              Get Quote Now
            </p>
          </button>
        </div>
        <div className="ml-auto">
          <img src={heroImg} alt="About Image" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col  sm:px-52 justify-center items-center gap-16">
        <div className="flex flex-col items-center sm:items-start w-9/12 sm:w-4/12 justify-center gap-6">
          <p className="font-montserrat text-sm font-normal text-[#E74040] tracking-[0.0125rem] ">
            Problems trying
          </p>
          <h3 className="font-montserrat font-bold text-[#252B42] text-2xl ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="flex flex-col items-center w-11/12 sm:w-5/12">
          <p className="font-montserrat font-normal text-sm text-custom-gray tracking-[0.0125rem] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex sm:px-52 sm:flex-row flex-col justify-center items-center py-32 gap-24">
        <div className="col-md-3 flex flex-col items-center gap-4">
          <h1 className="font-montserrat font-bold text-6xl tracking-[0.0125rem] text-[#252B42] ">
            15K
          </h1>
          <h5 className="font-montserrat font-bold text-base text-custom-gray tracking-[0.0625rem] ">
            Happy Customers
          </h5>
        </div>
        <div className="col-md-3 flex flex-col items-center gap-4">
          <h1 className="font-montserrat font-bold text-6xl tracking-[0.0125rem] text-[#252B42] ">
            150K
          </h1>
          <h5 className="font-montserrat font-bold text-base text-custom-gray tracking-[0.0625rem] ">
            Monthly Visitors
          </h5>
        </div>
        <div className="col-md-3 flex flex-col items-center gap-4">
          <h1 className="font-montserrat font-bold text-6xl tracking-[0.0125rem] text-[#252B42] ">
            15
          </h1>
          <h5 className="font-montserrat font-bold text-base text-custom-gray tracking-[0.0625rem] ">
            Countries Worldwide
          </h5>
        </div>
        <div className="col-md-3 flex flex-col items-center gap-4">
          <h1 className="font-montserrat font-bold text-6xl tracking-[0.0125rem] text-[#252B42] ">
            100+
          </h1>
          <h5 className="font-montserrat font-bold text-base text-custom-gray tracking-[0.0625rem] ">
            Top Partners
          </h5>
        </div>
      </div>
      <div className="flex sm:px-52 items-center justify-center">
        <div>
          <img src={videoCard} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 pb-24 pt-[15rem] ">
        <div className="flex flex-col justify-center items-center pb-24 gap-4 w-8/12 sm:w-[25rem]">
          <h2 className="font-montserrat text-5xl font-bold tracking-[0.0125rem] text-center text-[#252B42] ">
            Meet Our Team
          </h2>
          <p className="font-montserrat text-center font-normal text-sm text-custom-gray">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-20 sm:gap-8">
          <div className="flex flex-col items-center gap-4">
            <img src={user1} alt="Resim 1" />
            <p className="font-montserrat text-base font-bold text-[#252B42] tracking-[0.0625rem]">
              Username
            </p>
            <p className="text-montserrat font-bold tracking-[0.0125rem] text-sm text-custom-gray ">
              Profession
            </p>
            <div className="flex gap-4 ">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#23a6f0" }} />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#23a6f0" }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#23a6f0" }} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={user2} alt="Resim 2" />
            <p className="font-montserrat text-base font-bold text-[#252B42] tracking-[0.0625rem]">
              Username
            </p>
            <p className="text-montserrat font-bold tracking-[0.0125rem]  text-sm text-custom-gray ">
              Profession
            </p>
            <div className="flex gap-4 ">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#23a6f0" }} />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#23a6f0" }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#23a6f0" }} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img src={user3} alt="Resim 3" />
            <p className="font-montserrat text-base font-bold text-[#252B42] tracking-[0.0625rem]">
              Username
            </p>
            <p className="text-montserrat font-bold tracking-[0.0125rem]  text-sm text-custom-gray ">
              Profession
            </p>
            <div className="flex gap-4 ">
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#23a6f0" }} />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#23a6f0" }}
              />
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#23a6f0" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center gap-8 bg-[#FAFAFA] py-20">
        <h2 className="font-montserrat font-bold text-4xl tracking-[0.0125rem] text-[#252B42] sm:w-full w-8/12 ">
          Big Companies Are Here
        </h2>
        <p className="font-montserrat font-normal text-sm tracking-[0.0625rem] text-custom-gray sm:w-full w-11/12 ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <ClientsContent />
      <TeamPage />

      <div className="bg-[#2A7CC7] w-full sm:px-52">
        <div className="container flex sm:py-0 py-20 justify-between items-center ">
          <div className="flex flex-col sm:text-start text-center items-center sm:items-start gap-8 sm:px-0 px-10 sm:w-[32rem] ">
            <p className="font-montserrat font-bold text-base tracking-[0.00625rem] text-custom-white ">
              WORK WITH US
            </p>
            <p className="font-montserrat font-bold text-4xl tracking-[0.0125rem] text-custom-white ">
              Now Let’s grow Yours
            </p>
            <p className="font-montserrat font-bold text-base tracking-[0.00625rem] text-custom-white ">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="py-4 px-8 border-2 border-custom-white bg-[#2A7CC7] rounded-md  ">
              <p className="font-montserrat font-bold text-sm tracking-[0.0125rem] text-[#FAFAFA] ">
                Button
              </p>
            </button>
          </div>
          <div className="sm:flex hidden">
            <img className="w-[37rem] h-[40rem] " src={workImg} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;
