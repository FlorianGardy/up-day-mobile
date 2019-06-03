import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [shouldDrop, setShouldDrop] = useState(false);

  const handleClick = () => {
    setShouldDrop(!shouldDrop);
  };

  let eventButtonGroup = shouldDrop
    ? styles.shownEventButtonGroup
    : styles.hiddenEventButtonGroup;
  console.log(eventButtonGroup);

  return (
    <nav>
      <NavLink to="/history" className={styles.history}>
        Historique
      </NavLink>
      {/* <div className={styles.events}> */}
      {/* <NavLink to="/events">Nouvel Evenement</NavLink> */}
      <div onClick={handleClick} className={styles.events}>
        Evenement
      </div>
      <NavLink to="/about" className={styles.about}>
        Infos
      </NavLink>
      <div className={eventButtonGroup}>
        <NavLink id="buttonPee" to="/events/urination">
          Miction
        </NavLink>
        <NavLink id="buttonDrink" to="/events/drink">
          Boisson
        </NavLink>
        <NavLink id="buttonPoo" to="/events/defecation">
          Défécation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
