import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox"
// import fimage1 from ".../images/1.png"
import fimage1 from "../../images/1.png"

import fimage2 from "../../images/2.png"

import fimage3 from "../../images/3.png"

export default function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="feature-container">
                {/* <FeatureBox image={fimage1} title="NFTS" />
                <FeatureBox image={fimage2} title="GAMING" />
                <FeatureBox image={fimage3} title="SYNEVERSE" /> */}
                <FeatureBox title="NFTS" />
                <FeatureBox title="GAMING" />
                <FeatureBox title="SYNEVERSE" />
                {/* <FeatureBox image={fimage4} title="Flexibility" /> */}

                </div>
        </div>
    )
}