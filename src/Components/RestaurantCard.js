import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log(props.resData)
    let {resData} = props;
    // console.log(resData)
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
 
  




    return(
      <div className="res-card m-2 p-2 w-[250px]  shadow-xl bg-gray-100 hover:bg-gray-200 ">
       <img src={cloudinaryImageId} alt="restaurant images" className="size-48 shrink-0 w-[100%] " />
           
        <h3 className="rescard-heading">{name}</h3>
         <h5 style={{marginTop:'0px', marginBottom:'0px', paddingTop:'3px', paddingBottom:'3px'}}>{cuisines.join(", ")}</h5>
         <h5 style={{marginTop:'0px', marginBottom:'0px', paddingTop:'3', paddingBottom:'3px'}}><span style={{backgroundColor:'green', color:'white', padding:'0px 5px 0px 5px'}}>{avgRating}</span>⭐</h5> 
       
      </div>
    )
  }

  export default RestaurantCard;

  //------------Higher order components
  //  input - RestaurantCard => restaurantCardPromoted

export const withPromotedLabel =(RestaurantCard) => {
  return (props) =>(
    <div className="relative">
      <label className="absolute bg-black text-white rounded-lg px-2 m-2 py-1 z-10 text-sm">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
}



