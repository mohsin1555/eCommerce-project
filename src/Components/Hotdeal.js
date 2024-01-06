import React, { useContext } from "react";
import { CartContext } from "./Global/CartContext";
import { HotdealProducts } from "./Global/HotdealProducts";
import "./Hotdeal.css";

function Hotdeal() {
  const { dProducts } = useContext(HotdealProducts);
  const { dispatch } = useContext(CartContext);
  return (
    <div id="deal" className="mt-4">
      <h2 className="text-center display-3">Hot Deal Products</h2>
      <div className="container">
        <div className="row">
          {dProducts.map((product) => (
            <div className="col-md-3 mt-4">
              <div id="menbox" class="card">
                <img
                  class="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <h5 class="card-text">Rs{product.price}.00</h5>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                        product,
                      })
                    }
                    class="btn btn-danger"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotdeal;
