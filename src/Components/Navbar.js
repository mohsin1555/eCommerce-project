import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { CartContext } from "./Global/CartContext";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const { qty } = useContext(CartContext);
  return (
    <div>
      <nav id="nav" class="navbar navbar-expand-lg navbar-dark ">
        <div id="logo" className="display-4">
          Style.
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link active" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
            <Link class="nav-item nav-link active" to="/men">
              Men
            </Link>
            <Link class="nav-item nav-link active" to="/women">
              Women
            </Link>
            <Link class="nav-item nav-link active" to="/hotdeal">
              Hotdeal
            </Link>
            <Link class="nav-item nav-link active" to="/kids">
              Kids
            </Link>
            <div id="right">
              <div id="right">
                <Link class="nav-item nav-link active" to="/signup">
                  <FaUser />
                  Signup
                </Link>
                <Link class="nav-item nav-link active" to="/signin">
                  <FaUser />
                  Signin
                </Link>


                <Link class="nav-item nav-link active" to="/cart">
                  {" "}
                  <BsCart3 />
                  Cart <sup style={{ color: "red" }}>{qty}</sup>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="line"></div>
    </div>
  );
}

export default Navbar;
