import React from "react";

import { useParams } from "react-router-dom";
import cardData from "../utils/jsonData";


const RestaurantMenu =() => {
    const {resId} = useParams();
 const restaurants = cardData[0].restaurants; 
console.log(typeof(resId))
  // Find the matching restaurant by ID
  const restaurant = restaurants.find((res) => res.info.id === resId);

    if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }

  const menuData = restaurant.info.Card?.card;
  const title = menuData?.title || "Menu";
  const items = menuData?.itemCards || [];

  return(
  <div className="res-menu p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {items.length > 0 ? (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded shadow">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p>
                Price:{" "}
                <span className="text-green-700 font-medium">
                  {item.price || item.defaultPrice}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu items found.</p>
      )}
    </div>
  )
}

export default RestaurantMenu;