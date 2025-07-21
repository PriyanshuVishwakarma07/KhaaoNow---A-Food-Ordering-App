import { FaStar } from "react-icons/fa6";
import { CDN_URL } from "../utils/Constents";
const RestaurantCard = (props) =>{
  const {resData} = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;
  return(
    <div className="res-card" >
      <img src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <span><h4>{avgRating} <FaStar /></h4> <h4>45 minutes</h4></span>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  )
}

export default RestaurantCard