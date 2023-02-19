import "./Style.css";
import { MainContext } from "../App";
import { useContext } from "react";
const CategoryCard = ({ item }) => {
  const { img, tag } = item;
  const { setCategory } = useContext(MainContext);
  return (
    <>
      <div
        className="categorycard"
        style={{ width: "5rem", height: "5rem", marginTop: "20px" }}
        onClick={() => setCategory(tag)}
      >
        <img className="card-img-top" src={img} alt="image" />
        <h6 class="fs-10">{tag}</h6>
      </div>
    </>
  );
};

export default CategoryCard;
