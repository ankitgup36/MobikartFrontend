import { Rating, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MainContext } from "../App";
import { useContext } from "react";
import { handleClick, handleDelete } from "../utils.js/functions";

const ProductCard = ({ item, display }) => {
  const userId = localStorage.getItem("userId");
  const { _id, tags, img, name, rating, price } = item;
  const { setShowProduct, setCartItem, setCartList, tokan, setPrice } =
    useContext(MainContext);

  return (
    <div className="card mb-3 mt-5" style={{ maxWidth: "800px" }}>
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src={img[0]}
            className="img-fluid rounded-start"
            alt="..."
            style={{ maxHeight: "200px", margin: "20px" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5
              className="card-title text-start fw-bold"
              style={{ marginBottom: "20px" }}
            >
              {name}
            </h5>
            <ul className="fs-15 text-start">
              {tags.map((tag) => {
                return <li>{tag}</li>;
              })}
            </ul>
            <h5
              className="card-title text-start fw-bold"
              style={{ marginBottom: "20px" }}
            >
              Rs {price}/-
              <Rating
                name="size-medium"
                defaultValue={rating}
                size="medium"
                readOnly
                style={{ marginLeft: "20px" }}
              />
            </h5>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card-body"></div>
          <button
            class="btn btn-primary"
            type="submit"
            style={{
              marginBottom: "10px",
              display: (!tokan || display) && "none",
            }}
            onClick={() => {
              setCartItem(_id);
              handleClick({ userId, item }, setCartList, setPrice);
            }}
          >
            Add to Cart
          </button>
          <NavLink to="/home/productdetails">
            <button
              class="btn btn-primary"
              type="submit"
              style={{
                marginBottom: "10px",
                display: display ? "none" : "inline",
              }}
              onClick={() => {
                setShowProduct(item);
              }}
            >
              View Details
            </button>
          </NavLink>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete({ userId, _id }, setCartList, setPrice)}
            style={{ display: display ? display : "none" }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
