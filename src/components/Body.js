import RestauarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Search from "./Search";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [resList, setResList] = useState([]);

  const getTopRatedRes = () => {
    const topRatedRes = resList.filter((res) => res.info.avgRating > 4);
    setFilteredList(topRatedRes);
  };

  const resetFilter = () => {
    setFilteredList(fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.993530945149397&lng=77.6846528983745&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_655f3dd194cc10f9dfe3c36e7039df1a",
        },
      }
    );
    const jsonData = await data.json();
    const restaurantCardsData = jsonData?.data?.cards?.filter(
      (c) => c.card?.card?.id === "restaurant_grid_listing"
    );
    const restaurants =
      restaurantCardsData[0]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants);
    setFilteredList(restaurants);
  };

  const [filteredList, setFilteredList] = useState([]);

  const search = (searchText) => {
    console.log(searchText);
    const temp = resList;
    setFilteredList(
      temp.filter((res) =>
        res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      )
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
