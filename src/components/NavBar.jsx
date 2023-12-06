import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";

function NavBar({ onButtonClicked }) {
  const [buttonText, setButtonText] = useState("About This Map");

  const handleButtonClicked = () => {
    onButtonClicked();
    setButtonText((prevText) =>
      prevText === "About This Map" ? "Hide About This Map" : "About This Map"
    );
  };

  return (
    <div className="navBar" style={{ width: "100vw", height: "8vh" }}>
      <div className="title">Kamikaze Hits on Allied Ships</div>
      <button className="about" onClick={handleButtonClicked}>
        {buttonText}
      </button>
      <div className="made-by">
        <a href="https://github.com/heftyc/Kamikaze-Hits-Map">
          <u>Made by Caleb Hefty</u>
        </a>
      </div>
    </div>
  );
}
export default NavBar;
