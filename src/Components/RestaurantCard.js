import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    // console.log(props.resData)
    let {resData} = props;
    // console.log(resData)
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
 
  




    return(
      <div className="res-card">
       <img src={cloudinaryImageId} alt="restaurant images" className="res-img" />
           
        <h3 className="rescard-heading">{name}</h3>
         <h5 style={{marginTop:'0px', marginBottom:'0px', paddingTop:'3px', paddingBottom:'3px'}}>{cuisines.join(", ")}</h5>
         <h5 style={{marginTop:'0px', marginBottom:'0px', paddingTop:'3', paddingBottom:'3px'}}><span style={{backgroundColor:'green', color:'white', padding:'0px 5px 0px 5px'}}>{avgRating}</span>⭐</h5> 
       
      </div>
    )
  }

  export default RestaurantCard;


