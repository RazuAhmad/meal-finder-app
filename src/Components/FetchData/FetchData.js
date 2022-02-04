import React, { useEffect, useState } from "react";
import "./FetchData.css";
import ShowCategoryItems from "../ShowCategoryItems/ShowCategoryItems";

const FetchData = () => {
  const [mealCategory, setMealCategory] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMealCategory(data.categories));
  }, []);

  return (
    <div className="fetchDataStyle">
      {mealCategory.map((pd) => (
        <ShowCategoryItems foodCategories={pd} key={pd.idCategory} />
      ))}
    </div>
  );
};

export default FetchData;
