import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
