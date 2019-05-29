import React from "react";
import PropTypes from "prop-types";

const VolumeOfDrink = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick("low")}>+</button>
      <button onClick={() => onClick("medium")}>++</button>
      <button onClick={() => onClick("High")}>+++</button>
    </div>
  );
};
VolumeOfDrink.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default VolumeOfDrink;
