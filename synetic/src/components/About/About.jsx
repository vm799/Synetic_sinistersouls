import React from "react";
import "../About/About.css";

export default function About(){
    return(
        <div className="about">
        <div className="about-text">
            <h1>SYNETIC</h1>
            <p>Welcome to the SINEVERSE</p>
       
        <button className="about-btn">CONNECT WALLET</button>
        </div>

        <div className="about-image">
        <img width="700" height="400" src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8" alt="" />
        </div>
    </div>

    )
}