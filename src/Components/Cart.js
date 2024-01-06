import React, { useContext } from "react";
import "./Cart.css";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Global/CartContext";
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {

  const navigate = useNavigate()
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const handleToken = async () => {

    dispatch({ type: 'EMPTY' });
    navigate("/");
    toast.success("You have paid Successfully", { position: toast.POSITION.TOP_RIGHT })
  };
  return (
    <div>
      <h2 style={{ fontWeight: "bold" }} className="text-center display-4 mt-3">
        Shopping Cart
      </h2>
      <div className="cart-container">
        <div className="cart-details" style={{ marginTop: "100px" }}>
          {shoppingCart.length > 0 ? (
            shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">Rs{cart.price}.00</span>
                <span
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <Icon className="inc" icon="tdesign:plus" />
                </span>
                <span className="product-quantity">{cart.qty}</span>
                <span
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <Icon className="dec" icon="tabler:minus" />
                </span>
                <span className="product-total-price">
                  Rs : {cart.price * cart.qty}.00
                </span>
                <span
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.id, cart })
                  }
                >
                  <Icon className="delete-product" icon="bi:trash" />
                </span>
              </div>
            ))
          ) : (
            <b>"Sorry your cart is currently empty"</b>
          )}
        </div>
        {shoppingCart.length > 0 ? (
          <div className="cart-summary">
            <div className="summary">
              <h2 style={{ fontWeight: "bold" }}>Cart summary</h2>

              <div className="total-items">
                <div className="items">Total items</div>
                <div className="items-count">{qty}</div>
              </div>
              <div className="totla-price-section">
                <div className="just-title">Total price</div>
                <div className="items-price">Rs : {totalPrice}.00</div>
              </div>
              <div className="stripe-section mt-3">
                <StripeCheckout
                  stripeKey="pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalPrice * 100}
                  name="All Products"
                >

                </StripeCheckout>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Cart;
