import { CDN_URL } from "../utils/constants";

const RestauarantCard = ({ resData }) => {
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <h4 className="res-costForTwo">{costForTwo}</h4>
        <h5 className="res-cuisines">{cuisines.join(", ")}</h5>
        <h4 className="res-rating">{avgRatingString} Stars</h4>
        <h4 className="res-delivery-time">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestauarantCard;
