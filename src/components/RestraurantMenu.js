import { useParams } from "react-router-dom";

const RestraurantMenu = () => {
    const {id} = useParams(); // destructure on the fly
    return (
        <div>
            <h1>Restaurant Menu</h1>
            <h2>id : {id}</h2>
        </div>
    );
};

export default RestraurantMenu;