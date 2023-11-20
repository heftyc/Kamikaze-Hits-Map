import React, { useRef, useEffect, useState } from "react";
import "./AboutPanel.css";

const AboutPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`about-panel ${isOpen ? "open" : ""}`}
      style={{ position: "absolute", width: "30vw", height: "92vh" }}
    >
      <p>
        The data in this map was initally compiled in{" "}
        <a href="https://en.wikipedia.org/wiki/List_of_Allied_vessels_struck_by_Japanese_special_attack_weapons">
          this Wikipedia page
        </a>
        . Many of the locations on this table are merely descriptions of where
        the attack happened, or only precise to one degree of latitude and
        longitude. (Note that the area within one degree of latitude and
        longitude near Okinawa is over 4,000 square miles, while the area within
        one minute is less than five square miles.) So, for these records, I did
        additional research.
      </p>
      <p>
        {" "}
        I used the National Archives catalog to look at ships' war diaries as
        well as action reports. American warships at the time recorded their
        position and a description of their actions in a monthly war diary. The
        position was typically recorded at 0800, 1200, and 2000. The precision
        of the coordinates varied between a exact second to a fraction of a
        degree. By finding the entry for the day of the attack, we can look at a
        description of the events and try to get closer to the attack's true
        location.
      </p>
      <p>
        Many ships seem to be missing war diaries for some months, or, in the
        case of cargo ships, don't have written records availible. For these
        scenarios I looked at the reports of other ships in the vicinity.{" "}
      </p>
      <p>
        This map does not currently include the water-based suicide attacks
        included in the Wikipedia article. I felt that they fell outside of the
        scope of the map. Differentiating between different types of attacks
        would also make the map harder to read. Ohka flying bomb attacks are
        still included.
      </p>
      <p>
        There is some information that would help me improve the accuracy of the
        locations for the ships. Many of the ships were record that they were
        hit while sitting at anchor in a particular berth, a "parking spot" in a
        harbor. I have the diagram showing the berths for Chimu Bay, Okinawa,
        but I can't find any of the others. If you can point me to a diagram of
        the berths of other harbors at Okinawa or the Phillipines, please reach
        out to me.{" "}
      </p>

      <p>
        The data in this map represents every known kamikaze strike on allied
        ships that did at least some damage. This damage could be very minor; in
        some attacks the plane only clipped the ship and damaged some equipment.
        Damaging near misses are also recorded, where the plane would miss its
        target but the explosion of the crash still inflicted damage. Complete
        misses, which would be fate of a majority of kamikaze attacks, are not
        recorded. Each datapoint represents the location of one ship getting hit
        by some number of aircraft in one day. It was not uncommon for a ship to
        get hit multiple times in one day, but the strikes were nearly always
        minutes apart as part of one attack.
      </p>
      <p>
        In some instances, a ship sank or was scuttled at a later date from the
        attack. In these cases, the Wikipedia article makes one entry for when
        the ship was damaged and one for when the ship was destroyed. On this
        map these cases are represented by a single point at the location of the
        attack itself and shows the ship as sunk.
      </p>
      <p>
        This map is built with <a href="https://react.dev/">React</a> and{" "}
        <a href="https://www.mapbox.com/">Mapbox</a>. You can look at the source
        code in its{" "}
        <a href="https://github.com/heftyc/Kamikaze-Hits-Map">
          GitHub repository
        </a>
        .
      </p>
    </div>
  );
};
export default AboutPanel;
