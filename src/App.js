import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import JoinUs from "./components/JoinUs/JoinUs";
import Features from "./components/Features/Features";
import BigOffer from "./components/BigOffer/BigOffer";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map.js"

const App = () => {
  return (
    <div className="App">
      <Main />
      <JoinUs />
      <Features />
      <BigOffer />
      <Pricing />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
