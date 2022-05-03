import React from "react";
import TeamBox from "../TeamBox/TeamBox"
import "../Team/Team.css"

export default function Team(){
    return(
        <div id="team">
            <h1>Meet The Team</h1>
            <h2>Created by 2 friends with common vision of disrupting reality.</h2>
             <p> A virtual escape from the harsh confines and constraints of
                 modern day reality on an ingenious revolutionary new digital platform. 
                </p>

                <div className="straplines">
                <p> Join Us. </p>
                <p> Let's disrupt together.</p> 
                </div>

            <div className="team-container">
                <TeamBox title="Creator Lex0" text="Into retro gaming,sushi and racing dolphins"/>
                <TeamBox title="Creator Ruyu" text="American Muscle car mad and racing snails"/>
                <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu, deconstructed apple pies and demon dj" />
        

                </div>
        </div>
    )
}