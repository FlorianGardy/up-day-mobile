import React from "react";
import PropTypes from "prop-types";

const TypeOfDrink = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick("eau")}>Eau/Soda</button>
      <button onClick={() => onClick("Café")}>Café/Thé</button>
      <button onClick={() => onClick("Alcool")}>Alcool</button>
    </div>
  );
};
TypeOfDrink.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TypeOfDrink;
