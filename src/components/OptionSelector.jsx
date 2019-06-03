import React from "react";
import PropTypes from "prop-types";

const OptionSelector = ({
  options,
  onClick,
  activeOption,
  style,
  styleWhenSelected
}) => {
  return (
    <div>
      {options.map((option, i) => {
        let styleButton = { ...style };
        if (activeOption === option.value) {
          styleButton = { ...style, ...styleWhenSelected };
        }
        return (
          <button
            style={styleButton}
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
