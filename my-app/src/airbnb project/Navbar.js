import React from "react";
import Logo from "../images/arbnb-logo.jpg"
export default function Navbar(){

    return(
        <nav>
            <img src={Logo} alt="React" className="nav--logo" />
        </nav>
    )
}