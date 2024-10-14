const RestaurantCard = (props) => {
    const restroData = props.resData;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restroData.cloudinaryImageId} alt="res-img"/>
            <div className="id">{restroData.id}</div>
            <div className="name">{restroData.name}</div>
            <div className="cuisines">{restroData.cuisines.join(',')}</div>
            <div className="delivery">{restroData.sla.deliveryTime}</div>
            <div className="rating">{restroData.avgRatingString}</div>
            <button onClick={props.onSelect}>Reset</button>
            
        </div>
    )
};

export default RestaurantCard;