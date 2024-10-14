import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/contact";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = (props) => {
    const path = props.path;
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
};

const appRoutes = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [{
            path: "/",
            element: <Body />
        },{
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        }]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
