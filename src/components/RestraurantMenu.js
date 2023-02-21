import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../contants";

const RestraurantMenu = () => {
    // how to read a dynamic url
    const {resId} = useParams();

    const [restaurant, setRestaurant ] = useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=22.5535048&lng=88.3565745&menuId=25140");
        const data = await response.json();
        console.log(data);
        setRestaurant(data.data);
    };

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <h2>id : {resId}</h2>
            <h3>Name : {restaurant.name}</h3>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} /> 
        </div>
    );
};

export default RestraurantMenu;