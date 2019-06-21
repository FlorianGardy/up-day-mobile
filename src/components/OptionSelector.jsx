import React from "react";
import PropTypes from "prop-types";
// import styles from "./OptionSelector.module.css";
import "./OptionSelector.scss";

const OptionSelector = ({ options, onClick, activeOption, title }) => {
  return (
    <div className="optionSelector">
      <h2>{title}</h2>
      <div>
        {options.map((option, i) => {
          let styleButton = "btn";
          if (activeOption === option.value) {
            styleButton = "btn selected";
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
    </div>
  );
};

OptionSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  activeOption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default OptionSelector;
