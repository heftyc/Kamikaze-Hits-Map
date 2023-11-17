import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar" style={{ width: "100vw", height: "8vh" }}>
      <div className="title">Kamikaze Hits on Allied Ships</div>
      <div className="about">About This Map</div>
      <div className="made-by">
        <a href="https://github.com/heftyc/Kamikaze-Hits-Map">
          <u>Made by Caleb Hefty</u>
        </a>
      </div>
    </div>
  );
}
export default NavBar;
