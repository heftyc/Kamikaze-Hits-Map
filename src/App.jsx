import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import AboutPanel from "./components/AboutPanel";
function App() {
  const [aboutToggled, setAboutToggled] = useState(false);
  const handleAboutToggle = () => {
    setAboutToggled((previousState) => !previousState);
  };

  return (
    <div>
      <NavBar onButtonClicked={handleAboutToggle} />
      <AboutPanel aboutToggled={aboutToggled} />
      <Map />
    </div>
  );
}

export default App;
