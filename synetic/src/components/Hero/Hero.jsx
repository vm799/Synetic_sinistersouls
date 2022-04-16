import React from "react";
import "../Hero/Hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>SYNETIC</h1>
                <p>Welcome to the SINEVERSE</p>
           
            <button>CONNECT WALLET</button>
            </div>

            <div id="hero-image">
            <img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" />
            </div>
        </div>
      
    )
}