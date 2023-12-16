import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListPage from "./components/ProductListPage";
import BlogePage from "./components/BlogPage";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductListPage />
        </Route>
        <Route exact path="/blog">
          <BlogePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
