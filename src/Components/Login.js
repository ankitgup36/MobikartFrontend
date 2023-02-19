import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../App";
import "./Style.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const { setTokan } = useContext(MainContext);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://mobikartbackend-t58q.onrender.com/api/users/login";
    const { email, password } = user;
    axios
      .post(url, { email, password })
      .then((data) => {
        localStorage.setItem("token", data.data.data);
        localStorage.setItem("userId", data.data.id);
        window.alert("Logged in successfully");
        setTokan(true);
        navigate("/home");
      })
      .catch((e) => {
        window.alert("Please enter valid details");
      });
  };
  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <button
            type="button"
            className="white_btn"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              className="input"
              value={user.email}
              name="email"
              placeholder="Email"
              type="email"
              required="true"
              onChange={handleChange}
            />
            <input
              className="input"
              value={user.password}
              name="password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
            <button type="submit" className="green_btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
