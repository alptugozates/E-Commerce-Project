import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <ToastContainer />
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
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
