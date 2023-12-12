import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ClientsContent from "./components/ClientsContent";
import ProductCards from "./components/ProductCards";
import ShopCards from "./components/ShopCards";
import Content from "./components/Content";
import Features from "./components/Features";
function App() {
  return (
    <div>
      <Header />
      <ClientsContent />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
