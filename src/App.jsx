import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import AboutPanel from "./components/AboutPanel";
import Disclaimer from "./components/Disclaimer";
function App() {
  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    setAboutToggled((previousState) => !previousState);
  };

  return (
    <div>
      <NavBar onButtonClicked={handleAboutToggle} />
      <Disclaimer />
      <AboutPanel aboutToggled={aboutToggled} />
      <Map />
    </div>
  );
}

export default App;
