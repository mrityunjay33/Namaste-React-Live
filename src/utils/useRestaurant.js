import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(FETCH_MENU_URL + resId);
    const data = await response.json();
    // console.log(data);
    setRestaurant(data.data);
  }
  return restaurant;
};
export default useRestaurant;
