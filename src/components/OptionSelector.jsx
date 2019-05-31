import React from "react";
import PropTypes from "prop-types";

const SelectorThreeChoice = ({
  options,
  clickHandler,
  activeChoice,
  style,
  styleWhenSelected
}) => {
  return (
    <div>
      {options.map((option, i) => {
        let styleButton = { ...style };
        if (activeChoice === option.value) {
          styleButton = { ...styleWhenSelected };
        }
        return (
          <button
            style={styleButton}
            key={i}
            onClick={() => clickHandler(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

SelectorThreeChoice.propTypes = {
  options: PropTypes.array.isRequired,
  activeChoice: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default SelectorThreeChoice;
