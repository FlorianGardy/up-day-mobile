import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetEvent } from "../pills/event/event.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

import "./NavBar.scss";

const Navbar = ({ dispatch }) => {
  const [shouldDrop, setShouldDrop] = useState(false);

  const handleClick = () => {
    setShouldDrop(!shouldDrop);
  };

  let eventBtnGroup = shouldDrop ? "modalVisible" : "modalHidden";

  return (
    <nav className="navBar">
      <div className="bottomNavBar">
        <NavLink to="/history" activeClassName="activeLink" className="history">
          <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
          <h3 className="calendar">Calendrier</h3>
        </NavLink>
        <div onClick={handleClick} className="events">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="cross"
          >
            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
          </svg>
        </div>
        <NavLink to="/about" activeClassName="activeLink" className="about">
          <FontAwesomeIcon icon={faQuestion} size="1x" />
          <h3 className="infos">Infos</h3>
        </NavLink>
      </div>
      <div
        className={`${eventBtnGroup}`}
        onClick={() => {
          dispatch(resetEvent());
          setShouldDrop(false);
        }}
      >
        <div className="modal">
          <NavLink className="btn-Poo" to="/events/defecation">
            Défécation
          </NavLink>
          <NavLink className="btn-Pee" to="/events/urination">
            Miction
          </NavLink>
          <NavLink className="btn-Activity" to="/events/activity">
            Activité
          </NavLink>
          <NavLink className="btn-Drink" to="/events/drink">
            Boisson
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
