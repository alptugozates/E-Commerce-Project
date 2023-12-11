import faBrands1 from "../foto/fa-brands-1.png";
import faBrands2 from "../foto/fa-brands-2.png";
import faBrands3 from "../foto/fa-brands-3.png";
import faBrands4 from "../foto/fa-brands-4.png";
import faBrands5 from "../foto/fa-brands-5.png";
import faBrands6 from "../foto/fa-brands-6.png";
const HomePage = () => {
  return (
    <div className="clients-1 flex px-52 w-full justify-center items-center">
      <div className="container flex flex-col items-center shrink-0 ">
        <div className="row flex justify-center items-center gap-8 px-0 py-14">
          <div className="col-md-2 flex flex-col items-center">
            <img src={faBrands1}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
