import Blog from "./Blog";
import ClientsContent from "./ClientsContent";
import Content from "./Content";
import Features from "./Features";
import FluidContent from "./FluidContent";
import Footer from "./Footer";
import Header from "./Header";
import MySlider from "./MySlider";
import OtherHeader from "./OtherHeader";
import ProductCards from "./ProductCards";
import ShopCards from "./ShopCards";
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
