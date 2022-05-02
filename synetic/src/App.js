import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Feature from "./Components/Feature/Feature"
import Syneverse from "./Components/Syneverse/Syneverse"
import About from "./Components/About/About"
import NFTgame from "./Components/NFTgame/NFTgame";
import Hero from "./Components/Hero/Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import TextSlider from "./Components/TextSlider/TextSlider";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <ImageSlider />
     <Feature />
     <TextSlider />
     <Syneverse />
     <NFTgame />
     <About />
     <Roadmap />
     <Contact />
     <Footer />
    </div>
  )
}

export default App;
