import RestaurantCard from "./RestaurantCard";
import { SWIGGY_FETCH_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    //State Variables
    const [listOfRestros, setlistOfRestros] = useState([]);
    const [inputText, setInputText] = useState("");
    const [filteredListOfRestros, setFilteredListOfRestros] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(SWIGGY_FETCH_API);
        const json = await data.json();
        setlistOfRestros(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRestros(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    function showTopRatedRestros(){
        setFilteredListOfRestros(filteredListOfRestros.filter(restaurant => restaurant.info.avgRating > 4.2));
    };

    function handleClick(selectedResId){
        console.log(selectedResId);
    }

    function showSearchResults(){
        setInputText("");
        const filteredListOfRestros = listOfRestros.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(inputText));
        setFilteredListOfRestros(filteredListOfRestros);
    }


    return listOfRestros.length === 0 ? (
        <div className="body">
            <Shimmer />
        </div>
    )
    : (
            <div className="body">

                <div className="filter">
                    <input className="search" type="text" value={inputText} onChange={
                        (e) => {
                            setInputText(e.target.value);
                        }
                    } />
                    <button className="filter-btn" onClick={showSearchResults}>Search</button>
                    <button className="filter-btn" onClick={showTopRatedRestros}>Top Rated Restros</button>
                </div>
                <div className="res-container">
                    {
                        filteredListOfRestros?.length === 0 ? <h2>No results</h2> : filteredListOfRestros.map((restaurant) =>
                        (<Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant.info} onSelect={() => handleClick(restaurant.info.id)} />

                        </Link>))
                    }

                </div>
            </div>
    )
};

export default Body;