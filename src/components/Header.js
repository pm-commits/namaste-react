import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const changeBtnName = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    }
    
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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