import { useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "../utils/jsonData";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu =() => {
 
    const {resId} = useParams();
 const restaurants = cardData[0].restaurants; 

const [showIndex, setShowIndex] = useState(0)



  // Find the matching restaurant by ID
  const restaurant = restaurants.find((res) => res.info.id === resId);

    if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }


  const menuData = restaurant.info?.Card?.card;
  const title = menuData[0].title || "Menu";
  

  return(
  <div className="text-center p-4 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {/* --controlled component */}
      {menuData.map((category , index) => (
         <RestaurantCategory 
         key={index} 
         data={category}  
         showItems={index === showIndex ? true : false}
         setShowIndex={() =>setShowIndex(index)}
         />
       ))}
      
    </div>
  )
}

export default RestaurantMenu;