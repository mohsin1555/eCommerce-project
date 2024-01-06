import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import Men from "./Men";
import Women from "./Women";
import Womenbanner from "./Womenbanner";
import SaleBanner from "./Salebanner";
import Hotdeal from "./Hotdeal";
import Kidsbanner from "./Kidsbanner";
import Kids from "./Kids";

function Home() {
  return (
    <div>
      <Slider />
      <Men />
      <Womenbanner />
      <Women />
      <SaleBanner />
      <Hotdeal />
      <Kidsbanner />
      <Kids />
    </div>
  );
}

export default Home;
