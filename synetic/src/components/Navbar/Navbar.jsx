import React from "react";

import {Link} from 'react-scroll'

export default function Navbar(){

//     const [nav, setNav] = useState(false)
//    function changeBackground(){
//        if(window.scrollY >= 50){
//            setNav(true);
//        } else {
//            setNav(false)
//        }
//    }

//    window.addEventListener("scroll", changeBackground)

    return (
        <nav className= "nav">
<a href="#" className= "logo" >
    SYNETIC
</a>

<ul className="menu">
<li>
    <Link to="main" smooth={true}
duration={1000}>NFT</Link></li>
<li>
    <Link to="Features"smooth={true}
duration={1000}>SYNEVERSE</Link></li>


<li>
    <Link to="Contact" smooth={true}
duration={1000}>Contact</Link></li>
</ul>
        </nav>
    )
}