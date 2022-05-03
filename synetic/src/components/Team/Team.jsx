import React from "react";
import TeamBox from "../TeamBox/TeamBox"
import "../Team/Team.css"

export default function Team(){
    return(
        <div id="team">
            <h1>Meet The Team</h1>
            <h2>Created by 2 friends who share a common vision of 
                building a virtual escape from the harsh confines and constraints of
                 modern day reality on an ingenious revolutionary new digital platform. 
                 Join Us.  Let's disrupt together. </h2>
            <div className="team-container">
            
                <TeamBox title="Creator Lex0" />
                <TeamBox title="Creator Ruyu" />
                <TeamBox title="Builder Panthera" />
        

                </div>
        </div>
    )
}