import React from "react";
import "./ShowCategoryItems.css";
import { Link } from "react-router-dom";
const ShowCategoryItems = (props) => {
  const { strCategory, strCategoryThumb } = props.foodCategories;
  // console.log(props.foodCategories);
  return (
    <div className="showCategoryStyle">
      <h4>Category Name: {strCategory}</h4>
      <img
        style={{ width: "80%", height: "70%" }}
        src={strCategoryThumb}
        alt="This is a food category"
      />
      <Link to={"/showDetails/" + strCategory}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default ShowCategoryItems;
