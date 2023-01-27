import {IMG_CDN_URL} from "../../Constants";


const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    return (
      <div className="card">
        <img className="card-img" src={IMG_CDN_URL + cloudinaryImageId} />
        <h3> {name} </h3>
        <h4> {cuisines.join(", ")} </h4>
        <h4> {avgRating} stars</h4>
      </div>
    );
  };

  export default RestaurantCard;