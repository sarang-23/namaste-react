import { useEffect, useState } from "react";
import { HEADERS, PROXY, RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(PROXY + RESTAURANT_MENU_API + resId, HEADERS);
    const json = await data.json();
    setResMenu(json.data);
  };

  if (!resMenu) return <Shimmer />;

  const { name, areaName, avgRatingString } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="res-menu-wrapper">
      <div className="restaurant-details">
        <span className="res-menu-name">{name}</span>
        <span>{areaName}</span>
        <span>{avgRatingString}</span>
      </div>
      <div className="res-dishes-container">
        {itemCards?.map((item) => {
          const { name, description, id, price } = item?.card?.info;
          return (
            <div key={id}>
              <div className="dish-name">{name}</div>
              <div className="dish-price">
                <span class="rupee">{price / 100}</span>
              </div>
              <div className="dish-description">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
