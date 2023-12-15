import Blog from "./Blog";
import ClientsContent from "./ClientsContent";
import Content from "./Content";
import Features from "./Features";
import FluidContent from "./FluidContent";
import Footer from "./Footer";
import Header from "./Header";
import MySlider from "./MySlider";
import ProductCards from "./ProductCards";
import ShopCards from "./ShopCards";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MySlider />
      <ClientsContent />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
};
export default HomePage;
