import { restrautList } from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchInput, restrautList) {
  return restrautList.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurant] = useState(restrautList);

  // Empty dependency array => useEffect will be called one time after initial render
  // dependency array [searchInput] => once after initial render + everytime after rerender (after setSearchInput changes)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5535048&lng=88.3565745&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  console.log("render");

  /**
   * Shimmer UI
   *    - Conditional Rendering
   *  If restaurant us Empty -> Shimmer UI
   *  If restaurant has data => actual data UI
   */

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchInput, restrautList);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
