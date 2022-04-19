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
</ul>

 <img height="20px" with="20px" src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256013.png?token=exp=1650390671~hmac=d7386b64ab8b0e08c5bae5fb25c81b3f" alt = "twitter"></img>
 <img height="20px" with="20px" src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt = "twitter"></img>
 </nav>
    )
}