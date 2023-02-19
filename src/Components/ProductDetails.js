import { Rating } from "@mui/material";
import { MainContext } from "../App";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { handleClick } from "../utils.js/functions";

const ProductDetails = () => {
  const { showProduct, setCartList, tokan } = useContext(MainContext);
  const userId = localStorage.getItem("userId");
  const { img, name, price, description, tags, rating } = showProduct;
  return (
    <div
      className="Container"
      style={{ backgroundColor: "#f8f9fa", height: "110vh", display: "flex" }}
    >
      <div
        className="Container"
        style={{
          backgroundColor: "white",
          margin: "auto",
          height: "95vh",
          width: "60vw",
        }}
      >
        <div className=" mb-3 mt-5" style={{ width: "60vw" }}>
          <div className="row g-0">
            <div className="col-md-6">
              {img.map((src) => {
                return (
                  <img
                    src={src}
                    className="img-fluid rounded-start ms-5 "
                    alt="..."
                    style={{ maxHeight: "300px" }}
                  />
                );
              })}
              <div class="d-grid gap-2 col-6 mx-auto mt-5">
                <h5 className="card-title text-center fw-bold mb-2">
                  Rs {price}/-
                </h5>
                <button
                  class="btn btn-success"
                  type="button"
                  onClick={() =>
                    handleClick({ userId, showProduct }, setCartList)
                  }
                  style={{ display: tokan ? "inline" : "none" }}
                >
                  Add to Cart
                </button>
                <button class="btn btn-info" type="button">
                  <NavLink
                    to="/home"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Go Back
                  </NavLink>
                </button>
                <Rating
                  name="size-medium"
                  defaultValue={rating}
                  size="medium"
                  readOnly
                  className="ms-5"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5
                  className="card-title text-start fw-bold"
                  style={{ marginBottom: "20px" }}
                >
                  {name}
                </h5>
                <ul
                  className="fs-15 text-start mb-3"
                  style={{
                    borderBottom: "2px solid black",
                    paddingBottom: "20px",
                  }}
                >
                  {tags.map((tag) => {
                    return <li>{tag}</li>;
                  })}
                </ul>

                <div>
                  <h5 className="card-title text-center fw-bold mb-3 mt-3">
                    Product Details
                  </h5>
                  <p
                    className="fst-normal line-1 mb-3"
                    style={{
                      borderBottom: "2px solid black",
                      paddingBottom: "20px",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
