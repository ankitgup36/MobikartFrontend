import React from "react";
import "./Style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    number: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // eslint-disable-next-line no-lone-blocks
    {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // data  varification

    const { email, name, password, address } = userData;
    console.log(email, name, password);
    const url = "https://mobikartbackend-t58q.onrender.com/api/users/register";
    await axios
      .post(url, { email, password, name, address })
      .then((data) => {
        window.alert("User created successfully");
        navigate("/login");
      })
      .catch((e) => window.alert("User already exist"));
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <button
            type="button"
            className="white_btn"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              className="input"
              value={userData.name}
              name="name"
              required={true}
              placeholder="Name"
              type="text"
              onChange={handleChange}
            />
            <input
              className="input"
              value={userData.number}
              name="number"
              required={true}
              placeholder="Mobile No."
              type="text"
              onChange={handleChange}
            />
            <input
              className="input"
              value={userData.email}
              name="email"
              placeholder="Email"
              type="email"
              required="true"
              onChange={handleChange}
            />
            <input
              className="input"
              value={userData.password}
              name="password"
              required={true}
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
            <input
              className="input"
              value={userData.address}
              name="address"
              required={true}
              placeholder="address"
              type="text"
              onChange={handleChange}
            />
            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
