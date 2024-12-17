import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import cardData from "../utils/jsonData";

const Body = () => {
  const restaurants = cardData[0].restaurants; // Initial restaurant data
  const [listOfRestaurants, setListOfRestaurants] = useState([...restaurants]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([...restaurants]);

  // Filter function
  const filterCards = (event) => {
    const input = event.target.value;
    setSearchText(input);

    if (input.trim() === "") {
      setFilteredData(listOfRestaurants);
    }
  };

  const searchFun = () => {
    if (searchText.trim() === "") {
      setFilteredData(listOfRestaurants);
      return;
    }

    const filteredResults = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filteredResults);
  }

  //--reset  fun---------------
   const resetList = () => {
    setFilteredData(listOfRestaurants)
    setSearchText("")
   }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={filterCards}
          />
          <button className="btn-search" type="button" onClick={searchFun}>Search</button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredData(filteredList);
            }}
            style={{padding:'2px'}}
          >
            Top Rated Restaurants
          </button>
          <button type="button" style={{padding:'2px'}} onClick={resetList}>Reset</button>
        </div>
      </div>

      <div className="res-container">
        {filteredData.length > 0 ? (
          filteredData.map((resItem, index) => (
            <RestaurantCard key={index} resData={resItem.info} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
