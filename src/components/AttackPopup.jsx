import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import ReactDOM from "react-dom";
import "./AttackPopup.css";

const AttackPopup = ({
  country,
  fate,
  date,
  targetType,
  targetName,
  sources,
}) => (
  <div className="popup">
    <h2 className="target-name">{targetName}</h2>
    <p>{targetType}</p>
    {renderFate(fate)}
    <p>Struck: {date}</p>
  </div>
);

const renderFate = (fate) => {
  if (fate === "Sunk") {
    return <p className="fate-sunk">Sunk</p>;
  } else {
    return <p className="fate-damaged">Damaged</p>;
  }
};
export default AttackPopup;
