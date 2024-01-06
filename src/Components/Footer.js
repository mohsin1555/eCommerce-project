import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className=" mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {/* <img src="./images/logo.png" /> */}
              <h2 id="style" className="mt-3">
                Style.
              </h2>
              <p>
                We are specialized in designings, make your business a brand.
                Try our premium services.
              </p>
              <div className="social">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <CiLinkedin />
                </a>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <h3 className="heading">Our Services</h3>

              <a style={{ color: "aliceblue" }} href="#">
                Our Policy
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Easy Billing
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Conditions
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Help Center
              </a>
              <br />
            </div>
            <div className="col-md-3 mt-3">
              <h3 className="heading">About Us</h3>

              <a style={{ color: "aliceblue" }} href="#">
                Our Policy
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Easy Billing
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Conditions
              </a>
              <br />

              <a style={{ color: "aliceblue" }} href="#">
                Help Center
              </a>
              <br />
            </div>
            <div className="col-md-3 mt-3">
              <h3 className="heading">Contacts Us</h3>
              <IoLocation />
              H-28 Harbanspura
              <br />
              <br />
              <FaPhone />
              +92-323-4535159
              <br />
              <FaPhone />
              +92-321-4039489
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
