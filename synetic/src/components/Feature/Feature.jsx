import React from "react";
import FeatureBox from "../FeatureBox/FeatureBox"
// import fimage1 from ".../images/1.png"
import fimage1 from 
"https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
import fimage2 from 
"https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
import fimage3 from 
"https://images.unsplash.com/photo-1519608487953-e999c86e7455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnV0dXJpc3RpYyUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"


export default function Feature(){
    return(
        <div id="features">
            <h1>Features</h1>
            <div className="feature-container">
                <FeatureBox image={fimage1} title="NFTS" />
                <FeatureBox image={fimage2} title="GAMING" />
                <FeatureBox image={fimage3} title="SYNEVERSE" />
                {/* <FeatureBox image={fimage4} title="Flexibility" /> */}

                </div>
        </div>
    )
}