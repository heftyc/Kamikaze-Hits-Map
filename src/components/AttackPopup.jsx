import React, { useRef, useEffect, useState } from "react";
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
    <div>
      <p>Sources: </p>
      <div className="In-constructor">{renderSources(sources)}</div>
    </div>
  </div>
);

const renderFate = (fate) => {
  if (fate === "Sunk") {
    return <p className="fate-sunk">Sunk</p>;
  } else {
    return <p className="fate-damaged">Damaged</p>;
  }
};

const renderSources = (sources) => {
  const tokens = sources.split("|");
  return (
    <div className="In-rendersources">
      {tokens.map((item, index) => (
        <span key={index}>
          {renderSource(item, index == tokens.length - 1)}
        </span>
      ))}
    </div>
  );
};

var urlNames = [
  ["http://www.navy.gov.au/", "Australian Naval Records"],
  ["https://catalog.archives.gov", "Ship Records"],
  ["http://www.navsource.org", "NavSource Naval History"],
  ["http://www.ibiblio.org/hyperwar", "HyperWar"],
  ["https://uboat.net", "uboat.net"],
  ["http://www.naval-history.net", "naval-history.net"],
  ["https://www.naval-history.net", "naval-history.net"],
  ["https://wikimapia.org/", "wikimapia.org"],
  ["https://www.ussbush.com", "www.ussbush.com"],
  ["http://www.combinedfleet.com", "combinedfleet.com"],
];

const renderSource = (sourceText, ending) => {
  sourceText = sourceText.trim();
  let link = null;

  if (sourceText.startsWith("Cressman")) {
    link = (
      <a
        href="https://www.ibiblio.org/hyperwar/USN/USN-Chron.html"
        target="_blank"
      >
        {sourceText}
      </a>
    );
  } else {
    for (let i = 0; i < urlNames.length; i++) {
      if (sourceText.startsWith(urlNames[i][0])) {
        link = (
          <a href={sourceText} target="_blank">
            {urlNames[i][1]}
          </a>
        );
      }
    }
  }

  if (link == null) {
    link = <span>{sourceText}</span>;
  }

  if (ending) {
    return link;
  } else {
    return <span>{link}, </span>;
  }
};
export default AttackPopup;
