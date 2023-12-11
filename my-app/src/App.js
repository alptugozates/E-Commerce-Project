import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShopCards from "./components/ShopCards";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ShopCards />
      <Footer />
    </div>
  );
}

export default App;
