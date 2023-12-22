import { restaurants } from "../utils/mockData";
import RestauarantCard from "./RestaurantCard";

import { useState } from "react";
const Body = () => {
  const [resList, setResList] = useState(restaurants);

  const getTopRatedRes = () => {
    const topRatedRes = restaurants.filter((res) => res.info.avgRating > 4);
    setResList(topRatedRes);
  };

  const resetFilter = () => {
    setResList(restaurants);
  };

  return (
    <div className="body-container">
      <div className="filter">
        <button onClick={getTopRatedRes}>Show Top Rated</button>
        <button onClick={resetFilter}>Reset Filter</button>
      </div>

      <div className="res-container">
        {resList.map((res) => (
          <RestauarantCard key={res.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
