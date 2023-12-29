import RestauarantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
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

  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const search = () => {
    const temp = resList;
    setFilteredList(
      temp.filter((res) =>
        res.info?.name?.toLowerCase().includes(searchText.toLocaleLowerCase())
      )
    );
  };
  return (
    <div>
      {filteredList.length ? (
        <>
          <div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter restaurant name"
            />
            <button onClick={search}>Search</button>
          </div>
          <div className="filter">
            <button onClick={getTopRatedRes}>Show Top Rated</button>
            <button onClick={resetFilter}>Reset Filter</button>
          </div>
          <div className="res-container">
            {filteredList.map((res) => (
              <RestauarantCard key={res.info.id} resData={res.info} />
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
