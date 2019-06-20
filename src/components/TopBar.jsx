import React from "react";
import PropTypes from "prop-types";

// import Styles from "./TopBar.module.css";
import "./TopBar.scss";

const TopBar = ({ title, leftButtonInfo, rightButtonInfo }) => {
  // Render
  return (
    <div className="topBar">
      {leftButtonInfo.isVisible && (
        <button className="leftBtn" onClick={() => leftButtonInfo.onClick()}>
          {leftButtonInfo.text}
        </button>
      )}
      <h1 className="title">{title}</h1>
      {rightButtonInfo.isVisible && (
        <button className="rightBtn" onClick={() => rightButtonInfo.onClick()}>
          {rightButtonInfo.text}
        </button>
      )}
    </div>
  );
};

// PropTypes
TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftButtonInfo: PropTypes.shape({
    onClick: PropTypes.func,
    text: PropTypes.string,
    isVisible: PropTypes.bool.isRequired
  }),
  rightButtonInfo: PropTypes.shape({
    onClick: PropTypes.func,
    text: PropTypes.string,
    isVisible: PropTypes.bool.isRequired
  })
};

export default TopBar;
