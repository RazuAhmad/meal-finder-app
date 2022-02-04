import React, { useEffect, useState } from "react";
import "./ShowDetails.css";
import { useParams } from "react-router-dom";
import CategoryDetailsRecipe from "../CategoryDetailsRecipe/CategoryDetailsRecipe";

const ShowDetails = (props) => {
  const { foodCategory } = useParams();
  const [showDetails, setShowDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodCategory}`
    )
      .then((res) => res.json())
      .then((data) => setShowDetails(data?.meals));
  }, [foodCategory]);
  // console.log(showDetails);
  return (
    <div className="detailsRecipe">
      {showDetails?.map((pd) => (
        <CategoryDetailsRecipe foodRecipe={pd} key={pd.idMeal} />
      ))}
    </div>
  );
};

export default ShowDetails;
