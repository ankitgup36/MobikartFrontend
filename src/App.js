import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Cart,
  Navbar,
  ProductDetails,
  Confirmation,
} from "./Components";
import { createContext } from "react";

export const MainContext = createContext();
const App = () => {
  const [showProduct, setShowProduct] = useState();
  const [category, setCategory] = useState("mobile");
  const [searchProduct, setSearchProduct] = useState("");
  const [prod, setProd] = useState([]);
  const [sort, setSort] = useState("asc");
  const [cartItem, setCartItem] = useState("");
  const [cartList, setCartList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [tokan, setTokan] = useState(false);
  const [Price, setPrice] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  return (
    <MainContext.Provider
      value={{
        showProduct,
        setShowProduct,
        setCategory,
        category,
        prod,
        setProd,
        searchProduct,
        setSearchProduct,
        sort,
        setSort,
        cartItem,
        setCartItem,
        cartList,
        setCartList,
        amount,
        setAmount,
        tokan,
        setTokan,
        Price,
        setPrice,
        userDetails,
        setUserDetails,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/cart" element={<Cart />} />
          <Route path="/home/productdetails" element={<ProductDetails />} />
          <Route path="/home/cart/confirm" element={<Confirmation />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default App;
