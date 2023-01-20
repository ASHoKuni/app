import React, { useState, useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";
import { restaurantList, IMG_CDN_URL } from "../utils/config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmar";

function filterData(searchText, restaurants) {
  console.log(restaurants, 6);
  const filter = restaurants.filter((restaurant) =>
    (restaurant?.data?.name + restaurant?.data?.cuisines.join(""))
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  //   const filterData1 = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
  //   return filterData1;

  console.log(filter);
  return filter;
}

//api call

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants()
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5454058&lng=73.7777808&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json() 
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data.cards);  //optional chaining 
    setFilterRestaurants(json?.data?.cards[2]?.data?.data.cards);  //optional chaining 
  }

  if(!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search by Restaurant or Food Type...."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
            event.target.value
              ? setFilterRestaurants(filterData(event.target.value, allRestaurants))
              : setFilterRestaurants(allRestaurants);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      { 
      allRestaurants?.length > 0 ? 
      <div className="restrauntlist">
        {filterRestaurants?.length ? (
          filterRestaurants.map((restaurant, index) => {
            return (
              <Link to={"/restaurant/"+restaurant?.data?.id} 
              key={restaurant.data.id}>
              <RestrauntCard {...restaurant.data}  /></Link>
            );
          })
        ) : (
          <p>Restaurant Not Found ...</p>
        )}
      </div>  :<Shimmer/> 
      }
      
    </>
  );
};

export default Body;
