import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { RESTAURANT_API } from "../utils/Constents";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () =>{
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(RESTAURANT_API);
    const json = await data.json()
    const resObj = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;;
    console.log(resObj);
    setRestaurantList(resObj);
    setAllRestaurants(resObj);
  }

  const filterHandler = ()=>{
    const filter = allRestaurants.filter((restaurant)=>restaurant.info?.avgRating >= 4.5)
    setRestaurantList(filter)
  }

  const unFilterHandler = ()=>{
    setRestaurantList(allRestaurants); // reset data
    setSearchText("");
  };

  useEffect(()=>{
    const filtered = allRestaurants.filter((restaurant)=>
    restaurant.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    setRestaurantList(filtered);
  },[searchText, allRestaurants])

  
   return restaurantList.length == 0 ? <Shimmer /> :(
    <div className="w-[80%] mx-auto py-5 px-5 flex-col  ">
      <div className="w-full flex gap-2">
        <input className="w-[60%] border rounded px-4" 
        type="text" 
        value={searchText}
        placeholder="Search for restaurants and food" 
        onChange={(e)=> setSearchText(e.target.value)}/>

        <div className="flex gap-4">
          <button className="py-2 px-4 bg-zinc-300 rounded" onClick={filterHandler}>⭐Top Rated</button>
          <button className="py-2 px-4 bg-zinc-300 rounded" style={{marginLeft:"2px"}} onClick={unFilterHandler}>Clear Filters</button>
        </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 ">
        {
          restaurantList.map((restaurant)=> 
          <Link key={restaurant.info.id}  to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
          )
        }
        </div>
    </div>
  )
}

export default Body


