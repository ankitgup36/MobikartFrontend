import axios from "axios";

export const handleClick = async (data, setCartList, setPrice) => {
  let arr;
  const url = "https://mobikartbackend-t58q.onrender.com/api/users/cart";
  await axios.post(url, data).then((d) => {
    setCartList(d.data.orders);
    window.alert("product added to cart");
    arr = d.data.orders;
  });
  let val = 0;
  arr.map((item) => {
    return (val += item.price);
  });
  console.log(val);
  setPrice(val);
};

export const handleDelete = async (data, setCartList, setPrice) => {
  let arr;
  const url =
    "https://mobikartbackend-t58q.onrender.com/api/users/cart/items/delete";
  await axios.post(url, data).then((d) => {
    setCartList(d.data.orders);
    arr = d.data.orders;
    console.log(d.data.orders);
  });
  let val = 0;
  arr.map((item) => {
    return (val += item.price);
  });
  console.log(val);
  setPrice(val);
};
