import React from "react";
import Logo from "../images/grid.png"
export default function Hero(){
    return(
        <section className="hero">
            <img src={Logo} alt="Grid" className="hero--photo"  />
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interative activities led by
                one-of-a-kind hosts-all without leaving home.
            </p>
        </section>
    )
}
//2:43:28 /card