import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu.jsx';
import RestaurantCategory from './RestaurantCategory.jsx';
import { useState } from 'react';
const RestaurentMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null)


    if(resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage } = resInfo.cards[2]?.card?.card?.info;
    const {itemCards} =  resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card  
    console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((elem)=>{
        return elem?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories)
    return (
        <div className="w-[70%] mx-auto text-center ">
            <h1 className='text-2xl font-bold my-2'>{name}</h1>
            <h2 className='text-lg font-semibold text-zinc-500'>{cuisines?.join(", ")} - {costForTwoMessage}</h2>
            {/* <p>{resInfo.info.areaName}</p> */}

            {
                categories.map((elem, index)=>{
                    return <RestaurantCategory 
                    key={elem?.card?.card.title} 
                    resCat={elem?.card?.card} 
                    showItems={index == showIndex ? true : false} 
                    setShowIndex={() => setShowIndex(index)}
                    />
                })
            }
        </div>
    );
};

export default RestaurentMenu;


