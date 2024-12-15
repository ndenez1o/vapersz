import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppBtn";
import Banner from "./layouts/components/Banner";
import Footer from "./layouts/components/Footer";
import Navbar from "./layouts/components/Navbar";
import ProductsContainer from "./layouts/components/ProductsContainer";
import Info from "./layouts/components/Info";
import IgnitePage from "./pages/ignite";
import LostMaryPage from "./pages/lost-mary";
import PageNotFound from "./pages/404";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Checkout from "./pages/checkout";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      {" "}
      <Router>
        <Navbar />
        <WhatsAppButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ProductsContainer />
                <Info />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ignite" element={<IgnitePage />} />
          <Route path="lost-mary" element={<LostMaryPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
