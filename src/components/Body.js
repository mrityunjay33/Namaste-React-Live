import { restrautList } from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchInput)
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurant] = useState(restrautList);
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
            const data = filterData(searchInput, restaurants);
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
