import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products">
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
