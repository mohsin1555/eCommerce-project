import React, { createContext, useState } from "react";
import makeup from "../images/makeup.jpg";
import toys from "../images/toys.jpeg";
import tshirt from "../images/kids tshirts.jpg";
import kurta from "../images/men kurta.jpeg";
export const HotdealProducts = createContext();

function HotdealProductsProvider(props) {
  const [dProducts] = useState([
    { id: 17, name: "Branded Makeup", price: 5000, image: makeup },
    { id: 18, name: "Kids Toys", price: 1000, image: toys },
    { id: 19, name: "Boys T-Shirt", price: 1000, image: tshirt },
    { id: 20, name: "Gents Kurta", price: 2000, image: kurta },
  ]);
  return (
    <div>
      <HotdealProducts.Provider value={{ dProducts: [...dProducts] }}>
        {props.children}
      </HotdealProducts.Provider>
    </div>
  );
}

export default HotdealProductsProvider;
