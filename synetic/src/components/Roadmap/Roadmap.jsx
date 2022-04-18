import React from "react";
import "../Roadmap/Roadmap.css";

export default function Roadmap(){
    return(
        <div className="roadmap">
            
            <div className="roadmap_title-box">
            <div className="roadmap_number">
                1
            </div>
            
            <div className="roadmap__box">
             <div className="roadmap_phase">
                  PHASE 1 - COMPLETED
             </div>
              <div className="roadmap_title">
                  SPRING 2022 - PRE LAUNCH</div>
             </div>
            </div>

        <div className="roadmap_main-box">
        <div className="roadmap__phase">
              <div className="roadmap__main-points">
            Website 1.2
            Discord community promotion
            MINTING WAVE NFTs
              </div>
              <div className="roadmap_text">
              WAVE NFTs will be 100% pre-minted and launched as an OpenOcean collection
              </div>
        </div>
              <div className="roadmap_image">
                  <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80" alt=""></img>
              </div>
              
        </div>

        
        </div>
       
    )
}
