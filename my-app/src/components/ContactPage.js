import Header from "./Header";
import Footer from "./Footer";
const ContactPage = () => {
  return (
    <div className="flex-flex-col">
      <Header />
      <div className="flex flex-col justify-center items-center py-28 px-52 bg-custom-white gap-20 ">
        <h2 className="font-montserrat font-bold text-4xl text-[#252B42] text-center tracking-[0.0125rem] ">
          Get answers to all your questions.
        </h2>
        <p className="font-montserrat text-xl font-normal tracking-[0.0125rem] text-custom-gray text-center w-5/12 ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <button className="px-8 py-4 border-2 bg-[#23A6F0] rounded-md ">
          <p className="font-montserrat font-bold text-sm text-custom-white">
            {" "}
            CONTACT OUR COMPANY
          </p>
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
