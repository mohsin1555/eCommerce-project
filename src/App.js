import React from "react";
import Navbar from "./Components/Navbar";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Hotdeal from "./Components/Hotdeal";
import Kids from "./Components/Kids";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import MenProductsProvider, {
  MenProducts,
} from "./Components/Global/MenProducts";
import CartContextProvider from "./Components/Global/CartContext";
import KidsProductsProvider from "./Components/Global/KidsProducts";
import WomenProductsProvider from "./Components/Global/WomenProducts";
import HotdealProductsProvider from "./Components/Global/HotdealProducts";
import Home from "./Components/Home";
import Signup from "./Components/Authentication/Signup";
import Signin from "./Components/Authentication/Signin";

function App() {
  return (
    <div>
      <MenProductsProvider>
        <WomenProductsProvider>
          <HotdealProductsProvider>
            <KidsProductsProvider>
              <CartContextProvider>
                <Router>
                  <Navbar />

                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/hotdeal" element={<Hotdeal />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signin" element={<Signin />} />
                  </Routes>
                  <Footer />
                </Router>
              </CartContextProvider>
            </KidsProductsProvider>
          </HotdealProductsProvider>
        </WomenProductsProvider>
      </MenProductsProvider>
    </div>
  );
}

export default App;
