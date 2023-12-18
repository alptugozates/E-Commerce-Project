import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import BlogPage from "./components/BlogPage";
import ProductPage from "./components/ProductPage";
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductListPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/product-page">
          <ProductPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
