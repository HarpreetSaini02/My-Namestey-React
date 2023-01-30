
import { useEffect , useState} from "react";
import {FETCH_MENU_URL} from "../../Constants";

    const useRestaurant = (resId) => {
    const [restaurant, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9030203&lng=77.6407258&menuId=" +
          resId
      );
    const json = await data.json();
    setRestauraunt(json.data);
  }
  return restaurant;
};

export default useRestaurant;
