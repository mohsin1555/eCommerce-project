import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [signin, setSignin] = useState("");
  const navigate = useNavigate();

  const handleinput = (event) => {
    setSignin({ ...signin, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signin),
    });
    const data = await response.json();
    navigate("/");
    if (data.message === "Login Successfully") {
      sessionStorage.setItem("name", data.Match.name);
      sessionStorage.setItem("email", data.Match.email);
    } else {
      alert("Please Enter Valid Credentials");
      navigate("/signin");
    }
  };
  return (
    <div className="container col-md-4 ofset-4 mt-3">
      <h2 className="text-center mt-3">Log in Your Account</h2>
      <form className="mt-5">
        <label>Enter Your Email</label>
        <input
          type="text"
          onChange={handleinput}
          name="email"
          placeholder="Enter Email"
          className="form-control"
        />
        <label>Enter Your Password</label>
        <input
          type="password"
          onChange={handleinput}
          name="password"
          placeholder="Enter Password"
          className="form-control"
        />
        <Link
          to=""
          onClick={handleSubmit}
          className="mt-3 btn btn-primary w-full"
        >
          Login
        </Link>
      </form>
    </div>
  );
}

export default Signin;
