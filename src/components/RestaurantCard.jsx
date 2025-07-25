import { FaStar } from "react-icons/fa6";
import { CDN_URL } from "../utils/Constents";
import { GoDotFill } from "react-icons/go";

const RestaurantCard = (props) =>{
  const {resData} = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;
  return(
    <div className="w-50  rounded-lg p-2 border border-transparent hover:border-black shadow-lg hover:scale-105" >
      <img className="w-full h-[180px] object-cover rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg mt-2">{name.length >= 20 ? name.slice(0,10) : name}</h3>
      <h4 className="font-semibold ">{costForTwo}</h4>
      <span className="flex  items-center gap-2"><h4 className="flex items-center gap-1 font-semibold"><FaStar className="text-green-700" />{avgRating} </h4><h4 ><GoDotFill /></h4> <h4 className="font-semibold">25-30 mins</h4></span>
      <h4 className="truncate text-zinc-600">{cuisines.join(", ")}</h4>
    </div>
  )
}

export default RestaurantCard