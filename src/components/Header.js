import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const changeBtnName = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }
    console.log("Header");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                 src={LOGO_URL}
                 alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" >Home </Link>
                    </li>
                    <li>
                        <Link to="/about" >About </Link>
                    </li>
                    <li >
                        <Link to="/contact" >Contact Us </Link>
                    </li>
                    <li>Cart</li>
                    <li>
                    <button className="login-btn" onClick={changeBtnName}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;