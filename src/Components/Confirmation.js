import React, { useContext } from "react";
import { Button } from "@mui/material";
import { MainContext } from "../App";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { cartList, Price } = useContext(MainContext);
  const navigate = useNavigate();

  const handleFunc = async () => {
    window.alert("Transaction Successfully, Your order has been reveived");
    navigate("/home");
  };
  return (
    <div>
      <>
        <div
          className="Container"
          style={{ backgroundColor: "#f8f9fa", minHeight: "92vh" }}
        >
          <div class="container text-center">
            <div class="row gap-2">
              <div class="col-sm-8 gridSecond">
                <h1
                  className="text-center mt-5 fw-bold"
                  style={{ color: "#013a63" }}
                >
                  Transaction Summery
                </h1>
                <h1
                  className="text-center mt-5 fw-bold"
                  style={{ color: "#013a63" }}
                >
                  Products
                </h1>
                <div className="mt-5">
                  {cartList.map((item) => {
                    return <h3 className="mt-1 text-center">{item.name}</h3>;
                  })}
                </div>
                <h3
                  className="text-center mt-5 fw-bold"
                  style={{ color: "#d90429" }}
                >
                  Total : Rs {Price}/-
                </h3>
              </div>
              <div className="col-sm-3 gridFirst">
                <div
                  className="Container"
                  style={{
                    maxHeight: "30vh",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                >
                  <div className="mt-5">
                    <Button
                      variant="contained"
                      disableElevation
                      className="mt-3"
                      color="success"
                      onClick={() => handleFunc()}
                    >
                      confirm
                    </Button>
                  </div>
                  <Button
                    variant="contained"
                    disableElevation
                    className="mt-3"
                    color="error"
                    onClick={() => navigate("/home/cart")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Confirmation;
