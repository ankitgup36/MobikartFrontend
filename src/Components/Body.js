import React, { useContext, useEffect } from "react";
import { CartProduct, CategoryCard, ProductCard, Sorting } from "./";
import "./Style.css";
import { categ } from "../utils.js/Categories";
import axios from "axios";
import { MainContext } from "../App";

const Body = () => {
  const { category, prod, setProd, searchProduct, sort } =
    useContext(MainContext);
  useEffect(() => {
    axios
      .get(
        `https://mobikartbackend-t58q.onrender.com/api/products?category=${category}&search=${searchProduct}&sortBy=${sort}`
      )
      .then((data) => setProd(data.data));
  }, [category, searchProduct, sort]);
  return (
    <>
      <div
        className="Container"
        style={{ backgroundColor: "#f8f9fa", minHeight: "92vh" }}
      >
        <div class="container text-center">
          <div class="row gap-2">
            <div className="col-sm-2 gridFirst">
              <h5 className="mt-3">Categories</h5>
              <div
                className="Container"
                style={{
                  maxHeight: "30vh",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <CartProduct />
                {categ.map((item) => {
                  return <CategoryCard item={item} />;
                })}
              </div>
              <Sorting />
            </div>
            <div class="col-sm-8 gridSecond">
              <h3 className="mt-2">Products</h3>

              {prod.map((item) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
