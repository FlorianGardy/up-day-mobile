import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetEvent } from "../pills/event/event.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faPlus } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faPlus} size="1x" />
          <h3 className="new">Nouveau</h3>
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
