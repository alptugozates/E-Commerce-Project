import faBrands1 from "../foto/fa-brands-1.png";
import faBrands2 from "../foto/fa-brands-2.png";
import faBrands3 from "../foto/fa-brands-3.png";
import faBrands4 from "../foto/fa-brands-4.png";
import faBrands5 from "../foto/fa-brands-5.png";
import faBrands6 from "../foto/fa-brands-6.png";

const HomePage = () => {
  return (
    <div className="clients-1 flex px-52 w-full justify-center items-center bg-[#FFF] ">
      <div className="container flex flex-col items-center shrink-0 ">
        <div className="row flex justify-center items-center gap-32 px-0 py-28">
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands1} />
          </div>
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands2} />
          </div>
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands3} />
          </div>
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands4} />
          </div>
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands5} />
          </div>
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands6} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
