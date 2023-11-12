import React, { useRef, useEffect, useState } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar" style={{ width: "100vw", height: "4vh" }}>
      <div className="title">Map of Kamikaze Hits</div>
      <div className="about">About This Map</div>
      <div className="made-by">Made by Caleb Hefty</div>
    </div>
  );
}
export default NavBar;
