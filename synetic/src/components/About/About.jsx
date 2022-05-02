import React from "react";
import "../About/About.css";

export default function About(){
    return(
        <div className="about">
      
        <div className="about-image">
        <h1>SYNETIC</h1>
        <img width="700" height="400" src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8" alt="" />
        </div>

        <div className="about-text">
            
            <p className="text-highlight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus tempora, 
                fugit magni cumque magnam nisi officiis.</p>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Perferendis, sunt laboriosam nesciunt. </p>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Perferendis, sunt laboriosam nesciunt ipsa sit minima eaque nostrum animi corporis iste totam tenetur eos mollitia quas alias? 
                Inventore cum enim commodi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, officiis?</p>
       
        <button className="about-btn">CONNECT WALLET</button>
        </div>

        
        
    </div>

    )
}