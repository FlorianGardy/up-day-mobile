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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className={styles.cross}
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
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
        <NavLink id={styles.buttonActivity} to="/events/activity">
          Activité
        </NavLink>
        <NavLink id={styles.buttonPoo} to="/events/defecation">
          Défécation
        </NavLink>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
