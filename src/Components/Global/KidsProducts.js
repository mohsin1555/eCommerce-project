import { createContext, useState } from "react";
import suit from "../images/kids suit.jpeg";
import shoes from "../images/kids shoes.jpg";
import tshirt from "../images/kids tshirts.jpg";
import jwellery from "../images/kids jwellery.jpg";
import bag from "../images/school bag.webp";
import coat from "../images/coat.jpeg";
import toys from "../images/toys.jpeg";
import frock from "../images/frocks.jpg";
export const KidsProducts = createContext();
function KidsProductsProvider(props) {
  const [kProducts] = useState([
    { id: 21, name: "Casual Suits", price: 2000, image: suit },
    { id: 22, name: "Boy T-Shirt", price: 1000, image: tshirt },
    { id: 23, name: "Kids Shoes", price: 1500, image: shoes },
    { id: 24, name: "Kids School Bag", price: 1800, image: bag },
    { id: 25, name: "BirthDay Frocks", price: 4500, image: frock },
    { id: 26, name: "Kids Jwellery", price: 500, image: jwellery },
    { id: 27, name: "Kids Toys", price: 1000, image: toys },
    { id: 28, name: "Fancy Coat", price: 3000, image: coat },
  ]);
  return (
    <div>
      <KidsProducts.Provider value={{ kProducts: [...kProducts] }}>
        {props.children}
      </KidsProducts.Provider>
    </div>
  );
}

export default KidsProductsProvider;
