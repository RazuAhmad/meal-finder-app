import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    setSearchName(event.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
      .then((res) => res.json())
      .then((data) => setSearchResult(data?.meals));
  }, [searchName]);
  console.log(searchResult);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Search Food Item
        <input
          onChange={handleChange}
          style={{ width: "400px", height: "40px", borderRadius: "7px" }}
          type="text"
        />
      </h2>
      <h3>Food Searching: {searchName}</h3>
      {searchResult?.map((food) => (
        <p
          style={{ border: "2px solid red", width: "100px", margin: "auto" }}
          key={food.idMeal}
        >
          {food.strMeal}
        </p>
      ))}
    </div>
  );
};

export default SearchComponent;
