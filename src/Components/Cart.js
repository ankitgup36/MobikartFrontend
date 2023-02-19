import ProductCard from "./ProductCard";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import axios from "axios";
import { MainContext } from "../App";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartList, setCartList, Price } = useContext(MainContext);
  const navigate = useNavigate();
  useEffect(() => {
    const get = async () => {
      const url =
        "https://mobikartbackend-t58q.onrender.com/api/users/cart/items";
      if (!localStorage.getItem("userId")) {
        setCartList([]);
        return;
      }
      const data = { id: localStorage.getItem("userId") };
      await axios
        .post(url, data)
        .then((data) => setCartList(data.data))
        .catch((err) => console.log(err));
    };
    get();
  }, []);
  return (
    <>
      <div
        className="Container"
        style={{ backgroundColor: "#f8f9fa", minHeight: "92vh" }}
      >
        <div class="container text-center">
          <div class="row gap-2">
            <div class="col-sm-8 gridSecond">
              <h3 className="mt-2">Products</h3>
              <h4
                className="ms-auto mt-5"
                style={{ display: cartList.length <= 0 ? "inline" : "none" }}
              >
                Your cart is Empty !!!
              </h4>
              {cartList.map((item) => {
                return <ProductCard item={item} display="inline" />;
              })}
            </div>
            <div className="col-sm-3 gridFirst">
              <h5 className="mt-3">Categories</h5>
              <div
                className="Container"
                style={{
                  maxHeight: "30vh",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <h5 className="mt-3">Quantity : {cartList.length}</h5>
                <h5 className="mt-3">Amount :Rs {Price}/-</h5>
                <Button
                  variant="contained"
                  disableElevation
                  className="mt-3"
                  onClick={() => {
                    cartList.length > 0
                      ? navigate("/home/cart/confirm")
                      : window.alert("Your cart is Empty");
                  }}
                >
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
