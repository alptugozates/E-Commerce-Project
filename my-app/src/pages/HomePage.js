import Blog from "../components/Blog";
import ClientsContent from "../components/ClientsContent";
import Content from "../components/Content";
import Features from "../components/Features";
import FluidContent from "../components/FluidContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MySlider from "../components/MySlider";
import OtherHeader from "../components/OtherHeader";
import ProductCards from "../components/ProductCards";
import ShopCards from "../components/ShopCards";
import BlogPage from "./BlogPage";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="sm:hidden flex">
        <OtherHeader />
      </div>
      <div>
        <MySlider />
      </div>
      <ClientsContent />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <Blog />
      <div className="sm:hidden flex flex-col">
        <BlogPage />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
