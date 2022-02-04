import React from "react";
import "./CategoryDetailsRecipe.css";
const CategoryDetailsRecipe = (props) => {
  const { strMeal, strMealThumb } = props.foodRecipe;
  return (
    <div>
      <img
        style={{ width: "300px", height: "280px" }}
        src={strMealThumb}
        alt=""
      />
      <h3>Recipe Name: {strMeal}</h3>
    </div>
  );
};

export default CategoryDetailsRecipe;
