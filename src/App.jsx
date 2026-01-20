import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [cart, setCart] = useState({});

  return (
    <div className="main_container">
      <Nav cart={cart} />
      <div className="main_content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="products">
            <Route
              path=":productId"
              element={<Product cart={cart} setCart={setCart} />}
            />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
