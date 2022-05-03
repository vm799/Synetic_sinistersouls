import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Feature from "./components/Feature/Feature"
import Syneverse from "./components/Syneverse/Syneverse"
import About from "./components/About/About"
import NFTgame from "./components/NFTgame/NFTgame";
import Hero from "./components/Hero/Hero";
import Roadmap from "./components/Roadmap/Roadmap";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import TextSlider from "./components/TextSlider/TextSlider";

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
