import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className={styles.history}>
          <NavLink to="/history">Historique</NavLink>
        </li>
        <li className={styles.events}>
          <NavLink to="/events">Nouvel Evenement</NavLink>
        </li>
        <li className={styles.about}>
          <NavLink to="/about">Infos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
