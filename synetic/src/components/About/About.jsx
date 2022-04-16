import React from "react";
import "./About.css";

export default function About(){
    return(
        <div id="about">
        <div id="about-image">
            <img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" /></div>
            <div className="about-text">
                <h1>Learn more about who we are</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aliquam pariatur ut assumenda, ipsum in, alias esse amet molestiae a incidunt et dolor culpa quidem, doloremque tenetur dolorum modi. Debitis.</p>
           
            <button>READ MORE</button>
            </div>
        </div>

    )
}