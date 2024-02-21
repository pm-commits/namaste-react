import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constants";
import { useState } from "react";


const Body = () => {
    //Normal JS Variable

    //State Variable
    const [listOfRestros, setValue] = useState(RES_LIST);
    
    function showTopRatedRestros(){
        console.log(listOfRestros);
        setValue(RES_LIST.filter(restaurant => restaurant.rating > 4));
    };
    function handleClick(selectedResId){
        console.log(selectedResId);
    }
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={showTopRatedRestros}>Top Rated Restros</button>
            </div>
            <div className="res-container">
                {
                    listOfRestros.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} onSelect={() => handleClick(restaurant.id)}/>))
                }
                {/* <RestaurantCard  resName="R1" cuisine="south indian"/>
                <RestaurantCard  resName="R2" cuisine="north indian"/> */}
            </div>
        </div>
    )
};

export default Body;