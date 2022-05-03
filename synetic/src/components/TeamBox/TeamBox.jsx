import React from "react";
import "./TeamBox.css"

export default function TeamBox(props){
    return(
        <div className="team__box">
            <div className="team__box-img">
                {/* <img src={props.image} alt=""/> */}
            </div>
            <div className="team__text"><h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p></div>
        </div>
    )
}