import React from "react";
import FeatureBox from "./FeatureBox"
import fimage1 from "../images/1.png"
import fimage2 from "../images/2.png"
import fimage3 from "../images/3.png"
import fimage4 from "../images/4.png"

export default function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="feature-container">
                <FeatureBox image={fimage1} title="Strength training" />
                <FeatureBox image={fimage2} title="Nutrition" />
                <FeatureBox image={fimage3} title="Wellbeing" />
                <FeatureBox image={fimage4} title="Flexibility" />

                </div>
        </div>
    )
}