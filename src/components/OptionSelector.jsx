import React from "react";
import PropTypes from "prop-types";
import styles from "./OptionSelector.module.css";

const OptionSelector = ({ options, onClick, activeOption }) => {
  return (
    <div>
      {options.map((option, i) => {
        let styleButton = styles.button;
        if (activeOption === option.value) {
          styleButton = styles.selectedButton;
        }
        return (
          <button
            className={styleButton}
            key={i}
            onClick={() => onClick(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

OptionSelector.propTypes = {
  options: PropTypes.array.isRequired,
  activeOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionSelector;
