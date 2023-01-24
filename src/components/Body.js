import { joinPaths } from "@remix-run/router";
import { CARD_IMG,IMG_CDN_URL,restaurantList} from "../../Constants";

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
const Body = () => {
  return (
    <div className="restaurant-list">
{
    restaurantList.map(restaurant=>{
        return (
            <RestaurantCard {...restaurant?.data} key = {restaurant.data.id}/>
        )
    }
    )
    }
    {/* <RestaurantCard {...restaurantList[0]?.data}/>
    <RestaurantCard {...restaurantList[1].data}/>
    <RestaurantCard {...restaurantList[2].data}/>
    <RestaurantCard {...restaurantList[3].data}/>
    <RestaurantCard {...restaurantList[4].data}/> */}
      {/* <RestaurantCard name={restaurantList[0]?.data?.name} cuisines={restaurantList[0]?.data?.cuisines} cloudinaryImageId={restaurantList[0]?.data?.cloudinaryImageId}/>
      <RestaurantCard  name={restaurantList[1]?.data?.name} cuisines={restaurantList[1]?.data?.cuisines} cloudinaryImageId={restaurantList[1]?.data?.cloudinaryImageId} />
      <RestaurantCard  name={restaurantList[2]?.data?.name} cuisines={restaurantList[2]?.data?.cuisines}  cloudinaryImageId={restaurantList[2]?.data?.cloudinaryImageId}/>
      */}
    </div>
  );
};

export default Body;
