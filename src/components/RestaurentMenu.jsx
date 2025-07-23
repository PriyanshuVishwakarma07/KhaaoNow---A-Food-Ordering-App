import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenujsx';
const RestaurentMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info;
    const {itemCards} =  resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
            {/* <p>{resInfo.info.areaName}</p> */}

            {itemCards.map((elem)=>{
                return <li key={elem?.card?.info?.id}>  {elem?.card?.info?.name} ₹  {elem?.card?.info?.price / 100 || "Not Found"}</li>
            })}
        </div>
    );
};

export default RestaurentMenu;


