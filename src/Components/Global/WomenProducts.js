import React, { createContext, useState } from "react";
import jewllery from "../images/jewllery.jpg";
import ladiesbag from "../images/ladies bag.webp";
import ladiesjeans from "../images/ladies jeans.jpg";
import ladiesshoes from "../images/ladies shoes.jpg";
import makeup from "../images/makeup.jpg";
import maxi from "../images/maxi.webp";
import tops from "../images/tops.jpg";
import wedding from "../images/women wedding dress.jpg";
export const WproductsContext = createContext();

function WomenProductsProvider(props) {
  const [Wproducts] = useState([
    { id: 9, name: "Wedding Dress", price: 35000, image: wedding },
    { id: 10, name: "Black Maxi Dress", price: 20000, image: maxi },
    { id: 11, name: "Ladies Jeans", price: 1500, image: ladiesjeans },
    { id: 12, name: "Ladies Hand Bag", price: 3000, image: ladiesbag },
    { id: 13, name: "Ladies Shoes", price: 2500, image: ladiesshoes },
    { id: 14, name: "Ladies Tops", price: 2000, image: tops },
    { id: 15, name: "Stylish Jewellery", price: 1500, image: jewllery },
    { id: 16, name: "Branded Makeup", price: 5000, image: makeup },
  ]);
  return (
    <div>
      <WproductsContext.Provider value={{ Wproducts: [...Wproducts] }}>
        {props.children}
      </WproductsContext.Provider>
    </div>
  );
}

export default WomenProductsProvider;
