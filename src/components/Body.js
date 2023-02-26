import RestrauntCard from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState("");
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5535048&lng=88.3565745&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <div>You are offline</div>;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          placeholder="Search"
          className="focus:bg-green-100 p-2 m-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-green-900 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input className="p-2 m-2" value={user.name} onChange={ e => setUser({
          ...user,
          name: e.target.value,
        })} ></input>
        <input className="p-2 m-2" value={user.email} onChange={ e => setUser({
          ...user,
          email: e.target.value,
        })} ></input>
      </div>
      <div className="flex flex-wrap">
        {/* {No restaurant match search logic here} */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
