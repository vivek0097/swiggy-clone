import React, { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import cardData from "../utils/jsonData";
import userOnlineStatus from '../utils/userOnlineStatus'
 import { Link } from "react-router-dom";


const Body = () => {
  const restaurants = cardData[0].restaurants; // Initial restaurant data
  const [listOfRestaurants, setListOfRestaurants] = useState([...restaurants]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([...restaurants]);


  const RestaurantCardPromoted =  withPromotedLabel(RestaurantCard);


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


   //--getting online status -------------
   const onlineStatus = userOnlineStatus();
   if(onlineStatus === false){
    return(
      <h1>It's Seems Like Your are Offline!  Please Check Your Internet Connection</h1>
    )
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
           <Link 
           key={resItem.info.id}
           to={"/restaurants/"+ resItem.info.id}
           >
            {resItem.info?.promoted === "true" ? 
            (<RestaurantCardPromoted key={index} resData={resItem.info} />) :
             (
              <RestaurantCard key={index} resData={resItem.info} />
             ) }
           </Link>
          
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    
    </div>
  );
};

export default Body;
