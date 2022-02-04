import React from "react";
import { Route, Routes } from "react-router-dom";
import FetchData from "./Components/FetchData/FetchData";
import SearchComponent from "./Components/SearchComponent/SearchComponent";

import ShowDetails from "./Components/ShowDetails/ShowDetails";

const App = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome to our Meal Finder App...</h2>
      <SearchComponent />
      <Routes>
        {/* <Route path="/home" element={<SearchComponent />} /> */}
        <Route path="/" element={<FetchData />} />

        <Route path="/showDetails/:foodCategory" element={<ShowDetails />} />
      </Routes>
    </div>
  );
};

export default App;
