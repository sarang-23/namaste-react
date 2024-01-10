import { DISH_IMAGE_BASE } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

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
          const { name, description, id, price, imageId } = item?.card?.info;
          return (
            <div key={id} className="dish-container">
              <div className="dish-info">
                <div className="dish-name">{name}</div>
                <div className="dish-price">
                  <span className="rupee">{price / 100}</span>
                </div>
                <div className="dish-description">{description}</div>
              </div>
              <div className="dish-image">
                <img src={DISH_IMAGE_BASE + imageId} alt={name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
