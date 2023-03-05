import { IMG_CDN_URL } from "../contants";
import Image from "../assets/img/foodvilla.png";

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {
  return (
    <>
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img
          src={
            cloudinaryImageId.length > 1
              ? IMG_CDN_URL + cloudinaryImageId
              : Image
          }
          alt={description}
          onError={() => ""}
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="font-medium">{description}</div>
        <div>Rupees: {price/100}</div>
      </div>
    </>
  );
};

export default FoodItem;
