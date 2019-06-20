import React from "react";
import PropTypes from "prop-types";

// import Styles from "./TopBar.module.css";
import "./TopBar.scss";

const TopBar = ({ title, leftButtonInfo, rightButtonInfo }) => {
  // Render
  return (
    <div className="topBar">
      {leftButtonInfo.isVisible && (
        <div
          className="btn left isActive"
          onClick={() => leftButtonInfo.onClick()}
        >
          {leftButtonInfo.text}
        </div>
      )}
      <h1 className="title">{title}</h1>
      {rightButtonInfo.isVisible && rightButtonInfo.isActive ? (
        <div
          className="btn right isActive"
          onClick={() => rightButtonInfo.onClick()}
        >
          {rightButtonInfo.text}
        </div>
      ) : (
        <div className="btn right">{rightButtonInfo.text}</div>
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
