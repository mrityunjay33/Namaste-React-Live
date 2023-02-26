import {IMG_CDN_URL} from "../contants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString, 
  }) => {
    const {user} = useContext(UserContext);
    return (
      <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
        <img src={ IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
        <p className="font-bold">{user.name} - {user.email}</p>
      </div>
    );
  };

  export default RestrauntCard;