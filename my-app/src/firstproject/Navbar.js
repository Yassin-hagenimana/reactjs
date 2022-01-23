import React from "react";
import Logo from "../images/react-logo.png"

export default function Navbar(){
    return(
        <div>
           <nav>
               <img src={Logo} alt="React" className="nav--icon" />
               <h3 className="nav--logo_text">ReactFacts</h3>
               <h4 className="nav--title">React Course - Project 1</h4>
           </nav>
        </div>
    )
}