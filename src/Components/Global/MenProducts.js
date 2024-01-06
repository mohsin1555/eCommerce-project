import React, { useState } from "react";
import { createContext } from "react";
import mjeans from "../images/men jeans.webp";
import mkurta from "../images/men kurta.jpeg";
import mpent from "../images/men pents.jpeg";
import mshirt from "../images/men shirts.jpg";
import mshoes from "../images/men shoes.jpeg";
import watch from "../images/watch.jpg";
import tie from "../images/ties.jpeg";
import tuxedo from "../images/tuxedo.jpeg";
export const MenProducts = createContext();

function MenProductsProvider(props) {
  const [mProducts] = useState([
    { id: 1, name: "Men Stylish Tuxedo", price: 25000, image: tuxedo },
    { id: 2, name: "Men Stylish Kurta", price: 2000, image: mkurta },
    { id: 3, name: "Men Formal Shirts", price: 2500, image: mshirt },
    { id: 4, name: "Men Dress Pent", price: 2000, image: mpent },
    { id: 5, name: "Men Fancy Ties", price: 2500, image: tie },
    { id: 6, name: "Men Wrist Watch", price: 10000, image: watch },
    { id: 7, name: "Men Modren Jeans", price: 3000, image: mjeans },
    { id: 8, name: "Men Formal Shoes", price: 25000, image: mshoes },
  ]);

  return (
    <div>
      <MenProducts.Provider value={{ mProducts: [...mProducts] }}>
        {props.children}
      </MenProducts.Provider>
    </div>
  );
}

export default MenProductsProvider;
