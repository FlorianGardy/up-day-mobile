import React from "react";
import PropTypes from "prop-types";

import Styles from "./TopBar.module.css";

const TopBar = ({ title, leftButtonInfo, rightButtonInfo }) => {
  // Render
  return (
    <div className={Styles.TopBar}>
      {leftButtonInfo.isVisible && (
        <button onClick={() => leftButtonInfo.onClick()}>
          {leftButtonInfo.text}
        </button>
      )}
      <h1>{title}</h1>
      {rightButtonInfo.isVisible && (
        <button onClick={() => rightButtonInfo.onClick()}>
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
