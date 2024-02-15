const RestaurantCard = (props) => {
    const {url, name, cuisines, delivery, id,rating} = props.resData;
    return (
        <div className="res-card">
                <img className="res-logo" src={url} alt="res-img"/>
            <div className="id">{id}</div>
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines.join(',')}</div>
            <div className="delivery">{delivery}</div>
            <div className="rating">{rating}</div>
            
        </div>
    )
};

export default RestaurantCard;