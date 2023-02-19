import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../App";
import Icon from "./Icon";

const Navbar = () => {
  const { setSearchProduct, searchProduct, tokan, setTokan } =
    useContext(MainContext);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fw-bold fs-2"
            style={{ color: "#0077b6" }}
          >
            Mobikart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 me-10 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active me-3 mb-1"
                  to={tokan ? "/home/cart" : "/home"}
                  onClick={() => {
                    !tokan && window.alert("please Login First");
                  }}
                >
                  <Icon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active mt-2"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li
                className="nav-item"
                style={{ display: !tokan ? "inline" : "none" }}
              >
                <NavLink className="nav-link active mt-2" to="/login">
                  Login
                </NavLink>
              </li>
              <li
                className="nav-item"
                style={{ display: tokan ? "inline" : "none" }}
              >
                <NavLink
                  className="nav-link active mt-2"
                  onClick={() => setTokan(false)}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
