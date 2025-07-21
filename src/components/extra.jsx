import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/Constents";
import Shimmer from "./shimmer";

const Body = () => {
  // 🔹 Sabhi restaurants ko rakhne ke liye
  const [allRestaurants, setAllRestaurants] = useState([]);

  // 🔹 Search ya filter ke baad dikhane ke liye
  const [restaurantList, setRestaurantList] = useState([]);

  // 🔹 User ke search input ko rakhne ke liye
  const [searchText, setSearchText] = useState("");

  // 🔸 Data ko API se fetch karna
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    // ✅ Safe access to nested data
    const resObj =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setAllRestaurants(resObj);      // original list
    setRestaurantList(resObj);      // show on screen
  };

  // 🔍 Real-time search effect — jab bhi searchText badlega
  useEffect(() => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    setRestaurantList(filtered);
  }, [searchText, allRestaurants]);

  // ⭐ Top Rated filter (rating >= 4.5)
  const filterHandler = () => {
    const filtered = allRestaurants.filter(
      (restaurant) => restaurant.info?.avgRating >= 4.5
    );
    setRestaurantList(filtered);
  };

  // 🔄 Filters reset karne ke liye
  const unFilterHandler = () => {
    setRestaurantList(allRestaurants); // reset data
    setSearchText("");                 // reset input
  };

  // 🌀 Shimmer jab tak data load ho raha ho
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  // ✅ Actual JSX render
  return (
    <div className="body">
      
      {/* 🔍 Search Input + Filter Buttons */}
      <div className="search">
        <input
          className="search-box"
          type="text"
          value={searchText}
          placeholder="Search for restaurants and food"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="filter">
          <button className="topRated" onClick={filterHandler}>
            ⭐ Top Rated
          </button>
          <button style={{ marginLeft: "2px" }} onClick={unFilterHandler}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* 🍴 Restaurants List */}
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
