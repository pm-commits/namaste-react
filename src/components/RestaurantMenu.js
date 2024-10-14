import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useEffect , useState } from "react";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState([]);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);


    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=` + resId);
        const json = await data.json();
        setResInfo(json?.data);
    }

    const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;
    const menu = resInfo?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards?.[2].card.card.itemCards;

    return resInfo === null ?  <Shimmer /> :  (
        <div className="menu">
        <h1>{restaurantData?.name}</h1>
        <div>{restaurantData?.cuisines?.join(", ")} - {restaurantData?.costForTwoMessage}</div>
        <h2>Menu</h2>
        <ul>
            {menu?.map((item)=> <li key={item.card.info.id}>{item.card?.info?.name}  : ₹ {item.card?.info?.price / 100}</li>)}
        </ul>
        </div>
    )
};
export default RestaurantMenu;