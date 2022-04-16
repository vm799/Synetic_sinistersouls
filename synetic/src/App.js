import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Feature from "./Components/Feature/Feature"
import Offer from "./Components/Offer"
import About from "./Components/About/About"
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <Header />
     <Feature />
     <Offer />
     <About />
     <Contact />
     <Footer />
    </div>
  )
}

export default App;
