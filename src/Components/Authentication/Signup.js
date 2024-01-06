import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [input, setinput] = useState("");

  const handleInput = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    await response.json();
    navigate("/signin");

    if (response.ok) {
      alert("Account Created Successfully");
    } else if (!response.ok) {
      alert("This User Is Already Registered");
    } else {
      console.log("Error Occured");
    }
  };

  return (
    <div className="container col-md-4 ofset-4 mt-3">
      <h2 className="text-center mt-3">Create Your Account</h2>
      <form className="mt-5">
        <label>Enter Your Name</label>
        <input
          onChange={handleInput}
          name="name"
          type="text"
          placeholder="Enter Name"
          className="form-control"
        />
        <label>Enter Your Email</label>
        <input
          onChange={handleInput}
          type="text"
          name="email"
          placeholder="Enter Email"
          className="form-control"
        />
        <label>Enter Your Password</label>
        <input
          onChange={handleInput}
          type="password"
          name="password"
          placeholder="Enter Password"
          className="form-control"
        />
        <Link to="" onClick={handleSubmit} className="mt-3 btn btn-primary">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Signup;
