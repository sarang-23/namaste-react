import RestauarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
const Body = () => {
  const [resList, setResList] = useState([]);

  const getTopRatedRes = () => {
    const topRatedRes = resList.filter((res) => res.info.avgRating > 4);
    setResList(topRatedRes);
  };

  const resetFilter = () => {
    setResList(fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.993530945149397&lng=77.6846528983745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restaurantCardsData = jsonData?.data?.cards?.filter(
      (c) => c.card?.card?.id === "restaurant_grid_listing"
    );
    setResList(
      restaurantCardsData[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body-container">
      {resList.length ? (
        <>
          <div className="filter">
            <button onClick={getTopRatedRes}>Show Top Rated</button>
            <button onClick={resetFilter}>Reset Filter</button>
          </div>
          <div className="res-container">
            {resList.map((res) => (
              <RestauarantCard key={res.info.id} resData={res.info} />
            ))}
          </div>{" "}
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
