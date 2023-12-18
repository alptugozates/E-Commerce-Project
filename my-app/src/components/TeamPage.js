import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrowRight from "../foto/gray-arrow-right.png";
import teamcontent1 from "../foto/TeamFoto/teamcontent-1.png";
import teamcontent2 from "../foto/TeamFoto/teamcontent-2.png";
import teamcontent3 from "../foto/TeamFoto/teamcontent-3.png";
import teamcontent4 from "../foto/TeamFoto/teamcontent-4.png";
import teamcontent5 from "../foto/TeamFoto/teamcontent-5.png";
import Footer from "./Footer";
import Header2 from "./OtherHeader";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { teamMembers } from "../data/TeamPageData";
import OtherHeader from "./OtherHeader";

const TeamPage = () => {
  return (
    <div>
      <OtherHeader />
      <div className="flex flex-col w-screen ">
        <div className="flex flex-col items-center py-16 gap-10">
          <h5 className="font-montserrat font-bold text-base tracking-[0.00625rem] text-custom-gray ">
            WHAT WE DO
          </h5>
          <h1 className="font-montserrat text-5xl font-bold tracking-[0.0125rem] text-[#252B42] ">
            Innovation tailored for you
          </h1>
          <div className="flex items-center gap-4 px-3">
            <a
              href="/"
              className="font-montserrat text-sm font-bold tracking-[0.0125rem] text-[#252B42] "
            >
              Home
            </a>
            <img src={arrowRight} />
            <p className="font-montserrat text-sm font-bold text-custom-gray tracking-[0.0125rem] ">
              Team
            </p>
          </div>
        </div>
        <div className="container flex w-full justify-center items-center gap-4 grow ">
          <div className="flex w-1/2 px-0">
            <img className="h-auto w-full " src={teamcontent1} />
          </div>
          <div className="flex w-1/2 flex-wrap gap-4 px-0">
            <img className=" h-auto w-[23rem] shrink-0 " src={teamcontent2} />
            <img className=" h-auto w-[23rem] shrink-0 " src={teamcontent3} />
            <img className="h-auto w-[23rem] shrink-0 " src={teamcontent4} />
            <img className=" h-auto w-[23rem] shrink-0 " src={teamcontent5} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-40 px-52 gap-28">
          <div className="flex flex-col justify-center items-center w-[25rem]">
            <h2 className="font-montserrat text-5xl font-bold tracking-[0.0125rem] text-[#252B42]">
              Meet Our Team
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-28">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center gap-4">
                <img
                  className="w-full h-auto"
                  src={member.image}
                  alt={`Image of ${member.name}`}
                />
                <p className="font-montserrat text-base font-bold text-[#252B42] tracking-[0.0625rem]">
                  {member.name}
                </p>
                <p className="text-montserrat font-bold tracking-[0.0125rem] text-sm text-custom-gray">
                  {member.profession}
                </p>
                <div className="flex gap-4">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#23a6f0" }}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#23a6f0" }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#23a6f0" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full px-52 items-center gap-12 py-20">
          <h2 className="font-montserrat font-bold text-4xl tracking-[0.0125rem] text-[#252B42] ">
            Start your 14 days free trial
          </h2>
          <p className="font-montserrat font-normal text-sm text-custom-gray tracking-[0.0125rem] w-[26rem] text-center ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="px-8 py-4 border-2 bg-[#23A6F0] rounded-md ">
            <p className="font-montserrat font-bold text-custom-white text-sm tracking-[0.0125rem] ">
              Try it free now!
            </p>
          </button>
          <div className="icons flex gap-10 ">
            <FontAwesomeIcon
              size="2xl"
              icon={faFacebook}
              style={{ color: "#23a6f0" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faInstagram}
              style={{ color: "#23a6f0" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faTwitter}
              style={{ color: "#23a6f0" }}
            />
            <FontAwesomeIcon
              size="2xl"
              icon={faLinkedin}
              style={{ color: "#23a6f0" }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default TeamPage;
