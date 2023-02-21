import { useParams } from "react-router-dom";

const RestraurantMenu = () => {
    const params = useParams();
    const {id} = params;
    console.log(params);
    return (
        <div>
            <h1>Restaurant Menu</h1>
            <h2>id : {id}</h2>
        </div>
    );
};

export default RestraurantMenu;