import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  });
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
  };

  return { resList };
};

export default useRestaurantList;
