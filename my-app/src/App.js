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
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryListPage from "./pages/CategoryListPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import OrderPage from "./pages/OrderPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { readToLocalStorage } from "./reducers/userReducer";

function App() {
  const isLoggedIn = useSelector((state) => state.userReducer.loggedIn);
  return (
    <Router>
      <ToastContainer />
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
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
        <Route path="/shop/:category/:gender/:title" exact>
          <CategoryListPage />
        </Route>
        <Route path="/product/:category_id/:product_id/:product_name">
          <ProductDetailPage />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
        <Route path="/order-page">
          {readToLocalStorage("token") ? (
            <OrderPage />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App;
