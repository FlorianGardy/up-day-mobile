import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

import { resetEvent } from "../pills/event/event.action";
import toilet from "../assets/toilet-paper.png";
import gym from "../assets/gym.png";
import drop from "../assets/drop.png";
import coffee from "../assets/coffee-cup.png";
import "./NavBar.scss";

const LEFT_BUTTON_NAVBAR_LABEL = "Calendrier";
const MIDDLE_BUTTON_NAVBAR_LABEL = "Nouveau";
const RIGHT_BUTTON_NAVBAR_LABEL = "Infos";
const UP_LEFT_BUTTON_MODAL_LABEL = "Défécation";
const UP_RIGHT_BUTTON_MODAL_LABEL = "Miction";
const DOWN_LEFT_BUTTON_MODAL_LABEL = "Sport";
const DOWN_RIGHT_BUTTON_MODAL_LABEL = "Boisson";

const Navbar = ({ resetEvent }) => {
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
          <h3 className="calendar">{LEFT_BUTTON_NAVBAR_LABEL}</h3>
        </NavLink>
        <div onClick={handleClick} className="events">
          <FontAwesomeIcon icon={faPlus} size="1x" />
          <h3 className="new">{MIDDLE_BUTTON_NAVBAR_LABEL}</h3>
        </div>
        <NavLink to="/about" activeClassName="activeLink" className="about">
          <FontAwesomeIcon icon={faQuestion} size="1x" />
          <h3 className="infos">{RIGHT_BUTTON_NAVBAR_LABEL}</h3>
        </NavLink>
      </div>
      <div
        className={`${eventBtnGroup}`}
        onClick={() => {
          resetEvent();
          setShouldDrop(false);
        }}
      >
        <div className="modal">
          <NavLink className="btn btn-Poo" to="/events/defecation">
            <figure className="circle">
              <img className="icon" src={toilet} alt="papier toilette" />
            </figure>
            <h3>{UP_LEFT_BUTTON_MODAL_LABEL}</h3>
          </NavLink>
          <NavLink className="btn btn-Pee" to="/events/urination">
            <figure className="circle">
              <img className="icon" src={drop} alt="goute d'eau" />
            </figure>
            <h3>{UP_RIGHT_BUTTON_MODAL_LABEL}</h3>
          </NavLink>
          <NavLink className="btn btn-Activity" to="/events/activity">
            <figure className="circle">
              <img className="icon" src={gym} alt="altères" />
            </figure>
            <h3>{DOWN_LEFT_BUTTON_MODAL_LABEL}</h3>
          </NavLink>
          <NavLink className="btn btn-Drink" to="/events/drink">
            <figure className="circle">
              <img className="icon" src={coffee} alt="tasse de café" />
            </figure>
            <h3>{DOWN_RIGHT_BUTTON_MODAL_LABEL}</h3>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const mapDisptachToProps = dispatch => ({
  resetEvent: () => dispatch(resetEvent())
});

Navbar.propTypes = {
  resetEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDisptachToProps
)(Navbar);
