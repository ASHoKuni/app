import React, { useEffect, useState } from "react";
import { FaAtlas } from "react-icons/fa";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../../utils/config";

const RestaurantDetails = () => {
  const { id } = useParams();

  const [restaurant, setRestaurants] = useState({});

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5454058&lng=73.7777808&restaurantId=" +
        id
    );

    const json = await data.json();
    console.log(json);
    setRestaurants(json.data.cards[0]?.card?.card?.info);
  }
  return (
    <>
      {restaurant ? (
        <div>
          {" "}
          Restaurant id : {id}
          <h1>{restaurant?.name}</h1>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <p>{restaurant?.city}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default RestaurantDetails;
