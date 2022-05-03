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
                 Join Us. </p>
                 <p> Let's disrupt together.</p> 
            <div className="team-container">
            
                <TeamBox title="Creator Lex0" text="Into retro gaming and sushi"/>
                <TeamBox title="Creator Ruyu" text="American Muscle car mad and master of my own ship"/>
                <TeamBox title="Builder Panthera" text="Fav character: Yoshimitsu and deconstructed apple pies" />
        

                </div>
        </div>
    )
}