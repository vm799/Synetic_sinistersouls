import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox"

export default function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="feature-container">
            
                <FeatureBox title="NFTS" />
                <FeatureBox title="GAMING" />
                <FeatureBox title="SYNEVERSE" />
        

                </div>
        </div>
    )
}