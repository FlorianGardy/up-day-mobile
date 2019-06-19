import React from "react";
import PropTypes from "prop-types";
import styles from "./OptionSelector.module.css";

const OptionSelector = ({ options, onClick, activeOption, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        {options.map((option, i) => {
          let styleButton = styles.button;
          if (activeOption === option) {
            styleButton = styles.selectedButton;
          }
          return (
            <button
              className={styleButton}
              key={i}
              onClick={() => onClick(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

OptionSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  activeOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionSelector;
