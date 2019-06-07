import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetEvent } from "../pills/event/event.action";

import styles from "./Navbar.module.scss";

const Navbar = ({ dispatch }) => {
  const [shouldDrop, setShouldDrop] = useState(false);

  const handleClick = () => {
    setShouldDrop(!shouldDrop);
  };

  let eventButtonGroup = shouldDrop
    ? styles.shownEventButtonGroup
    : styles.hiddenEventButtonGroup;

  return (
    <nav className={styles.bottomNavBar}>
      <NavLink to="/history" className={styles.history}>
        Historique
      </NavLink>
      <div onClick={handleClick} className={styles.events}>
        +
      </div>
      <NavLink to="/about" className={styles.about}>
        Infos
      </NavLink>
      <div
        className={eventButtonGroup}
        onClick={() => {
          dispatch(resetEvent());
          setShouldDrop(false);
        }}
      >
        <NavLink id={styles.buttonPee} to="/events/urination">
          Miction
        </NavLink>
        <NavLink id={styles.buttonDrink} to="/events/drink">
          Boisson
        </NavLink>
        <NavLink id={styles.buttonPoo} to="/events/defecation">
          Défécation
        </NavLink>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
