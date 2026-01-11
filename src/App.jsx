import "./App.scss";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products">
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
