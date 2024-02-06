import React from "react";
import ReactDOM from "react-dom/client";
/*
 FOOD ORDERING APP

 * Header
    Logo
    Nav Items

 *Body
    Search 
    RestaurantContainer
    RestaurantCard
        Name
        Image
        Rating
        Cuisines
        Delivery Time

 *Footer
    Copyright
    Links
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                 src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) => {
    const {url, name, cuisines, delivery} = props.resData;
    return (
        <div className="res-card">
                <img className="res-logo" src={url}/>
            <div className="name">{name}</div>
            <div className="cuisines">{cuisines}</div>
            <div className="delivery">{delivery}</div>
        </div>
    )
}

const resList = [{
    url: 'https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg',
    name: 'abc',
    cuisines: 'south indian',
    delivery: '35-40 mins',
    id: 1
},
{
    url: 'https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg',
    name: 'xyz',
    cuisines: 'north indian',
    delivery: '35-40 mins',
    id: 2
},
{
    url: 'https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg',
    name: 'pqr',
    cuisines: 'chinese',
    delivery: '1 hr',
    id: 3
}]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }
                {/* <RestaurantCard  resName="R1" cuisine="south indian"/>
                <RestaurantCard  resName="R2" cuisine="north indian"/> */}
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
