import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <>
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img src={`${IMG_CDN_URL}${cloudinaryImageId ? cloudinaryImageId : ""}`} alt={description} onError="this.src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zmxq0pzd6sqtzm1ibpj2'" />
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="font-medium">{description}</div>
        <div>Rupees: {price}</div>
      </div>
    </>
  );
};

export default FoodItem;
