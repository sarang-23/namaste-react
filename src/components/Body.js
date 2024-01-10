import RestauarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import { useState } from "react";

const Body = () => {
  const { resList } = useRestaurantList();
  let filteredList = resList;

  const getTopRatedRes = () => {
    const tempList = resList;
    const topRatedRes = tempList.filter((res) => res.info.avgRating > 4);
    filteredList = topRatedRes;
  };

  const resetFilter = () => {
    filteredList = resList;
  };

  const search = (searchText) => {
    const temp = resList;
    filteredList = temp.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  return (
    <div className="content">
      <div className="all-filters">
        <Search search={(searchText) => search(searchText)} />
        <div className="filter">
          <button onClick={getTopRatedRes}>Show Top Rated</button>
          <button onClick={resetFilter}>Reset Filter</button>
        </div>
      </div>
      {filteredList.length ? (
        <>
          <div className="res-container">
            {filteredList.map((res) => (
              <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
                <RestauarantCard resData={res.info} />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
