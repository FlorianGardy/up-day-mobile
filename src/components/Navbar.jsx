import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { resetEvent } from "../pills/event/event.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

import "./navBar.scss";

const Navbar = ({ dispatch }) => {
  const [shouldDrop, setShouldDrop] = useState(false);

  const handleClick = () => {
    setShouldDrop(!shouldDrop);
  };

  let eventBtnGroup = shouldDrop ? "shownEventBtnGroup" : "hiddenEventBtnGroup";

  return (
    <nav className="navBar">
      <div className="bottomNavBar">
        <NavLink to="/history" className="history">
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
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
        <NavLink to="/about" className="about">
          <FontAwesomeIcon icon={faQuestion} size="2x" />
        </NavLink>
      </div>
      <div
        className={`${eventBtnGroup} btnGrid`}
        onClick={() => {
          dispatch(resetEvent());
          setShouldDrop(false);
        }}
      >
        <NavLink className="btn btnPee" to="/events/urination">
          MICTION
        </NavLink>
        <NavLink className="btn btnDrink" to="/events/drink">
          BOISSON
        </NavLink>
        <NavLink className="btn btnActivity" to="/events/activity">
          ACTIVITE
        </NavLink>
        <NavLink className="btn btnPoo" to="/events/defecation">
          DEFECATION
        </NavLink>
      </div>
    </nav>
  );
};

export default connect()(Navbar);
